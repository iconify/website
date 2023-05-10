```yaml
title: Managing packages
types:
  IconSet: '../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  importDirectory: '../import/directory.md'
  importFromFigma: '../import/figma/index.md'
  downloadGitRepo: './git.md'
  downloadGitHubRepo: './github.md'
  downloadGitLabRepo: './gitlab.md'
  downloadNPMPackage: './npm.md'
  compareDirectories: './compare.md'
  sendAPIQuery: './api-query.md'
  downloadFile: './download-file.md'
  bumpVersion: './bump-version.md'
  getPackageVersion: './package-version.md'
  getNPMVersion: './npm-version.md'
  getGitRepoHash: './git-repo-hash.md'
  getGitHubRepoHash: './github-commit.md'
  getGitLabRepoHash: './gitlab-commit.md'
```

# Managing packages

[Iconify Tools](../index.md) has several functions to help automate downloading, comparing and updating packages.

## Async

Most functions listed below are asynchronous.

`include libraries/tools/async`

## Downloading packages

These functions download packages from various sources.

Functions can be used to download source for icon sets, which can be imported using `[func]importDirectory()` function.

Functions can also be used to compare exported data with previously published data, then publish new version if package was changed.

- `[func]downloadGitRepo()` creates a shallow clone of Git repository.
- `[func]downloadGitHubRepo()` downloads a GitHub repository using GitHub API. It is similar to `[func]downloadGitRepo()`, but uses API instead of Git client.
- `[func]downloadGitLabRepo()` downloads a GitLab repository using GitLab API. It is similar to `[func]downloadGitRepo()`, but uses API instead of Git client.
- `[func]downloadNPMPackage()` downloads NPM package from registry.

Additionally, there are few functions to download files by URL:

- `[func]sendAPIQuery()` is a wrapper for `[func]fetch` with support for cache. It is used by functions like `[func]importFromFigma()`.
- `[func]downloadFile()` is also a wrapper for `[func]fetch` that simplifies downloading of binary files, such as archives. It is used by GitHub, GitLab and NPM downloaders.

## Versions {#versions}

When publishing packages, you might want to change package version. Iconify Tools offers several functions to help you automate process:

- `[func]bumpVersion()` increases version number.

Functions to get version number or commit hash from local files:

- `[func]getPackageVersion()` retrieves version number from `[file]package.json`.
- `[func]getGitRepoHash()` retrieves hash of local git repository.

Functions to get version number or commit hash from remote package/repository:

- `[func]getNPMVersion()` retrieves latest version of package from NPM registry.
- `[func]getGitHubRepoHash()` retrieves hash of last commit from remote GitHub repository.
- `[func]getGitLabRepoHash()` retrieves hash of last commit from remote GitLab repository.

## Comparing directories

When automating build process, publishing new package when nothing was changed makes no sense. There is a function in Iconify Tools to check for changes:

- `[func]compareDirectories()` compares contents of two directories.

Unlike simple comparison, this function ignores version numbers in `[file]package.json`, hidden files and different line endings.
