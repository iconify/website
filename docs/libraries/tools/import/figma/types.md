```yaml
title: 'Importing SVG from Figma: Types'
standalone: true
navigation: './index.md'
types:
  IconSet: '../../icon-set/index.md'
  FigmaImportResult: './types.md#result'
  FigmaIconNode: './types.md#icon-node'
  FigmaImportNodeData: './types.md#import-node-data'
  FigmaParentNodeData: './types.md#parent-node-data'
functions:
  importFromFigma: ./index.md
```

# Types used in importFromFigma()

This article is part of `[func]importFromFigma()` documentation.

## FigmaImportResult {#result}

On success, `[func]importFromFigma()` returns `[type]FigmaImportResult` object, which has the following properties:

- `[prop]name`, `[type]string`. Document name.
- `[prop]version`, `[type]string`. Document version.
- `[prop]lastModified`, `[type]string`. Time of last modification as string. You can pass it to `[prop]ifModifiedSince` to check if document has been modified since last parse.
- `[prop]iconSet`, `[type]IconSet`. Icon set instance.
- `[prop]nodesCount`, `[type]number`. Number of icons that were found (that `[prop]iconNameForNode` marked as icons).
- `[prop]generatedIconsCount`, `[type]number`. Number of icons that Figma API generated. If not identical to `[prop]nodesCount`, some layers were marked as icons incorrectly.
- `[prop]downloadedIconsCount`, `[type]number`. Number of icons that were downloaded. If not identical to `[prop]generatedIconsCount`, there were some errors, most likely caused by bad internet connection.
- `[prop]missing`, `[type]FigmaIconNode`. List of icons that were not retrieved. See below.

## FigmaIconNode {#icon-node}

Type `[type]FigmaIconNode` is used in callback and in `[prop]missing` property of `[type]FigmaImportResult`.

It represents one icon and has the following properties:

- `[prop]id`, `[type]string`. Node ID in Figma document.
- `[prop]name`, `[type]string`. Node name.
- `[prop]keyword`, `[type]string`. Keyword for icon, returned by `[prop]iconNameForNode` callback.

On various stages of parsing icons, the following properties are added to object:

- `[prop]url`, `[type]string`. URL of generated image. If missing, Figma API could not export icon.
- `[prop]content`, `[type]string`. Icon content, downloaded from `[prop]url`. If missing, import function could not retrieve exported icon data.

## FigmaImportNodeData {#import-node-data}

Type `[type]FigmaImportNodeData` is used in first parameter for `[prop]iconNameForNode` callback.

It is a simple object with the following properties:

- `[prop]id`, `[type]string`. Node id.
- `[prop]type`, `[type]string`. Node type: `[str]FRAME`, `[str]COMPONENT` or `[str]INSTANCE`.
- `[prop]name`, `[type]string`. Node name.
- `[prop]width` and `[prop]height`, `[type]number`. Dimensions of node.
- `[prop]parents`, `[type]FigmaParentNodeData[]`. List of parent nodes (first item is page, last item is parent node of icon).

Example of node data passed to callback:

```json
{
	"id": "12:724",
	"type": "FRAME",
	"name": "arrow-down",
	"width": 32,
	"height": 32,
	"parents": [
		{ "id": "0:1", "type": "CANVAS", "name": "Icons" },
		{ "id": "12:479", "type": "FRAME", "name": "Regular" }
	]
}
```

## FigmaParentNodeData {#parent-node-data}

Type `[type]FigmaParentNodeData` is used in `[type]FigmaImportNodeData` and in first parameter for `[prop]filterParentNode` callback.

It is a simple object with the following properties:

- `[prop]id`, `[type]string`. Node id.
- `[prop]type`, `[type]string`. Node type: `[str]CANVAS`, `[str]FRAME` or `[str]GROUP`.
- `[prop]name`, `[type]string`. Node name.

Examples:

```json
{
	"id": "0:1",
	"type": "CANVAS",
	"name": "Icons"
}
```

```json
{
	"id": "12:479",
	"type": "FRAME",
	"name": "Regular"
}
```
