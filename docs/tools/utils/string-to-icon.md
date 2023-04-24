```yaml
title: stringToIcon() in Iconify Utils
types:
  IconifyIconName: './icon-name.md'
functions:
  validateIconName: './validate-icon.md'
```

# stringToIcon()

This function is part of [Iconify Utils package](./index.md).

Function `[func]stringToIcon()` converts icon name string to `[type]IconifyIconName` object.

## Usage

Function has the following parameters:

- `[prop]value`, `[type]string`. Icon name.
- `[prop]validate`, `[type]boolean`. Optional. If `true`, icon name will be validated using `[func]validateIconName()`.
- `[prop]allowSimpleName`, `[type]boolean`. Optional. If `true`, simple names without prefix are considered valid.
- `[prop]provider`, `[type]string`. Optional. API provider to add to icon name if provider is missing.

Function returns icon name with type `[type]IconifyIconName` on success, `[type]null` on failure.

## Example

```yaml
src: tools/utils/string-to-icon.ts
title: 'examples.ts'
```
