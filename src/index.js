const path = require('path');
const Git = require('nodegit');
const ora = require('ora');
const { readdirSync } = require('fs');

const spinner = ora('Loading');
const currentDirectory = process.env.NODE_ENV === 'dev'
  ? path.resolve(process.cwd(), '../')
  : process.cwd();

const directories = () => readdirSync(currentDirectory, { withFileTypes: true })
  .filter((directory) => directory.isDirectory())
  .filter((directory) => !directory.name.startsWith('.'))
  .map((directory) => directory.name);

const options = {
  callbacks: {
    credentials(_, userName) {
      return Git.Cred.sshKeyFromAgent(userName);
    },
    certificateCheck() {
      return 0;
    },
  },
};

async function open(directory) {
  try {
    const repository = await Git.Repository.open(`${currentDirectory}/${directory}/.git`);
    await repository.fetchAll(options);
    await repository.mergeBranches('master', 'origin/master');
  } catch (error) {
    spinner.fail(directory);
  }
}

async function execute() {
  spinner.start();
  await Promise
    .all(directories().map(async (directory) => {
      await open(directory);
      spinner.succeed(directory);
    }))
    .finally(() => spinner.clear());
}

execute();