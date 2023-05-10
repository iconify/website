```yaml
title: Iconify Utils
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Iconify Utils

Iconify Utils is a set of reusable functions that are used by various Iconify icon components and related packages:

- Parsing Iconify icon sets in `[type]IconifyJSON` format.
- Exporting icons from `[type]IconifyIcon` format (can be extracted from icon set) as SVG.
- Parsing and validating icon names.
- Parsing and validating colors.
- Parsing emoji sequences, generating regular expressions to find emojis in text.

Library is written in TypeScript, is available as ES modules for modern development and CommonJS for older scripts.

## Installation

To install library run:

```sh
npm install @iconify/utils --save
```

## Examples

Documentation for each function below includes code samples.

In addition to that, [there are several bigger code samples for specific commonly used tasks](./examples/index.md) to help you figure out what functions to use.

## Functions

`include libraries/utils/functions-list`

## Advanced usage {#advanced}

Iconify Utils can do only basic parsing of `[type]IconifyJSON` and `[type]IconifyIcon` data. It is not meant for more complex stuff.

For more complex stuff, such as importing icons, validating icon code, changing palette, cleaning up, exporting to various formats, see [Iconify Tools package](../tools/index.md).
