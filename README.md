# gupr

Library to git pull all the projects in a directory and recursive search file contents using ripgrep.

## Pre-requisite

- [**ripgrep**](https://github.com/BurntSushi/ripgrep)
  -  **Mac** - `brew install ripgrep` 
  -  **Windows** - `choco install ripgrep`

## Usage

`gupr` - command to git pull all the git projects from current directory

`gupr --find <search_query>` or `-f` - recursive search across files and folders

`gupr --no-pull -f 'search query'` or `-n` - skip git pull if already done

## Development

```sh
git clone https://github.com/raghavmac/gupr.git
yarn
```
or `npm install` as alternative

## Run

```sh
npm start
```