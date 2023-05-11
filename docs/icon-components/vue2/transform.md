```yaml
title: Transforming Icon in Iconify for Vue 2
```

# Transformations

This tutorial is part of [Iconify for Vue 2 tutorial](./index.md).

`include icon-components/transform-intro`

## CSS vs Iconify transformations {#css}

`include icon-components/transform-compare`

Example:

```yaml
src: icon-components/common/rotate-comparison.vue
demo: icon-components/common/rotate-comparison.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
replacements:
  - search: iconify/vue
    replace: iconify/vue2
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
demo: icon-components/common/flip.html
extra:
  - src: icon-components/common/flip-alt.vue
    hint: Using "horizontalFlip" and "verticalFlip" attributes
replacements:
  - search: iconify/vue
    replace: iconify/vue2
```

## Rotation

`include icon-components/components/transform-rotate`

```yaml
src: icon-components/common/rotate.vue
demo: icon-components/common/rotate.html
replacements:
  - search: iconify/vue
    replace: iconify/vue2
```

## Rotate and flip

`include icon-components/components/transform-footer`

## Property names

In other components, properties for flip are `[attr]hFlip` and `[attr]vFlip`. Vue has special treatment for properties that start with `[attr]v-`, so `[attr]vFlip` (same applies to `[attr]vAlign` attribute) attribute is not available without using tricky syntax.

Because of that, Vue component uses longer property names: `[attr]verticalFlip` instead of `[attr]vFlip` and `[attr]horizontalFlip` instead of `[attr]hFlip` for consistency.
