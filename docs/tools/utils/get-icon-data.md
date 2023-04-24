```yaml
title: getIconData() in Iconify Utils
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  iconToSVG: './icon-to-svg.md'
```

# getIconData()

This function is part of [Iconify Utils package](./index.md).

Function `[func]getIconData()` retrieves data for one icon from icon set.

## Usage

Function has the following parameters:

- `[prop]data`, `[type]IconifyJSON`. Icon set data.
- `[prop]name`, `[type]string`. Icon name.

Function returns icon data with type `[type]IconifyIcon`, `null` on error.

## Example

```yaml
src: tools/utils/get-icon.ts
title: 'usage.ts'
demo: tools/utils/get-icon.html
demoFirst: false
demoTitle: 'Result:'
```
