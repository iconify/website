```yaml
title: Custom Icon Sets
types:
  IconifyJSON: '../types/iconify-json.md'
functions:
  exportJSONPackage: '../tools/tools2/export/json-package.md'
```

# Custom icon sets

You can also use Iconify with custom icons.

Most icon components and plugins support custom icon sets. The only exception are plugins that are not meant to work with custom icon sets, such as [Iconify plugin for Figma](../design/figma/index.md).

## Format

How custom icon sets are handled depends on your use case.

[All tools in Iconify ecosystem](../usage/index.md) work with `[type]IconifyJSON` format.

Some icon components and plugins that are designed to work in Node.js (server side rendering or works with bundlers) can import individual SVG files, but usually they convert icons to `[type]IconifyJSON` format.

## Import tools

Importing custom icon sets can be done at build time in Node.js environment.

It is done with [Iconify Tools](../tools/tools2/index.md) package.

Typical import process:

- Import icons. There are [various import functions](../tools/tools2/import/index.md). They create unparsed icon set.
- [Cleaning up imported icons](../tools/tools2/icon/cleanup.md).
- For monotone icon sets [parsing colors](../tools/tools2/icon/colors.md) to make sure all icons use `[prop]currentColor`.
- [Export icon set](../tools/tools2/icon-set/export.md) to `[type]IconifyJSON`.

See [Iconify Tools code examples](../tools/tools2/examples/index.md) for code samples.

## Using custom icon sets

Usage depends on where you want to use it. See documentation of icon component you want to use icons with.

If icon component you want to use loads icon data on demand, you probably want to [setup your own Iconify API](../api/hosting-js/index.md) to host custom icon sets.
