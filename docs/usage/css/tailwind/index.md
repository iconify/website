```yaml
title: Iconify for Tailwind CSS
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Iconify for Tailwind CSS

Iconify plugin for Tailwind CSS makes it easy to use icons in Tailwind CSS.

You can use [over 60,000 open source icons](../../../icons/icon-data.md) and custom icons with minimal code.

## Options

There are 2 plugins, developed by different developers:

- [@iconify/tailwind](https://github.com/iconify/iconify/tree/main/plugins/tailwind)
- [@egoist/tailwindcss-icons](https://github.com/egoist/tailwindcss-icons)

Plugins use different syntax, have different options.

For example, here is syntax to use `[icon]mdi-light:home` in HTML:

```yaml
src: usage/tailwind/syntax-iconify.html
title: 'With @iconify/tailwind:'
extra:
  - src: usage/tailwind/syntax-egoist.html
    title: 'With @egoist/tailwindcss-icons:'
```

Both plugins can be used with custom icon sets.

The biggest difference is in behavior:

- [@iconify/tailwind](https://github.com/iconify/iconify/tree/main/plugins/tailwind) uses dynamic class names, so it generates only CSS for icons Tailwind CSS requests.
- [@egoist/tailwindcss-icons](https://github.com/egoist/tailwindcss-icons) generates CSS for all icons in icon set, generating thousands of entries, Tailwind CSS chooses which to include in output.

## Documentation

This documentation covers only `[npm]@iconify/tailwind`.

For `[npm]@egoist/tailwindcss-icons` documentation see [its repository on GitHub](https://github.com/egoist/tailwindcss-icons).

## Installation

You need to install and configure plugin.

To install it, add `[npm]@iconify/tailwind` as dev dependency:

```sh
npm i -D @iconify/tailwind
```

Then open `[file]tailwind.config.js`, import `[func]addDynamicIconSelectors` from `[npm]@iconify/tailwind` and add it to list of plugins.

Example `[file]tailwind.config.js`:

```js
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/*.html'],
	plugins: [
		// Iconify plugin
		addDynamicIconSelectors(),
	],
};
```

### Icon sets

You also need to install icon sets as dev dependencies. You can install either full package `[npm]@iconify/json` or packages for icon sets you want to use `[npm]@iconify-json/{prefix}`.

See [icon data documentation](../../../icons/icon-data.md).

For example, if you want to use icon `[icon]mdi-light:home`, install `[npm]@iconify-json/mdi-light` package.

## HTML

To use icons in HTML, all you have to do is create `[tag]span` element (or any element) with class name that contains icon.

Syntax of class names is this: `[str]icon-[{prefix}--{name}]`, where `[str]{prefix}` is icon set prefix, `[str]{name}` is icon name.

Examples:

```html
<span class="icon-[ph--alarm-duotone]"></span>
<span class="icon-[fluent-emoji-flat--alarm-clock]"></span>
<span class="icon-[carbon--edit-off]"></span>
```

Make sure prefix and icon name are separated with 2 hyphens: `[str]--`.

Why such complex syntax? It is because of Tailwind CSS limitations. It can handle dynamic class names only if they are created in format `[str]rule-[value]`.

## Issues

If everything is done correctly, icons should work.

Possible issues:

### Errors when building CSS

If icon set is missing or icon is missing, plugin will throw errors.

See error message. If plugin cannot find icon set, install dependency. If plugin cannot find icon, you are using wrong icon name.

### Selectors do not work

You have added class names, built your CSS, but icons do not work?

First make sure class name is correct. If it is correct, most likely Tailwind CSS is not seeing your class names. If you are familiar with Tailwind CSS, process of fixing it is exactly the same as any other missing class name:

- You can check if your files are scanned.
- You can add it to `[prop]safelist` in config.

## Color and size

To change icon color, change text color. See [how monotone icons work in CSS](../index.md#monotone).

By default, icon's height is set to `[str]1em`. Width can be different, depending on icon. To change icon size, set `[prop]font-size`.

## Advanced usage

What else can you do with plugin?

Plugin has various options:

- You can use plugin with custom icon sets.
- You can change class name.
- You can remove duplicate CSS.

See [plugin options documentation](./options.md).

There is also a second plugin included, which behaves a bit differently. Instead of dynamic classes such as `[str]icon-[mdi-light--home]`, it can generate CSS with clean classes, such as `[str]icon--mdi-light--home` and reduce duplication.

See [clean classnames documentation](./clean.md).

## Multiple instances

You can add plugin to plugins list in Tailwind CSS config multiple times, with different options.

Each `[func]addDynamicIconSelectors()` entry in plugins list should have different `[prop]prefix` option to avoid conflicts. Default value for `[prop]prefix` is `[str]icon`.
