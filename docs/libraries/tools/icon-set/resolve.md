```yaml
title: Resolve icon in icon set
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
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
src: libraries/tools/icon-set/resolve.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/resolve1.json
    title: 'Results for "debug-pause":'
  - src: libraries/tools/icon-set/resolve2.json
  - src: libraries/tools/icon-set/resolve3.json
    title: 'Results for "triangle-right":'
  - src: libraries/tools/icon-set/resolve4.json
  - src: libraries/tools/icon-set/resolve5.json
    title: 'Results for "plus":'
  - src: libraries/tools/icon-set/resolve6.json
```
