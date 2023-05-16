```yaml
title: Options in Iconify for Tailwind CSS
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
```

# Options for Tailwind CSS

[Iconify plugin for Tailwind CSS](./index.md) has several options.

The options object is passed as parameter to plugin:

```js
addDynamicIconSelectors({
	prefix: 'icon-hover',
	overrideOnly: true,
});
```

## Options

Supported options:

- `[prop]prefix`, `[type]string` - prefix for dynamic class names.
- `[prop]overrideOnly`, `[type]boolean` - if enabled, removes duplicate CSS.
- `[prop]iconSets` - icon sets object, can be used for location of icon sets or custom icon sets.

### prefix

Option `[prop]prefix` sets prefix for dynamic class names.

Default value is `[str]icon`.

For example, if you set it to `[str]icon-hover`, like in code sample above, you can use icons as `[str]icon-hover-[mdi-ligh--home]`.

Value must not include `[str]-` at the end. Class names will always have `[str]-` added after prefix. That's how Tailwind CSS dynamic class names work.

You can use multiple instances of plugin with different `[prop]prefix` values to support different configuration options, like in example below.

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
hint: 'tailwind.config.js'
extra:
  - src: usage/tailwind/override.html
    title: 'Usage example:'
```

### iconSets

With `[prop]iconSets` you can use custom files for icon sets.

Option is an object, where key is an icon set prefix, and value is one of the following:

- `[type]string`: location of icon set JSON file in `[type]IconifyJSON` format.
- `[type]IconifyJSON`: loaded icon set.
- `[type]function`: callback that returns `[type]IconifyJSON` icon set. Due to Tailwind plugin system limitations, callback must be synchronous.

Make sure icon set includes `[prop]info` property with `[prop]palette` set. This is used by plugin to tell if an icon set contains icons with hardcoded palette or monotone icons. Mixed icon sets cannot be used. See `[type]IconifyInfo` type.

```js
addDynamicIconSelectors({
	iconSets: {
		test: './icon-sets/test.json',
	},
});
```
