```yaml
title: calculateSize() in Iconify Utils
functions:
  iconToSVG: './icon-to-svg.md'
```

# calculateSize()

This function is part of [Iconify Utils package](./index.md).

Function `[func]calculateSize()` is used for calculating icon's `[prop]width` or `[prop]height` when only one property is provided.

For example, if you have icon with `[attr]viewBox="0 0 36 24"` and `[prop]height` is set to `[str]1em`, this function is used to calculate `[prop]width` property, which will be `[str]1.5em`.

Function is used by `[func]iconToSVG()` to generate attributes. It can also be used by things like icon pickers, where you can show hint for `[prop]width` value when user inputs `[prop]height` value.

## Usage

Function has the following parameters:

- `[prop]size`, `[type]string | number`. One dimension, such as `[prop]height`.
- `[prop]ratio`, `[type]number`. Dimensions ratio. If you provide `[prop]height` in first parameter, second parameter should be `[prop]width / height` of icon's `[attr]viewBox`. If you provider `[prop]width` in first parameter, second parameter should be `[prop]height / width` of icon's `[attr]viewBox`.
- `[prop]precision`, `[type]number`. Optional, default is `[num]100`.

Function returns calculated size.

## Example

```yaml
src: tools/utils/calculate-size.ts
title: 'examples.ts'
extra:
  - src: tools/utils/calculate-size.txt
    title: 'Result:'
```
