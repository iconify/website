```yaml
title: Transforming Icons in Iconify SVG Framework
```

# Transformations

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

`include icon-components/transform-intro`

## CSS vs Iconify transformations {#css}

`include icon-components/transform-compare`

Example:

```yaml
src: icon-components/common/rotate-comparison.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

In example above, first icon is rotated using `[attr]data-rotate` attribute, second icon is rotated using CSS. First icon kept its 1em height, second icon became taller than it should be.

Sometimes you do want behaviour that CSS transformations provide. Then you can still use CSS transformations by adding it to inline style.

## Flip

You can flip icon horizontally and/or vertically.

To do that, add `[attr]data-flip` attribute with comma separated values. Possible values:

- `[str]horizontal`: flip icon horizontally.
- `[str]vertical`: flip icon vertically.

Example:

```yaml
src: icon-components/common/flip.html
demo: true
```

## Rotation

You can rotate icon by `[num]90`, `[num]180` and `[num]270` degrees.

To do that, add `[attr]data-rotate` attribute. Possible values:

- `[str]90deg`, `[str]1`: rotate by `[num]90` degrees.
- `[str]180deg`, `[str]2`: rotate by `[num]180` degrees.
- `[str]270deg`, `[str]3`: rotate by `[num]270` degrees.

Example:

```yaml
src: icon-components/common/rotate.html
demo: true
```

## Rotate and flip

You can use both rotation and flip on an icon. The icon is flipped first, then rotated.
