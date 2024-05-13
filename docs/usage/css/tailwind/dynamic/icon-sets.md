```yaml
title: Custom icon sets in Iconify for Tailwind CSS
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addDynamicIconSelectors: './index.md'
```

# Custom icon sets in Iconify for Tailwind CSS

This documentation covers `[prop]iconSets` option for `[func]addDynamicIconSelectors` plugin.

## iconSets option

Option `[prop]iconSets` allows you to use custom icon sets with plugin.

Option is an object, where key is an icon set prefix, and value is one of the following:

- `[type]string`: location of icon set JSON file in `[type]IconifyJSON` format.
- `[type]IconifyJSON`: loaded icon set.
- `[type]function`: callback that returns `[type]IconifyJSON` icon set. Due to Tailwind plugin system limitations, callback must be synchronous.

Make sure icon set includes `[prop]info` property with `[prop]palette` set.
Plugin uses this to tell if an icon set contains icons with hardcoded palette or monotone icons.
Mixed icon sets cannot be used.
See `[type]IconifyInfo` type.

```js
addDynamicIconSelectors({
	iconSets: {
		test: './icon-sets/test.json',
	},
});
```
