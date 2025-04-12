```yaml
title: Iconify Documentation
replacements:
  - code: "60k"
    value: "${counters.icons-short}"
  - code: "60,000"
    value: "${counters.icons}"
  - code: "80 icon sets"
    value: "${counters.sets} icon sets"
  - code: "80 open source"
    value: "${counters.sets} open source"
```

# Iconify documentation

Iconify is a set of tools for developers and designers, created to make it easy to work with different icon sets in a consistent way.

It includes:

- Over 60k icons from more than 80 open source icon sets, all cleaned up, optimised and kept up to date.
- Tools for importing, exporting and organising icons.
- Components and plugins to render icons.
- Plugins for UI developers to browse and import icons to design tools.
- Public API to browse, search icon sets and retrieve icon data.

## How to use icons

Iconify ecosystem offers many ways to use icons, for both coders and designers.

To use icons in HTML documents, there are several viable options:

`include usage/options/html`

For designers, Iconify ecosystem offers several ways to easily import icons in various design tools:

`include usage/options/design`

You can browse all available icons and copy code or SVG on the following websites:

`include usage/options/websites`

Find icon you want, select it, copy code sample or SVG to clipboard, paste it in your project.

See [how to use icons](./usage/index.md) for more details.

## Icons data

Unlike other projects, Iconify is not a dump of SVG files.

Icons pass strict validation, clean up and optimisation process. Icons are automatically kept up to date.

If you want to use icons with your own components, icon data is available in easy to use format.

In the [icons section of documentation](./icons/index.md) you will find:

- [Where to get icon data](./icons/icon-data.md) to use in your projects.
- [Icon clean up and optimisation](./icons/icon-basics.md): naming rules, types of icons, cleanup process.
- [Icon sets](./icons/icon-set-basics.md): what are icon sets, data format, naming, how to parse them.
- [How to building a custom icon set](./icons/custom.md), if you want to use your icons with Iconify ecosystem.

## Libraries

Iconify offers several packages to work with icons.

All packages are JavaScript only. However, formats are rather easy to understand, types are documented, so you can port code to whatever language you are using.

There are 3 main packages:

- Types package (TypeScript) that describe data format.
- Utilities package, which contains reusable helper functions that work in Node and in browser.
- Tools package, which contains tools for importing, exporting icon sets, processing icons. This is a Node.js only package.

### Types

Before using any tools, you need to understand data structures used in Iconify ecosystem.

See [Iconify types documentation](./types/index.md).

### Utils

[Iconify Utils](./libraries/utils/index.md) contains reusable functions for:

- reading and parsing icon sets.
- generating SVG, CSS code for icons.

as well as many other helper functions.

This package is designed to work in any environment. It is used by all Iconify packages, including icon components, API, plugins.

### Tools

[Iconify Tools](./libraries/tools/index.md) is designed to import, export and process icon data.

It is used to maintain available open source icon sets.

This package is designed to work only in Node.js. It is not usable in the browser.

## API

[Iconify API](./api/index.md) is an open source hosted (or self-hosted) service, indented for developers. It is used to:

- Provide icon data on demand, which made it possible to create [Iconify icon components](./icon-components/index.md) that load icons on demand.
- [Generate SVG](./api/svg.md), which developers can link to in HTML or stylesheet.
- [Generate CSS](./api/css.md) to render icons as background or mask images.
- Provide data for hosted icons, including search functionality. This can be used to create icon pickers and is currently used by [Iconify plug-ins for various UI design tools](./design/index.md).
