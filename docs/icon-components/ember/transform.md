```yaml
title: Transforming Icon in Iconify for Ember
```

# Transformations

This tutorial is part of [Iconify for Ember tutorial](./index.md).

`include icon-components/transform-intro`

## CSS vs Iconify transformations {#css}

`include icon-components/transform-compare`

Example:

```yaml
src: icon-components/ember/rotate-comparison.hbs
demo: icon-components/common/rotate-comparison.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/transform-compare-footer`

## Flip

```yaml
include: icon-components/components/transform-flip
```

```yaml
src: icon-components/ember/flip.hbs
hint: Using "flip" attribute
demo: icon-components/common/flip.html
extra:
  - src: icon-components/ember/flip-alt.hbs
    hint: Using "hFlip" and "vFlip" attributes
```

## Rotation

`include icon-components/components/transform-rotate`

```yaml
src: icon-components/ember/rotate.hbs
demo: icon-components/common/rotate.html
```

## Rotate and flip

`include icon-components/components/transform-footer`
