```yaml
title: 'Icon Bundle Examples: SVG Framework'
navigation: ./index.md
standalone: true
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
  - code: '@iconify/iconify@2'
    value: '${svg-framework.import}'
types:
  IconifyJSON: '../../../types/iconify-json.md'
```

# Bundling everything for SVG Framework

This article is a part of [Iconify icon bundles code examples](./index.md).

This is the most advanced example, that shows how to create icon bundles from various sources. It is easy to configure.

It bundles:

- Iconify SVG framework.
- Icons from Iconify icon sets.
- Icons from custom icon sets.
- Custom JSON files.
- Custom SVG files.

You need to configure script before running it.

## Instructions

Installation:

```bash
npm install --save-dev @iconify/tools @iconify/json @iconify/iconify@2
```

Usage:

- Change variable `[var]target` to correct location of bundle.
- Change sources configuration in variable `[var]sources`.

## Sources

This bundle script can import icons from multiple sources.

Comment out sources that you do not need.

Available sources:

### SVG framework

Option `[prop]svgFramework` bundles Iconify SVG framework.

If you want to bundle entire Iconify SVG framework, use this configuration:

```js
const sources = {
	svgFramework: require.resolve('@iconify/iconify'),

	// ...
};
```

If you want to make sure API is not available, bundle Iconify SVG framework without API:

```js
const sources = {
	svgFramework: require.resolve(
		'@iconify/iconify/dist/iconify.without-api.min'
	),

	// ...
};
```

Build script will also copy TypeScript definitions file to target location. This makes it easy to use bundle with TypeScript and code completion in tools like VSCode.

If you do not want to bundle Iconify SVG framework, remove `[prop]iconify` property from configuration.

### svg

This option bundles custom SVG files. It converts SVG files to `[type]IconifyJSON` format, then bundles it.

This method is used on Iconify documentation website to render custom icons and logo.

Value is array of objects. Each object has the following properties:

- `[prop]dir`: directory where SVG files are stored. Sub-directories are not parsed.
- `[prop]monotone`: `[bool]true` if icons are monotone, `[bool]false` if not. This affects how icons are cleaned up. If you have different icons, it is better to split them into 2 directories and make separate entries for monotone and colored icons.
- `[prop]prefix`: Icon set prefix. It does not have to be unique, you can re-use same prefix for multiple sources, just make sure icon names are different.

Icons will imported from custom SVG directories can be used by name `[str]prefix:name`, where `[str]prefix` is prefix you have configured, `[str]name` is icon name.

For example:

```js
const sources = {
    svg: [
        dir: 'svg',
        monotone: true,
        prefix: 'custom'
    ]
}
```

If you have icon `[file]svg/home.svg`, after importing it, that icon in SVG framework will have the name `[icon]custom:home`:

```html
<span class="iconify" data-icon="custom:home"></span>
```

### iconifyIcons

This option bundles icons from Iconify icon sets. It is similar to [basic importer example](./svg-framework-simple.md).

Value is an array of icon names, including icon set prefix.

### json

This option will bundle Iconify JSON files.

Value is an array of filenames.

If you want to include only few icons from JSON file, instead of filename you can provide an object with 2 properties: `[prop]filename` that points to JSON file and `[prop]icons` that lists icons you want to filter.

To bundle Iconify icon set, use `[func]require.resolve()` to get its location.

Example that uses all variations:

```js
const sources = {
	// ...

	json: [
		// Custom JSON file
		'json/gg.json',
		// Iconify JSON file (@iconify/json is a package name, /json/ is directory where files are, then filename)
		require.resolve('@iconify/json/json/tabler.json'),
		// Custom file with only few icons
		{
			filename: require.resolve('@iconify/json/json/line-md.json'),
			icons: [
				'home-twotone-alt',
				'github',
				'document-list',
				'document-code',
				'image-twotone',
			],
		},
	],

	// ...
};
```

## Code

Code below is written with TypeScript. If you want simple JavaScript file, remove types and `[js]import type` line.

Code is asynchronous. It is wrapped in anonymous asynchronous function because top level `[js]await`, at moment of writing documentation, is not available in all currently used versions of Node.

```yaml
title: 'create-bundle.ts'
src: icon-components/bundles/bundle-svg-full.ts
```

Part of code is taken from [Iconify Tools import examples](../../../tools/tools2/examples/import-mdi.md).

## Importing bundle

If you are using Iconify SVG framework in scripts and import it, you can import bundle instead. Bundle has all the same exports as SVG framework and TypeScript definitions file.

Before bundle:

```js
import Iconify from '@iconify/iconify';

// do stuff...
```

With bundle:

```js
import Iconify from './iconify-bundle';

// do stuff...
```

## Usage in HTML

If you bundle Iconify SVG framework, you only need to include full file. You can link to a script using `[tag]script` tag or you can import it.

If you do not bundle Iconify SVG framework, generated bundle can be included before SVG framework or after it:

```yaml
src: icon-components/bundles/svg-framework-head-before.html
hint: Loading bundle before SVG framework in head section.
extra:
  - src: icon-components/bundles/svg-framework-footer-before.html
    hint: Loading bundle before SVG framework in footer.
  - src: icon-components/bundles/svg-framework-head-after.html
    hint: Loading bundle after SVG framework in head section.
replacements:
  - search: preload-icons-bundle.js
    replace: icons-bundle.js
```
