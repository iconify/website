```yaml
title: Getting Git repository hash
functions:
  downloadGitRepo: './git.md'
```

# Getting Git repository hash

This tutorial is part of [package functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]getGitRepoHash()` retrieves last commit hash from local Git repository.

It is used by `[func]downloadGitRepo()`.

## Usage

Function has the following parameter:

- `[prop]options`, `[type]DownloadGitRepoOptions`. Options, same as in `[prop]downloadGitRepo()` function (only `[prop]target` property is used).

Function returns last commit hash as `[type]string`.

Function is asynchronous.
