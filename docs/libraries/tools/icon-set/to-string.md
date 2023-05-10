```yaml
title: Convert icon to string in icon set
types:
  IconSet: './index.md'
  IconifyIconCustomisations: '../../utils/icon-customisations.md'
```

# toString()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]toString()` exports icon as string.

## Usage

Function has the following parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]customisations`, `[type]IconifyIconCustomisations`. Optional list of customisations.

Function returns rendered icon as `[type]string` on success, `[type]null` if icon does not exist.

## Customisations

If `[prop]customisations` is not set, default value is:

```json
{
	"width": "auto",
	"height": "auto"
}
```

which results in `[prop]width` and `[prop]height` of icon matching `[prop]viewBox` (see example below).

If you want to use `[num]1em` height, use the following `[prop]customisations`:

```json
{
	"height": "1em"
}
```

## Example

```yaml
src: libraries/tools/icon-set/to-string.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/to-string.svg
    title: 'Result:'
```
