```yaml
title: Iconify Info Type
```

# IconifyInfo type

All Iconify libraries share common object structures. They are described as types in `[npm]@iconify/types` NPM package.

For description of types and short explanation of TypeScript see [types documentation](./index.md).

This article describes `[type]IconifyAlias` type.

## Structure

Type `[type]IconifyInfo` is used for information about icon set.

It has the following mandatory properties:

- `[prop]name`, `[type]string`. Icon set name.
- `[prop]author`, `[type]object`. Author information (see below).
- `[prop]license`, `[type]object`. License information (see below).

Then it has many optional properties, most of these properties are intended for displaying icon set data in list of icon sets:

- `[prop]total`, `[type]number`. Number of icons in icon set (see below).
- `[prop]version`, `[type]string`. Version string.
- `[prop]samples`, `[type]string[]`. Array of icon names to show as samples.
- `[prop]height`, `[type]number | number[]`. Icon grid. If icon set has mix of icons with different height values, such as half of icons are `[num]16` pixels high, half are `[num]24` pixels high, value can be array.
- `[prop]displayHeight`, `[type]number`. Height to use when showing samples. Value should be between `[num]16` and `[num]24`.
- `[prop]category`, `[type]string`. Category in icon sets list.
- `[prop]tags`, `[type]string[]`. List of tags, which can be used to filter icon sets (added in version 2).
- `[prop]palette`, `[type]boolean`. Set to `true` if all icons use hardcoded colors, set to `false` if all icons use `[attr]currentColor`.

## Author

`[prop]author` property is an object with following properties:

- `[prop]name`, `[type]string`. Author name, mandatory.
- `[prop]url`, `[type]string`. Optional link to icon set website. Usually links to GitHub repository.

## License

`[prop]license` property is an object with following properties:

- `[prop]title`, `[type]string`. Human readable license, mandatory.
- `[prop]spdx`, `[type]string`. Optional SPDX license identifier.
- `[prop]url`, `[type]string`. Optional link to license file.

## Examples

```json
{
	"name": "Phosphor",
	"total": 5206,
	"version": "1.3.2",
	"author": {
		"name": "Phosphor Icons",
		"url": "https://github.com/phosphor-icons/phosphor-icons"
	},
	"license": {
		"title": "MIT",
		"spdx": "MIT"
	},
	"samples": [
		"folder-notch-open-duotone",
		"check-square-offset-thin",
		"pencil-line-fill"
	],
	"height": 24,
	"displayHeight": 24,
	"category": "General",
	"palette": false
}
```

```json
{
	"name": "Emoji One (Colored)",
	"total": 1834,
	"version": "2.3.0",
	"author": {
		"name": "Emoji One",
		"url": "https://github.com/EmojiTwo/emojitwo"
	},
	"license": {
		"title": "CC BY 4.0",
		"spdx": "CC-BY-4.0",
		"url": "https://creativecommons.org/licenses/by/4.0/"
	},
	"samples": [
		"anxious-face-with-sweat",
		"cloud-with-snow",
		"studio-microphone"
	],
	"height": 32,
	"displayHeight": 16,
	"category": "Emoji",
	"palette": true
}
```
