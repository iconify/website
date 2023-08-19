```yaml
title: iconToSVG() in Iconify Utils
types:
  IconifyIconCustomisations: './icon-customisations.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyIconBuildResult: './icon-to-svg.md#build-result'
  SVGViewBox: './get-svg-viewbox.md'
functions:
  iconToHTML: './icon-to-html.md'
  parseSVGContent: './parse-svg-content.md'
  buildParsedSVG: './build-parsed-svg.md'
```

# iconToSVG()

This function is part of [Iconify Utils package](./index.md).

Function `[func]iconToSVG()` generates data required to render SVG.

## Usage

This function has the following parameters:

- `[prop]icon`, `[type]IconifyIcon`. Icon data.
- `[prop]customisations`, `[type]IconifyIconCustomisations`. Icon customisations. Optional.

This function returns data with type `[type]IconifyIconBuildResult`. See below.

### Parsing SVG

This function uses `[type]IconifyIcon` as a source.
If you want to parse a string that contains SVG, use `[func]parseSVGContent()` and `[func]buildParsedSVG()` functions instead.

## Result {#build-result}

The result is an object with the following properties:

- `[prop]body`, `[type]string`. Icon content.
- `[prop]attributes`, `[type]object`. Attributes for `[tag]svg` element.
- `[prop]viewBox`, `[type]SVGViewBox`. `[prop]viewBox` as array of numbers.

List of attributes in the result does not include `[prop]xmlns` because it is identical in all SVG.
It always includes `[prop]viewBox`, usually includes `[prop]width` and `[prop]height`.

You can use `[func]iconToHTML()` to convert the result to string.

### Examples of result

```json
{
	"attributes": {
		"width": "24",
		"height": "24",
		"viewBox": "0 0 24 24"
	},
    "viewBox": [0, 0, 24, 24],
	"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>"
}
```

## Example

```yaml
src: libraries/utils/get-icon.ts
title: 'example.ts'
```

## Icon dimensions

By default, resulting attributes include `[prop]width` and `[prop]height`, where `[prop]height` is set to `[str]1em`.

If you want to remove dimensions, set `[prop]height` to `[str]unset` or `[str]none` in `[prop]customisations` parameter:

```js
const result = iconToSVG(data, {
	// Setting only height will also remove width
	height: 'unset',
});
```
