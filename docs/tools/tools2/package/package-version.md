```yaml
title: Getting version number of package
functions:
  downloadNPMPackage: './npm.md'
  getNPMVersion: './npm-version.md'
```

# Getting version number of package

This tutorial is part of [package functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]getPackageVersion()` is a simple function that retrieves version number from `[file]package.json` in target directory.

It is used by `[func]downloadNPMPackage()` to retrieve version number of package that has already been downloaded and extracted. It can also be used to get version number of package downloaded from Git repository (as shown in example below).

## Usage

Function has the following parameter:

- `[prop]target`, `[type]string`. Target directory, without `[str]/package.json`.

Function returns version number as `[type]string`.

Also see `[func]getNPMVersion()`.

Function is asynchronous.

## Example

```yaml
src: tools/tools2/package/package-version.ts
title: 'example.ts'
```
