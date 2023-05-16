`[type]IconifyIconCustomisations` type is an object with the following optional properties, split into several categories.

Vertical alignment:

- `[prop]inline`, `[type]boolean`. If enabled, adds `[html]vertical-align: -0.125em` to style, rendering icon below baseline. The default value is `false`.

Icon dimensions:

- `[prop]width`, `[type]string | number | null`. Icon width. The default value is `null`.
- `[prop]height`, `[type]string | number | null`. Icon height. The default value is `null`.

There are several keywords that can be used for `[prop]width` and `[prop]height`:

- `[str]auto` sets dimension to original icon's dimensions found in `[attr]viewBox`.
- `[str]unset` and `[str]none` remove dimensions from SVG.

If neither of dimensions is set, `[prop]height` defaults to `[str]1em`.

It is enough to set one dimension, such as `[prop]height`. Another dimension will be calculated using icon's width/height ratio. In the case of keywords, another dimension will be set to the same keyword.

Transformations:

- `[prop]hFlip`, `[type]boolean`. Flip icon horizontally. The default value is `[bool]false`.
- `[prop]vFlip`, `[type]boolean`. Flip icon vertically. The default value is `[bool]false`.
- `[prop]rotate`, `[type]number`. Rotation in 90 degrees increments. The default value is `[num]0`.
