```yaml
title: Exporting icons with Iconify Tools
```

# Exporting icons with Iconify Tools

Iconify Tools is a NPM package for manipulating icons. See [Iconify Tools documentation](./index.md).

`include notices/tools1`

There are several exporters available in Iconify Tools.

## Exporting as SVG {#export-svg}

Function `[func]ExportSVG` exports one icon to file.

Parameters:

1. `[class]SVG` instance.
2. File name.

```js
tools
	.ExportSVG(svg, 'filename.svg')
	.then(() => {
		console.log('Exported!');
	})
	.catch((err) => {
		console.error(err);
	});
```

## Exporting collection to directory {#export-dir}

Function `[func]ExportDir` exports collection to directory as individual SVG files.

Parameters:

1. `[class]Collection` instance.
2. Directory name.
3. Optional options object.

```js
tools
	.ExportDir(collection, 'output')
	.then((count) => {
		console.log('Exported ' + count + ' files');
	})
	.catch((err) => {
		console.error(err);
	});
```

Available options (third parameter):

- `[prop]includePrefix`, `[type]boolean`. If `[bool]true`, exported files will include icon set prefix. The default value is `[bool]true`.
- `[prop]prefixAsDirectory`, `[type]boolean`. If `[bool]true`, icon name will have this format: `[str]"prefix/icon.svg"`. If `[bool]false`, icon name will have this format: `[str]"prefix-icon.svg"`. Only works if `[prop]includePrefix` is enabled. The default value is `[bool]false`.
- `[prop]customPrefix`, `[type]string` (or `[bool]false` if disabled). Overrides prefix. Only works if `[prop]includePrefix` is enabled.
- `[prop]exportFilename`, `[type]function`. Callback function to get filename for exported icon. See `[file]src/export/dir.js` for example.

## Exporting to Iconify JSON {#export-json}

Iconify JSON format is used to store icon sets in Iconify. It is used everywhere in Iconify: in Iconify API, in Iconify SVG framework, various components.

Why JSON format? Because it is easy to read and parse, it can contain many icons, it can contain custom metadata such as tags and categories, it is easy to store multiple variations or aliases of the same icon.

Function `[func]ExportJSON` exports collection to JSON file. This is the main export function in Iconify Tools, entire package was designed to import various formats and export them as JSON icon sets.

Parameters:

1. `[class]Collection` instance.
2. Target filename.
3. Optional options object.

```js
tools
	.ExportJSON(collection, 'filename.json')
	.then((json) => {
		console.log('Exported collection. JSON data: ' + JSON.stringify(json));
	})
	.catch((err) => {
		console.error(err);
	});
```

Some of available options (third parameter):

- `[prop]optimize`, `[type]boolean`. If enabled, JSON data will be optimized to reduce file size. The default value is `[bool]false`.
- `[prop]minify`, `[type]boolean`. If disabled, output will be pretty, making it easy to read. The default value is `[bool]false`.

There are other options, but they are very specific to importers. See source code for details.

## Exporting as components {#export-components}

Function `[func]ExportComponent` creates single files for all icons, which can be used with various Iconify icon components, such as [Iconify for React](../../icon-components/react/index.md), [Iconify for Vue](../../icon-components/vue/index.md) and [Iconify for Svelte](../../icon-components/svelte/index.md).

This function is currently unstable, it will be rewritten, so documentation is not available yet.

## Exporting to PNG {#export-png}

Function `[func]ExportPNG` export collection to PNG files.

Important: this function requires PhantomJS to be installed and accessible from command line! PhantomJS has been deprecated for a while, but you can still install it using HomeBrew. It is also not optimal because it sometimes creates rough edges.

1. `[class]SVG` or `[class]Collection` instance.
2. Target filename (for `[class]SVG` instance) or directory (for `[class]Collection` instance).
3. Optional options object.

```js
tools
	.ExportPNG(svg, 'filename.png', {
		// options object here
	})
	.then(() => {
		console.log('Exported filename.png');
	})
	.catch((err) => {
		console.error(err);
	});
```

Options object (third parameter) has following properties:

- `[prop]width`, `[prop]height`: dimensions of PNG image. Default = same as SVG dimensions.
- `[prop]color`: color for monotone images that use `[str]currentColor` (see `[func]ChangePalette` function). Default = `[str]'#000'`.
- `[prop]background`: background color, default = `[str]'transparent'`.

When exporting big collections, this function will take a while to export everything.

## ImportJSON and ExportDir example {#export-example}

This example imports Iconify JSON file and exports icons as individual files:

```yaml
src: tools/node/export-mdi-dir.js
title: 'export.js'
```

This code will convert `[file]mdi.json` to individual SVG files that will be saved in directory `[file]output`.

In addition to Iconify Tools, JSON icon set can be exported to SVG using [Iconify JSON Tools](../json/export.md).
