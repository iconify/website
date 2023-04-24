```yaml
title: defaultIconCustomisations in Iconify Utils
types:
  FullIconifyIconCustomisations: './icon-customisations.md'
  IconifyIcon: '../../types/iconify-icon.md'
  FullIconifyIcon: './full-iconify-icon.md'
functions:
  iconToSVG: './icon-to-svg.md'
  mergeCustomisations: './merge-customisations.md'
```

# defaultIconCustomisations

This constant is part of [Iconify Utils package](./index.md).

Constant `[func]defaultIconCustomisations` is used for default `[type]FullIconifyIconCustomisations` values.

It is merged from 2 parts:

### defaultIconSizeCustomisations

Constant `[func]defaultIconSizeCustomisations` represents size customisations: `[prop]width` and `[prop]height`:

```js
const defaultIconSizeCustomisations = {
	width: null,
	height: null,
};
```

### defaultIconTransformations

Constant `[func]defaultIconTransformations` represents transformations:

```js
const defaultIconTransformations = {
	rotate: 0,
	vFlip: false,
	hFlip: false,
};
```

Default values for transformations are shared with `[type]IconifyIcon` type.

## Usage

```yaml
src: tools/utils/default-icon-customisations.ts
title: 'example.ts'
```

Usually it is used with `[func]mergeCustomisations()` function.

It is also used in functions that require only partial customisations, such as `[func]iconToSVG()`, but internally actually use full customisations.
