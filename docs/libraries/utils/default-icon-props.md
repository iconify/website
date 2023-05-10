```yaml
title: defaultIconProps in Iconify Utils
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyOptional: '/docs/types/iconify-icon.md#iconify-optional'
  FullIconifyIcon: './full-iconify-icon.md'
functions:
  iconToSVG: './icon-to-svg.md'
```

# defaultIconProps

This constant is part of [Iconify Utils package](./index.md).

Constant `[func]defaultIconProps` contains default values for optional `[type]IconifyIcon` properties.

It is merged from 2 parts:

### defaultIconDimensions

Constant `[func]defaultIconDimensions` contains default values for icon dimensions:

```js
const defaultIconDimensions = {
	left: 0,
	top: 0,
	width: 16,
	height: 16,
};
```

### defaultIconTransformations

Constant `[func]defaultIconTransformations` contains default values for icon transformations:

```js
const defaultIconTransformations = {
	rotate: 0,
	vFlip: false,
	hFlip: false,
};
```

## Usage

Function has the following parameter:

- `[prop]icon`, `[type]IconifyIcon`. Icon data.

Function returns full icon data with type `[type]FullIconifyIcon`.

## Example

```yaml
src: libraries/utils/default-icon-props.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/default-icon-props.json
    title: 'Result:'
```

It is used in functions that require only partial icon data, such as `[func]iconToSVG()`, but internally actually use full icon.
