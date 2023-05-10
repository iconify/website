```yaml
title: Importing icons from Figma
types:
  SVG: '../../svg/index.md'
  IconSet: '../../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
  FigmaImportResult: './types.md#result'
  FigmaIconNode: './types.md#icon-node'
  FigmaImportNodeData: './types.md#import-node-data'
  FigmaParentNodeData: './types.md#parent-node-data'
functions:
  cleanupSVG: '../../icon/cleanup.md'
  parseColors: '../../icon/colors.md'
  runSVGO: '../../icon/svgo.md'
```

# Importing icons from Figma

This function is part of [import functions](../index.md) in [Iconify Tools](../../index.md).

Function `[func]importFromFigma()` imports SVG files from a Figma file.

It creates `[type]IconSet` instance, which [can be exported to various formats](../../export/index.md).

## Requirements

To import Figma file you need to have:

- Figma file ID. See [how to get Figma file ID](./file-id.md) article.
- Access to document.
- Figma API access token. See [how to get Figma API access token](./token.md) article.

## Limitations

Import function has few limitations on Figma document structure:

Icon must be one of the following Figma node types:

- Frame
- Component
- Instance of a component

Parent layers can only be the following Figma node types:

- Page (in some Figma documentation it is called Canvas)
- Frame
- Group

Icons cannot be:

- Placed inside components or component instances
- Shapes without frame or component container

Icons cannot contain:

- Raster images
- Text. Convert text to shapes

## Usage

Function has the following parameter:

- `[prop]options`, `[type]object`. Options.

Function returns:

- `[type]FigmaImportResult` object on success.
- `[str]not_modified` string if file has not been modified since last run (can be returned only if `[prop]ifModifiedSince` option is set).

In case of error, import might throw an exception, which you can catch using `[func]try` and `[func]catch`.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

## Options

Options object has many properties, most are not required.

Required options used in all parts of import process are:

- `[prop]file`, `[type]string`. Figma file ID. See [how to get Figma file ID](./file-id.md) article.
- `[prop]token`, `[type]string`. Figma API access token. See [how to get Figma API access token](./token.md) article.

Required option used when traversing document:

- `[prop]iconNameForNode`, `[type]function`. Callback that checks if node is an icon.

Required option used when generating icon set:

- `[prop]prefix`, `[type]string`. Prefix for imported icon set. It is used in `[type]IconSet` instance when exporting to `[type]IconifyJSON`.

Other options are split in several groups:

### Cache options

These options are for caching data:

- `[prop]cacheDir`, `[type]string`. Directory where cache should be stored. Use it to avoid retrieving same files every time you run your script.
- `[prop]cacheAPITTL`, `[type]string`. TTL for API queries cache, in seconds. Used only if `[prop]cacheDir` is set, default value is 3 days.
- `[prop]cacheSVGTTL`, `[type]string`. TTL for SVG cache, in seconds. Used only if `[prop]cacheDir` is set, default value is 30 days.

If you are expecting to run your script more than once, it is a good idea to cache API responses to avoid retrieving the same data multiple times. Set `[prop]cacheDir` to a writable directory.

TTL options usually do not need changing from default values. Each SVG has unique link, so if icon changes, it will have new cache file, so TTL for icons can be high.

If you set cache options, also consider setting `[prop]ifModifiedSince` option to `true`. This will tell import function to retrieve shallow copy of document from Figma, bypassing cache, then comparing if document in Figma has been updated since last cache. If document has been updated, function will clear cache.

```js
const options = {
	// ... other options here
	cacheDir: 'cache/api',
	ifModifiedSince: true,
};
```

### Options for retrieving Figma document

These options are used when retrieving document:

- `[prop]version`, `[type]string`. Document version. Set it to parse specific version of document.
- `[prop]ifModifiedSince`, `[type]string | Date | true`. If set, function will check if document has been updated.

#### ifModifiedSince

Option `[prop]ifModifiedSince` is used when you want to retrieve data only if icon set has been updated.

Value can be one of the following:

- Last modification time as `[type]string`. You can get it from `[prop]lastModified` property of parse result.
- Last modification time as `[type]Date`.
- `true`. This is special value, it compares time to time stored in cached data (see `[prop]cacheDir` option above).

If Figma document has not been modified, function will return string `[str]not_modified`.

If option is not set, function cannot return `[str]not_modified`.

### Options for finding icons in Figma document

Function cannot reliably detect which element is an icon and which is not.

These options tell function where to look for icons:

- `[prop]ids`, `[type]string[]`. Array of node IDs to check. Useful if you know your document structure and want to limit Figma API query to specific nodes.
- `[prop]depth`, `[type]number`. Depth of nodes tree to retrieve from API. See below.
- `[prop]pages`, `[type]string[]`. List of page names that should be checked for icons.
- `[prop]filterParentNode`, `[type]function`. Callback to filter parent nodes. Alternative to `[prop]pages` property, but also checks child nodes, such as frames and groups.
- `[prop]iconNameForNode`, `[type]function`. Required. Callback that checks if node is an icon.

