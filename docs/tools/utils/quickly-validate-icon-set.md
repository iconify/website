```yaml
title: quicklyValidateIconSet() in Iconify Utils
types:
  IconifyJSON: '../../types/iconify-json.md'
functions:
  validateIconSet: './validate-icon-set.md'
```

# quicklyValidateIconSet()

This function is part of [Iconify Utils package](./index.md).

Function `[func]quicklyValidateIconSet()` validates icon set, returning cleaned up `[type]IconifyJSON` object.

If there are errors in provided data, it will return `null`.

This function does not check metadata.

## Usage

Function has the following parameter:

- `[prop]data`, `[type]object`. Data to validate.

Function returns:

- `[type]IconifyJSON` object on success (same as passed in first parameter).
- `[type]null` on error.

## Example

```yaml
src: tools/utils/quickly-validate.ts
title: 'usage.ts'
```

## Advanced validation

This function is optimised for bundle size and performance, therefore it does only basic validation.

If you want to fully validate icon set, use `[func]validateIconSet()` instead.
