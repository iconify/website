```yaml
title: Generate SVG with Iconify Utils
functions:
  parseIconSetAsync: '/docs/libraries/utils/parse-icon-set.md'
  getIconData: '/docs/libraries/utils/get-icon-data.md'
  iconToSVG: '/docs/libraries/utils/icon-to-svg.md'
  iconToHTML: '/docs/libraries/utils/icon-to-html.md'
```

# Generate SVG with Iconify Utils

This method requires a bit of coding, using Node.js.

If you are not using Node.js or not comfortable with the code below, [consider other methods of generating CSS for icons](../index.md#tools).

## Process

How it works:

- Load icon set data.
- Export icons as SVG files.

In the end, you'll have thousands of SVG files, which you can embed in HTML.

How you embed SVG in HTML depends on your project. If you can't automate it, simply copy/paste code from `[file].svg` file to `[file].html` file where you want to use icon.

## Node.js {#node}

If you do not have a Node.js app, you need to create one to generate CSS.

There are plenty of tutorials on how Node.js works, short version of steps:

- Install Node.js on your computer.
- Create directory for the project, run `[bash]npm init -y` to initialise it.

## Dependencies

You need to install 2 dependencies:

- `[npm]@iconify/utils` to install [Iconify Utils](/docs/libraries/utils/index.md) that have function to generate CSS.
- `[npm]@iconify/json` to install [data for all open source icon sets](/docs/icons/icon-data.md).

To install them, run

```bash
npm install --save-dev @iconify/utils @iconify/json
```

## Scripts

There are two sample scripts, use whichever works better for your use case:

- Script that exports all icons as `[file].svg` files from an icon set.
- Script with function that generates SVG for selected icon.

### Export all icons

This script exports all icons from icon set as `[file].svg` files.

Process of generating SVG files is simple:

- Load icon set.
- Parse it to list all icons.
- In callback generate `[file].svg` files for each icon.

```yaml
src: usage/svg-utils.js
```

Change options, run it to export SVG files.

Functions from [Iconify Utils](/docs/libraries/utils/index.md) used in sample:

- `[func]parseIconSetAsync()` to parse icon set.
- `[func]iconToSVG()` and `[func]iconToHTML()` to generate SVG.

### Get SVG for icon

This script generates SVG for selected icon.

You can use that function in your build process to generate SVG, which you can embed in HTML.

Process of generating SVG:

- Load icon set.
- Get data for selected icon.
- Generate SVG.

```yaml
src: usage/svg-func-utils.js
```

Functions from [Iconify Utils](/docs/libraries/utils/index.md) used in sample:

- `[func]getIconData()` to extract icon data from icon set.
- `[func]iconToSVG()` and `[func]iconToHTML()` to generate SVG.
