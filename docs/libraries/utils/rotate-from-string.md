```yaml
title: rotateFromString() in Iconify Utils
types:
  IconCustomisations: './icon-customisations.md'
```

# rotateFromString()

This function is part of [Iconify Utils package](./index.md).

Function `[func]rotateFromString()` cleans up various possible values for ration passed by user to valid `[prop]rotate` property of `[type]IconCustomisations` type.

## Usage

Function has the following parameter:

- `[prop]value`, `[type]string`. Value to parse.
- `[prop]defaultValue`, `[type]number`. Value to return if `[prop]value` cannot be parsed.

Function returns `[type]number` value in `[num]0` to `[num]3` range.

## Example

```yaml
src: libraries/utils/rotate-from-string.ts
title: 'demo.ts'
extra:
  - src: libraries/utils/rotate-from-string.txt
    title: 'Result:'
```
