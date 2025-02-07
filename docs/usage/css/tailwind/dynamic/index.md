```yaml
title: Using Iconify for Tailwind CSS
types:
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyInfo: "/docs/types/iconify-info.md"
functions:
  addIconSelectors: "../iconify/index.md"
```

# Using Iconify plugin for Tailwind CSS

[Iconify plugin for Tailwind CSS package](../index.md) has several plugins.
This documentation covers `[func]addDynamicIconSelectors` plugin.

This plugin for Tailwind 3, which can also be used with Tailwind 4 but requires creating a config file.

For newer Tailwind 4 plugin, see [Tailwind 4 plugin documentation](../tailwind4/index.md).

## The Difference

What makes this plugin different from `[func]addIconSelectors()`?

It is easier to use.

- No need to configure plugin.
- One class name per icon.

Downsides:

- Less compact CSS.
- Weird selectors (caused by Tailwind CSS plugin system limitations).

## HTML

To use icons in HTML, all you have to do is create `[tag]span` element with a class name that contains icon name.

Syntax of class names is this: `[str]icon-[{prefix}--{name}]`, where `[str]{prefix}` is icon set prefix, `[str]{name}` is icon name.

Examples:

```html
<span class="icon-[ph--alarm-duotone]"></span>
<span class="icon-[fluent-emoji-flat--alarm-clock]"></span>
<span class="icon-[carbon--edit-off]"></span>
```

Make sure prefix and icon name are separated with two hyphens: `[str]--`.

Why such a complex syntax?
It is because of Tailwind CSS limitations.
It can handle dynamic class names only if they are created in format `[str]rule-[value]`.

## Usage

To add plugin to Tailwind CSS, you need to open `[file]tailwind.config.js`, import `[func]addDynamicIconSelectors`
from `[npm]@iconify/tailwind` and add it to a list of plugins.

### Basic usage

```js
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors(),
  ],
};
```

#### Color

To change icon color, change text color. See [how monotone icons work in CSS](../../index.md#monotone).

#### Size

See [icon size documentation](./size.md).

### Advanced usage

Plugin accepts options to customise plugin behavior.

If you need to, you can create several instances of plugin with different options.

You must use a different value for `[prop]prefix` option for each plugin instance!

```js
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors({
      // Prefix for selectors, must be different for each addDynamicIconSelectors()
      prefix: "icon",
      // Removes redundant rules
      overrideOnly: false,
      // Icon height, 0 to disable size
      scale: 1,
      // Custom icon sets
      iconSets: {},
      // Callback to customise icons (such as change stroke-width, color, etc...).
      // First param is content, second is icon name, third is icon set prefix.
      // Function should return modified content.
      customise: (content, name, prefix) => content,
    }),
  ],
};
```

## Options

Plugin options:

- `[prop]prefix`, `[type]string` - prefix for dynamic class names.
- `[prop]overrideOnly`, `[type]boolean` - if enabled, removes duplicate CSS.
- `[prop]iconSets` - icon sets as an object, it can be used for location of icon sets or custom icon sets.
- `[prop]scale` - scales icons. See below.
- `[prop]customise` - callback to customise icon. You can use it to [change stroke width, color](./customise.md) and so on.

Default values for all options are shown in code sample above.

### prefix

Option `[prop]prefix` sets prefix for dynamic class names.

Default value is `[str]icon`.

For example, if you set it to `[str]icon-hover`, like in a code sample above, you can use icons as `[str]icon-hover-[mdi-light--home]`.

Value must not include `[str]-` at the end. Class names will always have `[str]-` added after prefix. That's how Tailwind CSS dynamic class names work.

You can use multiple instances of plugin with different `[prop]prefix` values to support different configuration options, like in the example below.

### overrideOnly

If enabled, generated CSS will include only rules that override icons.

For example, with configuration in code example above, plugin will generate the following CSS for `[str]icon-hover-[mdi-light--arrow-right]`:

```css
.icon-hover-\[mdi-light--arrow-right\] {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='black' d='M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4v-1Z'/%3E%3C/svg%3E");
}
```

This can be used in combination with default selectors to swap icon on hover without duplicating CSS:

```yaml
src: usage/tailwind/override.js
hint: "tailwind.config.js"
extra:
  - src: usage/tailwind/override.html
    title: "Usage example:"
```

### iconSets

With `[prop]iconSets` you can use custom files for icon sets.

See [custom icon sets documentation](./icon-sets.md).

### scale

See [icon size documentation](./size.md).

### Customise option

Customise option can be used to customise icons.

You can change icon color, stroke width, animation duration and so on.

See [customise option documentation](./customise.md) for details and usage examples.

## Issues

If everything is done correctly, icons should work.

Possible issues:

### Errors when building CSS

If an icon set is missing or icon is missing, the plugin will throw errors.

See error message. If the plugin cannot find an icon set, install dependency. If the plugin cannot find icon, you are using the wrong icon name.

### Selectors do not work

You have added class names, built your CSS, but icons do not work?

First, make sure the class name is correct. If it is correct, most likely Tailwind CSS is not seeing your class names.
If you are familiar with Tailwind CSS, the process of fixing it is exactly the same as any other missing class name:

- You can check if your files are scanned.
- You can add it to `[prop]safelist` in config.

## Multiple instances

You can add plugin to the plugin list in Tailwind CSS config multiple times, with different options.

Each `[func]addDynamicIconSelectors()` entry in the plugin list should have different `[prop]prefix` option
to avoid conflicts. The default value for `[prop]prefix` is `[str]icon`.
