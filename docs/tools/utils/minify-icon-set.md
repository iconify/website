```yaml
title: minifyIconSet() in Iconify Utils
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyDimenisons: '../../types/iconify-icon.md#iconify-optional'
  FullIconifyIcon: './full-iconify-icon.md'
```

# minifyIconSet()

This function is part of [Iconify Utils package](./index.md).

Function `[func]minifyIconSet()` optimises icon set, reducing file size.

## Usage

Function has only one parameter:

- `[prop]data`, `[type]IconifyJSON`. Icon set data.

Function does not create a new object, it modifies object passed to function.

## What exactly does it do? {#explanation}

Icons in icon set have common properties, such as `[prop]width` and `[prop]height`:

```json
{
	"prefix": "foo",
	"icons": {
		"icon1": {
			"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>",
			"width": 24,
			"height": 24
		},
		"icon2": {
			"body": "<path d=\"M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5z\" fill=\"currentColor\"/>",
			"width": 24,
			"height": 24
		},
		"icon3": {
			"body": "<path d=\"M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0z\" fill=\"currentColor\"/>",
			"width": 16,
			"height": 16
		}
	}
}
```

In example above, icons `[str]icon1` and `[str]icon2` have identical `[prop]width` and `[prop]height`. To avoid duplication, these valus can be moved to root object:

```json
{
	"prefix": "foo",
	"icons": {
		"icon1": {
			"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>"
		},
		"icon2": {
			"body": "<path d=\"M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5z\" fill=\"currentColor\"/>"
		},
		"icon3": {
			"body": "<path d=\"M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0z\" fill=\"currentColor\"/>",
			"width": 16,
			"height": 16
		}
	},
	"width": 24,
	"height": 24
}
```

Function `[func]minifyIconSet()` finds common properties in icon set and moves them to root object.

What properties can be minified? Properties defined in `[type]IconifyDimenisons` type: `[prop]left`, `[prop]top`, `[prop]width` and `[prop]height`.

See `[type]IconifyJSON` type for more information.

In this example difference between original and minified files isn't big, but for large icon sets with thousands of icons it does make a big difference in file size.

## Example

```yaml
src: tools/utils/minify.ts
title: 'usage.ts'
extra:
  - src: tools/utils/minify.json
    title: 'Result:'
```
