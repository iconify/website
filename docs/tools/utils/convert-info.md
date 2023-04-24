```yaml
title: convertIconSetInfo() in Iconify Utils
types:
  IconifyInfo: '../../types/iconify-info.md'
```

# convertIconSetInfo()

This function is part of [Iconify Utils package](./index.md).

Function `[func]convertIconSetInfo()` converts and validates icon set information.

Some old icon sets might have information in legacy format, which was created before Iconify projects moved to TypeScript. This function will accept both old and new formats, will convert and validate it and will return correct `[type]IconifyInfo` data.

## Usage

Function has the following parameters:

- `[prop]data`, `[type]unknown`. Icon set information, which can be legacy object or `[type]IconifyInfo`.
- `[prop]expectedPrefix`, `[type]string`. Optional. If set, and source object has `[prop]prefix` property with different value, function will throw an error. This can be used legacy information might be incorrect.

Function returns:

- `[type]IconifyInfo` object on success.
- `[type]null` on error.

## Example

```yaml
src: tools/utils/convert-info.ts
title: 'usage.ts'
extra:
  - src: tools/utils/convert-info.json
    title: 'Result:'
```
