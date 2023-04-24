```yaml
title: Getting last commit hash for GitHub repository
functions:
  downloadGitHubRepo: './github.md'
```

# Getting last commit hash for GitHub repository

This tutorial is part of [package functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]getGitHubRepoHash()` retrieves last commit hash from remote GitHub repository using GitHub API.

It is used by `[func]downloadGitHubRepo()` to check if repository has been updated and to generate download link for archive.

## Usage

Function has the following parameter:

- `[prop]options`, `[type]DownloadGitHubRepoOptions`. Options, same as in `[prop]downloadGitHubRepo()` function (only properties relevant to accessing GitHub API are used).

Function returns last commit hash as `[type]string`.

Function is asynchronous.
