```yaml
title: validateIconSet() in Iconify Utils
types:
  IconifyJSON: '../../types/iconify-json.md'
functions:
  quicklyValidateIconSet: './quickly-validate-icon-set.md'
```

# validateIconSet()

This function is part of [Iconify Utils package](./index.md).

Function `[func]validateIconSet()` validates icon set, returning cleaned up `[type]IconifyJSON` object.

If there are errors in provided data:

- If error is critical, function will throw an exception.
- If error can be fixed, function will throw an exception, unless `[prop]fix` option is provided.

This function checks everything, including metadata.

## Usage

Function has the following parameters:

- `[prop]data`, `[type]object`. Data to validate.
- `[prop]options`, `[type]object`. Optional options object.

Function returns:

- `[type]IconifyJSON` object on success (same as passed in first parameter).

If function encounters an error that cannot be fixed, function will throw an exception.

### Options {#options}

Options object has the following properties:

- `[prop]fix`, `[type]boolean`. If set to `true`, function will attempt to fix errors whenver possible instead of throwing exception. Default value is `false`.
- `[prop]prefix`, `[type]string`. Default value for `[prop]prefix` property of icon set. If set, function will overwrite `[prop]prefix` in icon set with your value.
- `[prop]provider`, `[type]string`. Default value for `[prop]provider` property of icon set. If set, function will overwrite `[prop]provider` in icon set with your value.

## Example

```yaml
src: tools/utils/validate.ts
title: 'usage.ts'
```

## Quick validation

This function is quite big, so it is not recommended to bundle it for browser usage.

If you want to validate icon set in browser, such as when loading data from API in an icon component, use `[func]quicklyValidateIconSet()` instead. It is smaller and faster because it does not check metadata, does not attempt to fix errors.
