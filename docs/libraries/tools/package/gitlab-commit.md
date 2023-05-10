```yaml
title: Getting last commit hash for GitLab repository
functions:
  downloadGitLabRepo: './gitlab.md'
```

# Getting last commit hash for GitLab repository

This tutorial is part of [package functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]getGitLabRepoHash()` retrieves last commit hash from remote GitLab repository using GitLab API.

It is used by `[func]downloadGitLabRepo()` to check if repository has been updated and to generate download link for archive.

## Usage

Function has the following parameter:

- `[prop]options`, `[type]DownloadGitLabRepoOptions`. Options, same as in `[prop]downloadGitLabRepo()` function (only properties relevant to accessing GitLab API are used).

Function returns last commit hash as `[type]string`.

Function is asynchronous.
