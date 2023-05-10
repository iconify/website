```yaml
title: Getting package version and URL from NPM
functions:
  downloadNPMPackage: './npm.md'
  getNPMVersion: './package-version.md'
```

# Getting NPM package version and URL

This tutorial is part of [package functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]getNPMVersion()` retrieves latest version of package from NPM registry and URL to download package.

## Usage

Function has the following parameter:

- `[prop]options`, `[type]NPMPackageOptions`. Options, same as in `[prop]downloadNPMPackage()` function (only `[prop]package` and `[prop]tag` properties are used).

Function returns `[type]object` with the following properties:

- `[prop]version`, `[type]string`. Version number.
- `[prop]file`, `[type]string`. URL of archive, if available.

## Example

```yaml
src: libraries/tools/package/npm-version.ts
title: 'example.ts'
extra:
  - src: libraries/tools/package/npm-version.json
    title: 'Result:'
```
