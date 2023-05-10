```yaml
title: expandIconSet() in Iconify Utils
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyOptional: '/docs/types/iconify-icon.md#iconify-optional'
  FullIconifyIcon: './full-iconify-icon.md'
functions:
  minifyIconSet: './minify-icon-set.md'
```

# expandIconSet()

This function is part of [Iconify Utils package](./index.md).

Function `[func]expandIconSet()` de-optimises icon set, opposite of `[func]minifyIconSet()`.

## Usage

Function has only one parameter:

- `[prop]data`, `[type]IconifyJSON`. Icon set data.

Function does not create a new object, it de-optimises object passed to function.

## What exactly does it do? {#explanation}

See `[func]minifyIconSet()` for details.

## Example

```yaml
src: libraries/utils/expand.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/expand.json
    title: 'Result:'
```
