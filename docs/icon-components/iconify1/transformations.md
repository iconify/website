```yaml
title: Transformations
```

# Transformations

`include notices/iconify1`

You can transform icons by adding `[attr]data-rotate` and `[attr]data-flip` attributes.

Transformations are done by changing icon contents using SVG transformations, not by CSS transformations. This is done to assure that icon remains within its bounding box and you can apply additional CSS transformations on SVG element.

Possible transformations:

- Rotations: 90°, 180°, 270°
- Horizontal and vertical flip

## Rotating icon {#rotate}

To rotate icon add `[attr]data-rotate` attribute. Value can be in degrees: `[attr]data-rotate="90deg"` or as numbers: `[attr]data-rotate="1"` (where 1 = 90deg, 2 = 180deg, 3 = 270deg).

```yaml
src: iconify1/transformations-rotate.html
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: sample-big
```

Rotating icon at different angle, such as `[attr]data-rotate="45deg"` will not work. Only `[num]90`, `[num]180` and `[num]270` degrees rotations are supported. Unlike CSS transformation, Iconify rotations are done by rotating icon inside SVG element and adjusting viewBox. So for example 24x16 icon rotated by 90 degrees will change dimensions to 16x24.

You can use style on SVG element or container element to rotate icon at custom angle.

## Flipping icon {#flip}

To flip icon add `[attr]data-flip` attribute. Value is `[str]horizontal` or `[str]vertical`. If you want both, use `[str]horizontal,vertical` or rotate icon by `[num]180` degrees.

```yaml
src: iconify1/transformations-flip.html
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: sample-big
```

You can use both rotation and flip on icon. Icon is flipped first, then rotated.