#### depth

Option `[prop]depth` tells function how deep it should scan Figma document. Scanning large documents results in slow parsing, so it is recommended to set this option.

Value is number of layers to reach icons.

For example, if icons are placed directly on page without parent group, depth value is `[num]2`.

![Figma tree depth: 2](https://docs.iconify.design/assets/images/tools/figma_depth_2.png)

If icons are placed using the following tree:

- Page.
- Container frame or group.
- Icon frame or component or component instance.

Then depth value is `[num]3`.

![Figma tree depth: 3](https://docs.iconify.design/assets/images/tools/figma_depth_3.png)

#### pages

Option `[prop]pages` tells function which pages of Figma document contain icons. Value is list of page titles.

Example:

```js
const options = {
	// ... other options here
	pages: ['Icons'],
};
```

If you set option `[prop]pages`, option `[prop]filterParentNode` is ignored.

#### filterParentNode

Option `[prop]filterParentNode` is a callback function that filters potential parent nodes.

If possible, it should be used to filter parent nodes, otherwise parser might unexpectedly find and export nodes that match icon, but are on wrong page, that you forgot about.

It is an alternative to `[prop]pages` option. This option is ignored if `[prop]pages` option is set.

Callback has the following parameters:

- `[prop]node`, `[type]FigmaParentNodeData`. Node to check.
- `[prop]document` is Figma document structure, as returned by Figma API. TypeScript interface for document is limited because currently Figma does not provide typings for API responses.

Callback should return:

- `true` if node is a valid parent node.
- `false` if node should be ignored.

Callback can be asynchronous.

Example:

```js
const options = {
	// ... other options here

	// 3 levels: page 'Icons' -> frame 'Regular -> icon
	depth: 3,

	// Import icons only from 'Icons' -> 'Regular'
	filterParentNode: (nodes) => {
		switch (nodes.length) {
			case 1: {
				// Page: 'Icons'
				const node = nodes[0];
				return node.name === 'Icons';
			}

			case 2: {
				// Frame: 'Regular'
				const node = nodes[1];
				return node.name === 'Regular';
			}
		}
		return false;
	},
};
```

#### iconNameForNode

Option `[prop]iconNameForNode` is a callback that checks if node is an icon.

Function should return:

- `[type]string` icon name if icon should be exported from node. Name is used when adding icon to `[type]IconSet` instance.
- `[type]null` if node is not a valid icon.

Callback parameters are:

- `[prop]node`, `[type]FigmaImportNodeData`. Information about node.
- `[prop]nodes` is an object that contains number of nodes and list of nodes that callback has marked as icons.
- `[prop]document` is Figma document structure, as returned by Figma API. TypeScript interface for document is limited because currently Figma does not provide typings for API responses.

Example of callback:

```js
const options = {
	// ... other options here
	iconNameForNode: (node) => {
		if (
			// Icons are stored after 2 parents: page -> container frame -> icon
			node.parents.length !== 2 ||
			// Icons use frames
			node.type !== 'FRAME' ||
			// Icon should be 32x32
			node.width !== 32 ||
			node.height !== 32
		) {
			return null;
		}

		// Return node name as keyword for icon
		return node.name;
	},
};
```

Callback can be asynchronous.

### Options for generating SVG

These options are identical to export settings when you export SVG from Figma:

- `[prop]includeID`, `[type]boolean`. Set to `true` to include `[prop]id` attributes for all SVG elements (disabled by default).
- `[prop]simplifyStroke`, `[type]boolean`. Simplifies inside/outside strokes and use stroke attribute if possible instead of `[tag]mask` (enabled by default).
- `[prop]useAbsoluteBounds`, `[type]boolean`. Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping (disabled by default).

### Options for importing icons

Function imports icons to `[type]IconSet` instance. These options are for customising import:

- `[prop]prefix`, `[type]string`. Required. Prefix for icon set. It is used in `[type]IconSet` instance when exporting to `[type]IconifyJSON`.
- `[prop]beforeImportingIcon`, `[type]function`. Callback to call before importing each icon.
- `[prop]afterImportingIcon`, `[type]function`. Callback to call after importing each icon.

Callback functions are identical, the only difference is one is called before importing icon, another one is used after importing icons.

Callbacks have the following parameters:

- `[prop]item`, `[type]FigmaIconNode`. Item that is about to be imported or was imported. In `[prop]beforeImportingIcon` callback you can change its contents.
- `[prop]iconSet`, `[type]IconSet`. Icon set instance.

Callbacks don't need to return anything.

Callbacks can be asynchronous.

## Example

The following example imports simple icon set from Figma, where all icons have color `[str]#2e4454`, then replaces color with `[str]currentColor`.

```yaml
src: libraries/tools/import/figma-quill.ts
title: 'example.ts'
```
