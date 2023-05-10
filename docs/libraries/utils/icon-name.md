```yaml
title: IconifyIconName Type
standalone: true
navigation: './index.md'
```

# IconifyIconName type

`[type]IconifyIconName` type is used in [Iconify Utils](./index.md) to handle icon names.

You can find this type in `[file]src/icon/name.ts` of [Iconify Utils source code](https://github.com/iconify/iconify/tree/main/packages/utils).

`include types/iconify-icon-name`

## Validation

All parts of icon name must match the following regular expression: `[js]/^[a-z0-9]+(-[a-z0-9]+)*$/`.

The only exception is `[prop]provider`, which can be empty.

Expression for validation can be imported from Iconify Utils:

```yaml
src: libraries/utils/match-name.ts
title: 'example.ts'
```
