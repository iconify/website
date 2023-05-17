```yaml
title: Iconify Documentation
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80 icon sets'
    value: '${counters.sets} icon sets'
  - code: '80 open source'
    value: '${counters.sets} open source'
```

# Iconify documentation

Iconify is a set of tools for developers and designers, created to make it easy to work with different icon sets in a consistent way.

It includes:

- Tools for importing, exporting and organising icons.
- Over 60k icons from more than 80 open source icon sets, all cleaned up, optimised and kept up to date.
- Components for various frameworks that work with that icon data.
- Plugins for UI developers.
- Public API to browse, search icon sets and retrieve icon data. It also generates SVG and CSS on demand.

## Icons

[Icons section of documentation](./icons/index.md) explains the following:

- [Icon basics](./icons/icon-basics.md): naming rules, types of icons, cleanup.
- [Icon set basics](./icons/icon-set-basics.md): what are icon sets, data format, naming, how to parse them.
- [Where to get icon data](./icons/icon-data.md) for over 80 open source icon sets.
- [Building custom icon sets](./icons/custom.md).

## How to use icons

Iconify ecosystem offers many ways to use icons, for both coders and designers.

For using icons in HTML, there are several viable options:

`include usage/options/html`

For designers, Iconify ecosystem offers several ways to easily import icons in various design tools:

`include usage/options/design`

You can browse all available icons and copy code or SVG on the following websites:

`include usage/options/websites`

Find icon you want, select it, copy code sample or SVG to clipboard, paste it in your project.

See [how to use icons](./usage/index.md) for more details.

## Advanced usage

This section is for advanced usage, getting deeper in the Iconify ecosystem.

### Libraries

There are several Node.js packages that Iconify ecosystem is built on.
You can use them in your libraries or a build process to import/export icon sets,
validate and clean up icons, generate SVG, CSS, and more.

#### Types

Before using any tools, you need to understand data structures used in Iconify ecosystem.

See [Iconify types documentation](./types/index.md).

#### Utils

[Iconify Utils](./libraries/utils/index.md) contains reusable functions for:

- working with icon sets
- working with icons
- generating SVG, CSS

as well as some helper functions.

This package is designed to work in any environment. It is used by all Iconify packages, including icon components, API, plugins.

#### Tools

[Iconify Tools](./libraries/tools/index.md) is designed to import, export and process icon data.

It is used to maintain available open source icon sets.

This package is designed to work only in Node.js. It is not usable in the browser.

### API

[Iconify API](./api/index.md) is an open source hosted (or self-hosted) service, indented for developers. It is used to:

- Provide icon data on demand, which made it possible to create [Iconify icon components](./icon-components/index.md) that load icons on demand.
- [Generate SVG](./api/svg.md), which developers can link to in HTML or stylesheet.
- [Generate CSS](./api/css.md) to render icons as background or mask images.
- Provide data for hosted icons, including search functionality. This can be used to create icon pickers and is currently used by [Iconify plug-ins for various UI design tools](./design/index.md).
