```yaml
title: Downloading NPM package
types:
  DownloadNPMPackageResult: './npm.md#result'
```

# Downloading NPM package

This tutorial is part of [package functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]downloadNPMPackage()` downloads NPM package.

Unlike `[bash]npm install`, this function downloads and extracts only requested NPM package, it does not install dependencies and does not run any scripts.

## Usage

Function has the following parameter:

- `[prop]options`, `[type]object`. Options, see below.

Function returns:

- `[type]DownloadNPMPackageResult` object on success.
- `[str]not_modified` string if repository has not been updated since last run (can be returned only if `[prop]ifModifiedSince` option is set).

In case of error, function might throw an exception, which you can catch using `[func]try` and `[func]catch`.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

### Options

Options object has the following mandatory properties:

- `[prop]target`, `[type]string`. Target directory. If directory is missing, it will be created.
- `[prop]package`, `[type]string`. Package name.

and the following optional properties:

- `[prop]tag`, `[type]string`. NPM tag. Default is `[str]latest`.
- `[prop]cleanup`, `[type]boolean`. If `true`, target directory will be emptied before exporting icons. Default is `false`.
- `[prop]ifModifiedSince`, `[type]string | true | DownloadNPMPackageResult`. If set, function will check if repository has been updated.

#### ifModifiedSince

Option `[prop]ifModifiedSince` is used when you want to retrieve data only if repository has been updated.

Value can be one of the following:

- Version as `[type]string`. You can get it from `[prop]version` property of result of previous run.
- If value is `true`, function compare latest version in NPM registry with version from previously downloaded files in `[prop]target` directory.
- `[type]DownloadNPMPackageResult` value from previous run.

If package has not been updated, function will return string `[str]not_modified`.

If option is not set, function cannot return `[str]not_modified`.

### Result

Result object has the following properties:

- `[prop]downloadType` = `[str]npm`.
- `[prop]rootDir`, `[type]string`. Target directory. It is normalized version of `[prop]target` option, without trailing `[str]/`.
- `[prop]contentsDir`, `[type]string`. Directory where archive was unpacked.
- `[prop]version`, `[type]string`. Package version.

Value is `[prop]contentsDir` always contains `[prop]rootDir` because archives are unpacked in sub-directory of `[prop]rootDir`. For example:

```json
{
	"downloadType": "npm",
	"rootDir": "output/npm-test",
	"contentsDir": "output/npm-test/package",
	"version": "1.0.1"
}
```

## Example

```yaml
src: tools/tools2/package/npm.ts
title: 'example.ts'
```
