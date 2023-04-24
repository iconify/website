```yaml
title: Downloading binary file
functions:
  downloadGitHubRepo: './github.md'
  downloadNPMPackage: './npm.md'
  sendAPIQuery: './api-query.md'
```

# Download binary file

This tutorial is part of [package functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]downloadFile()` is a wrapper for `[func]fetch` that downloads binary file.

It is used by functions that retrieve archives in download functions, such as `[func]downloadGitHubRepo()` and `[func]downloadNPMPackage()`.

To retrieve text files, see `[func]sendAPIQuery()`.

## Usage

Function has the following parameters:

- `[prop]query`, `[type]APIQueryParams`. URI and parameters.
- `[prop]filename`, `[type]string`. Where to store file.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

### APIQueryParams

`[type]APIQueryParams` object has the following properties:

- `[prop]uri`, `[type]string`. Base URI.
- `[prop]params`, `[type]URLSearchParams`. Optional parameters.
- `[prop]header`, `[type]Record<string, string>`. Optional headers.
