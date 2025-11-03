```yaml
title: Custom icons in Iconify for Tailwind CSS
types:
  IconifyJSON: "/docs/types/iconify-json.md"
```

# Custom icons in Iconify for Tailwind CSS

This documentation explains how to use [Iconify plugin for Tailwind CSS 4](./index.md) with custom icons.

## Loader options

There are two methods of loading icon sets:

- Loading a pre-parsed icon set in `[type]IconifyJSON` format.
- Loading all icons in a folder.

Syntax is similar:

```css
@plugin "@iconify/tailwind4" {
  icon-sets: from-json(test, "./icon-sets/test.json"), from-folder(test2, "./icon-sets/svgs");
}
```

Add option `[prop]icon-sets` to plugin config in CSS, with comma separated sets of options.

## Loading from JSON file

Loading from JSON file is faster because there is no clean up to do, so if you can, load icon sets from a JSON file.

File must be in `[type]IconifyJSON` format, which can be created with [Iconify Tools](/docs/libraries/tools/index.md).

To add an icon set to config, add `[func]from-json()` function to `[prop]icon-sets` option, with two values:

- Icon set prefix
- Path to .json file, relative to project's root directory

## Loading from folder

Loading from folder makes it easy to use existing icons without pre-parsing them.

To add a folder with icons to config, add `[func]from-folder()` function to `[prop]icon-sets` option, with two values:

- Icon set prefix
- Path to folder, relative to project's root directory

You can load icons from multiple folders by adding multiple entries with different prefixes to `[prop]icon-sets` option.

### Clean up

Icons loaded from folder are cleaned up and optimised.

If you do not want this, pre-parse icons, export them as `[type]IconifyJSON` file and load .json file instead.

How icons are handled:

- All names are cleaned up: converted to lower case with dash as separator.
- Icon palette is checked. If icon has more than one color, it is treated as a colored icon and rendered as background image. If icon has one color, it is treated as a monotone icon and rendered as a mask image.

## Examples

Examples of configuration:

```css
@plugin "@iconify/tailwind4" {
  icon-sets: from-json(test, "./icon-sets/test.json"), from-folder(test2, "./assets/svg");
}

@plugin "@iconify/tailwind4" {
  prefix: "square-icon";
  square: true;
  icon-sets: from-folder(test3, "./assets/svg");
}
```
