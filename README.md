# `diary`

Command line tool for generating Markdown-based diary files.

## Installation

```
git clone https://github.com/jonathanconway/diary
cd diary
npm install
npm install -g
```

## Usage

### Syntax

```
diary [branch|br|b]
```

### Creation of new diary file

When run, no matter what parameters are passed, `diary` will generate a new diary file for today's date, if one does not already exist. If a diary file does already exist for today's date, `diary` will not overwrite it.

Diary files are named in the format: `yyyymmdd.md`, where **yyyy** is the year, **mm** is the month and **dd** is the day. For example, if today is the 23rd of September 2023, then today's diary file will be named: `20230923.md`. On creation of a new diary file, the top-level heading is added in the format: `dd/MM/yyyy`. For example, `23/09/2023` for the date mentioned above.

### `branch` command

When the keyword `branch`, `br` or just `b` is used, the current git branch in the current directory is added as a 2nd-level heading.

For example, if the current directory is within a git repository and the current branch is: `feature/abc-123`, the following heading will be added to today's diary file:

```
## feature/abc-123
```

If there is no git repository in the current directory, nothing happens.

### `add` command

When the keyword `add` or `a` is used, any text following it is added as a 2nd-level heading.

For example, given the following command:

```
diary add "Meeting with Joanna"
```

The following heading is added to today's diary:

```
## Meeting with Joanna
```
