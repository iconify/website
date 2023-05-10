```yaml
title: getIcons() in Iconify Utils
types:
  IconifyJSON: '/docs/types/iconify-json.md'
```

# getIcons()

This function is part of [Iconify Utils package](./index.md).

Function `[func]getIcons()` retrieves few icons from icon set.

## Usage

Function has the following parameters:

- `[prop]data`, `[type]IconifyJSON`. Icon set data.
- `[prop]icons`, `[type]string[]`. List of icon names to retrieve.
- `[prop]nof_found`, `[type]boolean`. Optional. If set, icons that are not available in icon set will be added to `[prop]not_found` property of result. Default value is `false`.

## Example

```yaml
src: libraries/utils/get-icons.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/get-icons.json
    title: 'Result:'
```
