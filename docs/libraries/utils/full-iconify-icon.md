```yaml
title: FullIconifyIcon Type
standalone: true
navigation: './index.md'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  defaultIconProps: './default-icon-props.md'
```

# FullIconifyIcon type

`[type]FullIconifyIcon` type is used in [Iconify Utils](./index.md) to handle icon data.

You can find this type in `[file]src/icon/index.ts` of [Iconify Utils source code](https://github.com/iconify/iconify/tree/main/packages/utils).

This type is identical to `[type]IconifyIcon`, except that all properties are mandatory.

```ts
import type { IconifyIcon } from '@iconify/types';

export type FullIconifyIcon = Required<IconifyIcon>;
```

See `[type]IconifyIcon` type for details.

## Example

```json
{
	"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>",
	"left": 0,
	"top": 0,
	"width": 24,
	"height": 24,
	"rotate": 0,
	"vFlip": false,
	"hFlip": false
}
```

## Usage

To convert `[type]IconifyIcon` to `[type]FullIconifyIcon`, merge `[func]defaultIconProps` with your data:

```yaml
src: libraries/utils/full-iconify-icon.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/full-iconify-icon.json
    title: 'Result:'
```
