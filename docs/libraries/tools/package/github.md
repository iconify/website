```yaml
title: Downloading GitHub repository using API
types:
  DownloadGitHubRepoResult: './github.md#result'
```

# Downloading GitHub repository using API

This tutorial is part of [package functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]downloadGitHubRepo()` downloads files from GitHub repository using GitHub API.

## Usage

Function has the following parameter:

- `[prop]options`, `[type]object`. Options, see below.

Function returns:

- `[type]DownloadGitHubRepoResult` object on success.
- `[str]not_modified` string if repository has not been updated since last run (can be returned only if `[prop]ifModifiedSince` option is set).

In case of error, function might throw an exception, which you can catch using `[func]try` and `[func]catch`.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

### Options

Options object has the following mandatory properties:

- `[prop]target`, `[type]string`. Target directory. If directory is missing, it will be created. Value can contain `[str]{hash}` that will be replaced with latest commit hash.
- `[prop]user`, `[type]string`. GitHub user or organisation, such as `[str]iconify` for `[str]git@github.com:iconify/tools.git`.
- `[prop]repo`, `[type]string`. Repository name, such as `[str]tools` for `[str]git@github.com:iconify/tools.git`.
- `[prop]branch`, `[type]string`. Branch, such as `[str]master`.
- `[prop]token`, `[type]string`. GitHub API token. See below.

and the following optional properties:

- `[prop]cleanup`, `[type]boolean`. If `true`, target directory will be emptied before exporting icons. Default is `false`.
- `[prop]ifModifiedSince`, `[type]string | DownloadGitHubRepoResult`. If set, function will check if repository has been updated.

Function downloads archive, puts it in `[prop]target` directory, then unpacks it in sub-directory. There are two optional properties that allow you remove outdated files without removing everything. Options do not work if `[prop]cleanup` is enabled because `[prop]cleanup` removes everything.

- `[prop]cleanupOldFiles`, `[type]boolean`. If `true`, old zip files in target directory will be removed. Default is `false`.
- `[prop]cleanupOldDirectories`, `[type]boolean`. If `true`, old unpacked archives in target directory will be removed. Default is `true`.

#### token

You can get GitHub API token from [developer settings on GitHub](https://github.com/settings/tokens).

Token does not need write or admin access, access to workflows, it requires only read access to repository you want to clone.

If you are accessing public repositories, checking `[str]repo:status` and `[str]public_repo` is enough.

If you are accessing private repositories, check `[str]repo` section.

Never commit token to a repository or publish it anywhere! Keep it secret. There are many ways to keep token secret, most common is using environmental variables to pass token to script. There are plenty of tutorials available that explain different methods.

#### ifModifiedSince

Option `[prop]ifModifiedSince` is used when you want to retrieve data only if repository has been updated.

Value can be one of the following:

- Commit hash as `[type]string`. You can get it from `[prop]hash` property of result of previous run.
- `[type]DownloadGitHubRepoResult` value from previous run.

If repository has not been modified, function will return string `[str]not_modified`.

If option is not set, function cannot return `[str]not_modified`.

### Result

Result object has the following properties:

- `[prop]downloadType` = `[str]github`.
- `[prop]rootDir`, `[type]string`. Target directory. It is normalized version of `[prop]target` option, without trailing `[str]/` and with `[str]{hash}` replaced with commit hash.
- `[prop]contentsDir`, `[type]string`. Directory where archive was unpacked.
- `[prop]hash`, `[type]string`. Last commit hash.

Value is `[prop]contentsDir` always contains `[prop]rootDir` because archives are unpacked in sub-directory of `[prop]rootDir`. For example:

```json
{
	"downloadType": "github",
	"rootDir": "output/github-test",
	"contentsDir": "output/github-test/iconify-collections-json-4049946",
	"hash": "40499460e21011478a64c1cb1212f3308168462c"
}
```

## Example

```yaml
src: libraries/tools/package/github.ts
title: 'download-jam-icons.ts'
```
