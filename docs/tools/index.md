```yaml
title: Tools for Developers
types:
  IconifyJSON: '../types/iconify-json.md'
```

# Tools for developers

Iconify offers several libraries that help with converting icons, manipulating icon sets and generating icons.

Available libraries:

## Utils

[Iconify Utils](./utils/index.md) is a set of reusable functions used by icon components and other packages. Its main purpose is to read `[type]IconifyJSON` icon sets and extract data from it.

Utils package contains the following functions:

- Reading `[type]IconifyJSON` icon sets.
- Extracting subsets of icons or single icons.
- Generating SVG.
- Validating icon names used by icon components, such as `[icon]mdi:home`.

Additionally, it contains functions for:

- Parsing and validating colors. This can used by color input in icon picker.

Package works in any environment: node, browser, deno, and closed JavaScript environment.

## Tools

[Iconify Tools](./tools2/index.md) is a large package, its main purpose is to retrieve icons from various sources, validate them, clean them up and generate `[type]IconifyJSON` icon sets as well as various NPM packages.

Tools package contains the following functions:

- Importing icons from SVG icon sets, Figma documents.
- Validating icons, cleaning up content, optimising icons.
- Exporting icons to `[type]IconifyJSON` icon sets and several NPM packages.

It is used to maintain available open source icon sets.

This package is designed to work only in Node.js. It is not usable in browser.
