```yaml
title: Resolve icon in icon set
types:
  IconifyJSON: '../../../types/iconify-json.md'
  IconifyIcon: '../../../types/iconify-icon.md'
  FullIconifyIcon: '../../utils/full-iconify-icon.md'
  IconSet: './index.md'
```

# resolve()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]resolve()` retrieve data for icon in `[type]IconifyIcon` format.

## Usage

Function has the following parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]full`, `[type]boolean`. Optional. If `true`, function will return full icon data (`[type]FullIconifyIcon`).

Function returns `[type]IconifyIcon` (or `[type]FullIconifyIcon` if second parameter is `true`), `[type]null` on error.

## Example

```yaml
src: tools/tools2/icon-set/resolve.ts
title: 'example.ts'
extra:
  - src: tools/tools2/icon-set/resolve1.json
    title: 'Results for "debug-pause":'
  - src: tools/tools2/icon-set/resolve2.json
  - src: tools/tools2/icon-set/resolve3.json
    title: 'Results for "triangle-right":'
  - src: tools/tools2/icon-set/resolve4.json
  - src: tools/tools2/icon-set/resolve5.json
    title: 'Results for "plus":'
  - src: tools/tools2/icon-set/resolve6.json
```
