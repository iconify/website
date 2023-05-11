```yaml
title: Transforming Icon in Iconify for Vue
```

# Transformations

This tutorial is part of [Iconify for Vue tutorial](./index.md).

`include icon-components/transform-intro`

## CSS vs Iconify transformations {#css}

`include icon-components/transform-compare`

Example:

```yaml
src: icon-components/common/rotate-comparison.vue
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/transform-compare-footer`

## Flip

```yaml
include: icon-components/components/transform-flip
replacements:
  - search: hFlip
    replace: horizontalFlip
  - search: vFlip
    replace: verticalFlip
```

```yaml
src: icon-components/common/flip.vue
hint: Using "flip" attribute
demo: true
extra:
  - src: icon-components/common/flip-alt.vue
    hint: Using "horizontalFlip" and "verticalFlip" attributes
```

## Rotation

`include icon-components/components/transform-rotate`

```yaml
src: icon-components/common/rotate.vue
demo: true
```

## Rotate and flip

`include icon-components/components/transform-footer`

## Property names

In other components, properties for flip are `[attr]hFlip` and `[attr]vFlip`. Vue has special treatment for properties that start with `[attr]v-`, so `[attr]vFlip` (same applies to `[attr]vAlign` attribute) attribute is not available without using tricky syntax.

Because of that, Vue component uses longer property names: `[attr]verticalFlip` instead of `[attr]vFlip` and `[attr]horizontalFlip` instead of `[attr]hFlip` for consistency.
