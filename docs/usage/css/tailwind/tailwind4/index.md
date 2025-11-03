```yaml
title: Iconify for Tailwind CSS 4
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
```

# Iconify for Tailwind CSS

Iconify plugin for Tailwind CSS makes it easy to use icons in Tailwind CSS.

You can use [over 60,000 open source icons](/docs/icons/icon-data.md) and custom icons with minimal code.

## Plugins

This documentation covers plugin for Tailwind 4.

For an older Tailwind 3 plugin, see [Tailwind 3 plugin documentation](../tailwind3/index.md).
It works with Tailwind 4 too, currently has more options than new plugin, but requires creating a config file.

## Installation

To install plugin, add `[npm]@iconify/tailwind4` as dev dependency:

```sh
npm i -D @iconify/tailwind4
```

Plugin does not include icons. You need to add icon sets you want to use.

To add all open source icon sets, add `[npm]@iconify/json` as dev dependency:

```sh
npm i -D @iconify/json
```

You can also install only icon sets that you want to use by installing `[npm]@iconify-json/{prefix}` dependencies (where `[str]{prefix}` is icon set prefix), such as `[npm]@iconify-json/mdi-light`.

See [icon data documentation](/docs/icons/icon-data.md).

## Basic usage

Add this to your CSS:

```css
@plugin "@iconify/tailwind4";
```

To use icons, add dynamic selector for icon, such as

```yaml
src: usage/tailwind/syntax-iconify.html
```

Browse or search icons at [Iconify icon sets website](https://icon-sets.iconify.design/solar/), click icon you want to use, in code options select "CSS" -> "Tailwind CSS" and copy code.

### Options

Plugin supports several options:

- `[prop]prefix` to set custom icon prefix instead of `[str]icon`.
- `[prop]scale` to set default icon size. If you do not set icon size, it will have height of `[str]1em`.

Example of configuration:

```css
@plugin "@iconify/tailwind4" {
  prefix: "iconify";
  scale: 1.2;
}
```

### Custom icons

Plugin supports custom icons and icon sets via `[prop]icon-sets` option.

See [custom icons](./custom-icons.md) documentation.

### Clean selectors

There are actually 2 plugins in one:

- Plugin for dynamic selectors, such as in code example above
- Plugin for clean selectors

Plugin for clean selectors uses a cleaner syntax for icons, but requires adding a configuration:

```yaml
src: usage/tailwind/syntax-iconify2.html
```

What configuration is required?

You need to specify what icon sets you want to render.

This is done by setting list of prefixes:

```css
@plugin "@iconify/tailwind4" {
  prefixes: mdi-light, vscode-icons;
}
```

### Extra class name

Each icon has 2 class names:

- Class name for icon, such as `[str]mdi-light--home`.
- Class name for rendering mode: `[str]iconify` or `[str]iconify-color` (can be configured).

All icons share same rules, except for image URL.

To avoid duplication, common rules were split into utility classes.
Additionally, this allows you to choose how icon is rendered:

- `[str]iconify` renders an icon as a mask image, so icon uses same color as text. To change icon color, change text color. This is used for icons without hardcoded palette.
- `[str]iconify-color` renders an icon as a background image. This is used for icons with hardcoded palette.

#### Why is config required? {#config-explanation}

Why is it needed?

Tailwind CSS works by finding class names in your code and rendering CSS for those class names.

When working with dynamic class names, such as `[str]icon-[mdi-light--home]`, Tailwind CSS finds all such class names and passes them to a plugin to generate CSS. That means plugin knows which icons are used and loads only required icons.

However, when using plain class names, such as `[str]mdi-light--home`, Tailwind CSS requires a plugin to generate CSS for all possible class names first, before finding class names in your project, then it removes unused class names. That means plugin must generate CSS for every single icon that might exist.

Generating CSS for every single icon is not a fast process. With over 60,000 icons available, it might take a lot of time. Then Tailwind CSS keeps it all in memory, which might cause Tailwind CSS to run out of memory. To avoid that, you must specify list of icon sets you want to use.
