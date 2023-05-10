```yaml
title: toBoolean() in Iconify Utils
types:
  IconCustomisations: './icon-customisations.md'
```

# toBoolean()

This function is part of [Iconify Utils package](./index.md).

Function `[func]toBoolean()` converts strings to boolean. It is used to parse various possible component property values to use them in `[type]IconCustomisations` properties.

## Usage

Function has the following parameters:

- `[prop]name`, `[type]string`. Property name.
- `[prop]value`, `[type]unknown`. Value to parse.
- `[prop]defaultValue`, `[type]boolean`. Value to return if `[prop]value` cannot be parsed.

Function returns `[type]boolean` value.

## Example

```yaml
src: libraries/utils/to-boolean.ts
title: 'demo.ts'
extra:
  - src: libraries/utils/to-boolean.txt
    title: 'Result:'
```
