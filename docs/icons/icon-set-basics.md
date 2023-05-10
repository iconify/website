```yaml
title: 'Getting Started: Icon Sets'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  getIconData: '/docs/libraries/utils/get-icon-data.md'
  parseIconSet: '/docs/libraries/utils/parse-icon-set.md'
  defaultIconProps: '/docs/libraries/utils/default-icon-props.md'
```

# Icon Sets

What are icon sets?

Icon set is a set of icons, created by the same author or group of authors, published with the same name and license.

## Examples

Several examples of icon sets:

- [Material Design Icons](https://icon-sets.iconify.design/mdi/)
- [Material Design Icons Light](https://icon-sets.iconify.design/mdi-light/)
- [Tabler Icons](https://icon-sets.iconify.design/tabler/)
- [Twitter Emoji](https://icon-sets.iconify.design/twemoji/)

All icons in an icon set must have the following in common:

- Same license. License is per icon set, not per icon.
- Be either monotone or have hardcoded palette. Only one type of icons is stored in one icon set. See [icon basics](./icon-basics.md).

Additionally, icons in open source icon sets have the following in common:

- Icons use the same design principles: grid, padding.
- Icons thematically fit together.

## Format

In Iconify icons are not stored one by one as SVG, they are stored as icon sets in an easy to read custom JSON format, which uses `[type]IconifyJSON` type.

Advantages of using `[type]IconifyJSON` to store icon sets:

- One file per icon set instead of many SVG files.
- Easy to read, supported by all programming languages.
- Stores only content of icon, without `[tag]svg` element. This makes it easy to manipulate icons without parsing XML, add custom attributes to `[tag]svg`, use framework native code to create SVG element in frameworks like React.
- Stores metadata, such as icon set author information, license, categories and themes used to filter icons, used when browsing available icons.
- Prevents duplication with aliases, which support basic transformations: flip and 90/180/270 degrees rotations. For example, instead of designing `[icon]arrow-left`, you can design only `[icon]arrow-right` and create an alias for it with horizontal flip.

## Naming

Each icon set has a prefix. It is unique for each icon set.

Prefix naming rules are the same as icon naming rules: allowed characters are `[str]a-z`, numbers and `[str]-`. Hyphen cannot be used at start or end of name, 2 hyphens in a row `[str]--` are not allowed.

Examples of valid prefixes: `[str]mdi`, `[str]mdi-light`, `[str]fluent-emoji-flat`.

## Functions

To parse icon sets, [Iconify Utils](/docs/libraries/utils/index.md) offers the following functions:

- `[func]parseIconSet()` parses an entire icon set, calling custom function for every icon.
- `[func]getIconData()` extracts data for an icon in `[type]IconifyIcon` format.

To create convert icons to icon sets, use [Iconify Tools](/docs/libraries/tools/index.md).
