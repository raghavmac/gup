# gup

Library to git pull all the projects in a directory and recursive search file contents using ripgrep.

## Pre-requisite

- [**ripgrep**](https://github.com/BurntSushi/ripgrep)
  -  **Mac** - `brew install ripgrep` 
  -  **Windows** - `choco install ripgrep`

## Usage

`gup` or `gupr` - command to git pull all the git projects from current directory

`gup --find <search_query>` or `-f` - recursive search across files and folders

`gup --no-pull -f 'search query'` or `-n` - skip git pull if already done

## Development

```sh
git clone https://github.com/raghavmac/gup.git
yarn
```
or `npm install` as alternative

## Run

```sh
npm start
```