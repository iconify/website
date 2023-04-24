```yaml
title: Iconify Tools 2
replacements:
  - code: '@iconify/tools@2'
    value: '${tools.import-tools2}'
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyJSON: '../../types/iconify-json.md'
  IconifyInfo: '../../types/iconify-info.md'
  FullIconifyIcon: './full-iconify-icon.md'
  IconifyIconName: './icon-name.md'
  Color: '../utils/color.md'
  FullIconCustomisations: '../utils/icon-customisations.md'
  IconCustomisations: '../utils/icon-customisations.md'
  SVG: './svg/index.md'
  IconSet: './icon-set/index.md'
functions:
  mergeIconSets: './icon-set/merge.md'
  setIcon: './icon-set/set-icon.md'
  cleanupSVG: './icon/cleanup.md'
```

# Iconify Tools

Iconify Tools is a set of reusable functions for importing, exporting and parsing icons.

Library is written in TypeScript, is available as ES modules for modern development and CommonJS for older scripts.

## Installation

To install library run:

```sh
npm install @iconify/tools@2 --save
```

## Classes

`include tools/tools2/main-classes`

## Import

To start working with icon set, you can either create blank icon set or import icon set from some source.

Documentation from importing icons:

- [Importing Iconify JSON data](./import/json.md).
- [Importing SVG](./import/svg.md).
- [Importing all SVG in directory](./import/directory.md).
- [Importing icons from Figma](./import/figma/index.md).

Before using Iconify Tools, you should be aware that package is opinionated. Certain tags are not allowed and will fail import. See [SVG import limitations](./tags.md).

## Cleanup and validation

Cleaning up and validating icons is the first thing you should do after importing icons if icons come from:

- Image editing software. Often software leave a lot of junk code in icons, which must be removed.
- Third party. You need to make sure icons do not contain scripts, events.

See `[func]cleanupSVG()` documentation.

## Manipulation

Iconify Tools offer several functions for manipulating icons. You can:

- Check or change color palette.
- Optimise icon.
- Fix `[tag]path` elements to support old software.

See [icon manipulation functions](./icon/index.md) for list of available functions.

## Export

After manipulating icons, you can [export icon set to various formats](./export/index.md).

Documentation from exporting icons:

- [Exporting Iconify JSON data](./export/json.md).
- [Exporting SVG to directory (simplified version)](./export/directory.md).
- [Exporting SVG](./export/svg.md).
- [Exporting icon packages](./export/icon-package.md).
- [Exporting Iconify JSON packages](./export/json-package.md).

## Package functions {#package}

In addition to managing icons, Iconify Tools has several [functions to manage packages and repositories](./package/index.md):

- [Download Git repository](./package/git.md)
- [Download GitHub repository using GitHub API](./package/github.md)
- [Download NPM package](./package/npm.md)
- [Compare directories](./package/compare.md)
- [Manage versions of packages or repositories](./package/index.md#versions)
