```yaml
title: Downloading Git repository
types:
  DownloadGitRepoResult: './git.md#result'
```

# Downloading Git repository

This tutorial is part of [package functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]downloadGitRepo()` creates a shallow clone of Git repository.

## Git executable

This function uses Git to clone repository. Make sure Git is installed on your computer.

## Usage

Function has the following parameter:

- `[prop]options`, `[type]object`. Options, see below.

Function returns:

- `[type]DownloadGitRepoResult` object on success.
- `[str]not_modified` string if repository has not been updated since last run (can be returned only if `[prop]ifModifiedSince` option is set).

In case of error, function might throw an exception, which you can catch using `[func]try` and `[func]catch`.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

### Options

Options object has the following mandatory properties:

- `[prop]target`, `[type]string`. Target directory. If directory is missing, it will be created. Value can contain `[str]{hash}` that will be replaced with latest commit hash.
- `[prop]remote`, `[type]string`. Git repository, such as `[str]git@github.com:iconify/tools.git`.
- `[prop]branch`, `[type]string`. Branch, such as `[str]master`.

and the following optional properties:

- `[prop]cleanup`, `[type]boolean`. If `true`, target directory will be emptied before exporting icons. Default is `false`.
- `[prop]ifModifiedSince`, `[type]string | true | DownloadGitRepoResult`. If set, function will check if repository has been updated.

#### ifModifiedSince

Option `[prop]ifModifiedSince` is used when you want to retrieve data only if repository has been updated.

Value can be one of the following:

- Commit hash as `[type]string`. You can get it from `[prop]hash` property of result of previous run.
- If value is `true`, function compare hash in remote repository with hash from previously downloaded files in `[prop]target` directory.
- `[type]DownloadGitRepoResult` value from previous run.

If repository has not been modified, function will return string `[str]not_modified`.

If option is not set, function cannot return `[str]not_modified`.

### Result

Result object has the following properties:

- `[prop]downloadType` = `[str]git`.
- `[prop]contentsDir`, `[type]string`. Directory where repository was cloned to. It is normalized version of `[prop]target` option, without trailing `[str]/` and with `[str]{hash}` replaced with commit hash.
- `[prop]hash`, `[type]string`. Last commit hash.

## Example

```yaml
src: libraries/tools/package/git.ts
title: 'boxicons.ts'
```
