```yaml
title: flipFromString() in Iconify Utils
types:
  IconCustomisations: './icon-customisations.md'
```

# flipFromString()

This function is part of [Iconify Utils package](./index.md).

Function `[func]flipFromString()` applies `[prop]flip` shorthand property to `[type]IconCustomisations` object.

## Usage

Function has the following parameters:

- `[prop]custom`, `[type]IconCustomisations`. Customisations.
- `[prop]value`, `[type]string`. Value to parse.

Function does not return anything, it applies changes to object passed in first parameter.

## Value

Value can be set of the following strings, separated by space and/or comma:

- `[str]horizontal` sets `[prop]hFlip` to `true`.
- `[str]vertical` sets `[prop]vFlip` to `true`.

## Example

```yaml
src: libraries/utils/flip-from-string.ts
title: 'demo.ts'
```
