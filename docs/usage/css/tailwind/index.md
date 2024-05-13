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

You can use [over 60,000 open source icons](/docs/icons/icon-data.md) and custom icons with minimal code.

## Plugins

There are two plugin packages, developed by different developers:

- [@iconify/tailwind](https://github.com/iconify/iconify/tree/main/plugins/tailwind) (multiple plugins in one package)
- [@egoist/tailwindcss-icons](https://github.com/egoist/tailwindcss-icons)

Plugins use different syntax, have different options.

For example, here is syntax to use `[icon]mdi-light:home` in HTML:

```yaml
src: usage/tailwind/syntax-iconify2.html
hint: 'Usage with @iconify/tailwind'
extra:
  - src: usage/tailwind/syntax-egoist.html
    hint: 'Usage with @egoist/tailwindcss-icons'
```

Both packages also include plugins that can use dynamic selectors, which offer pretty much identical behavior:

```yaml
src: usage/tailwind/syntax-iconify.html
hint: 'Usage with @iconify/tailwind'
extra:
  - src: usage/tailwind/syntax-egoist2.html
    hint: 'Usage with @egoist/tailwindcss-icons'
```

Prefix for dynamic selectors can be configured in both plugins. The only real difference is the default configuration.

## Documentation

This documentation covers only `[npm]@iconify/tailwind`.

For `[npm]@egoist/tailwindcss-icons` documentation see [its repository on GitHub](https://github.com/egoist/tailwindcss-icons).

## Installation

You need to install and configure plugin.

To install it, add `[npm]@iconify/tailwind` as dev dependency:

```sh
npm i -D @iconify/tailwind
```

Then open `[file]tailwind.config.js`, import `[func]addIconSelectors` (main plugin) or 
`[func]addDynamicIconSelectors` (dynamic selectors) from `[npm]@iconify/tailwind` and add it to a list of plugins.

Example `[file]tailwind.config.js`:

```js
const { addIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/*.html'],
    plugins: [
        // Iconify plugin, requires writing list of icon sets to load
        addIconSelectors(['mdi', 'mdi-light']),
    ],
};
```

Example `[file]tailwind.config.js` with dynamic selectors:

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

You also need to install icon sets as dev dependencies. 
You can install either full package `[npm]@iconify/json` or packages for icon sets, 
you want to use `[npm]@iconify-json/{prefix}`.

See [icon data documentation](/docs/icons/icon-data.md).

For example, if you want to use icon `[icon]mdi-light:home`, install `[npm]@iconify-json/mdi-light` package.

#### Custom icon sets

Plugins also work with custom icon sets.

## Usage

For more details, see documentation for each plugin:
- [`[func]addIconSelectors()` plugin documentation](./iconify/index.md).
- [`[func]addDynamicIconSelectors()` plugin documentation](./dynamic/index.md).
