```yaml
title: Inline vs block icons in Iconify
```

# Inline vs block

`include notices/iconify1`

Icons have 2 modes: inline and block. Difference between modes is `[prop]vertical-align` that is added to inline icons.

Inline icons are aligned slightly below baseline, so they look centred compared to text, like glyph fonts.

Block icons do not have alignment, like images, which aligns them to baseline by default.

Alignment option was added to make icons look like continuation of text, behaving like glyph fonts. This should make migration from glyph fonts easier.

```yaml
src: iconify1/inline-block.html
title: 'HTML:'
css: iconify/inline-block.scss
cssTitle: 'Stylesheet:'
demo: true
demoTitle: 'Demo:'
class: iconify-inline-block
```

## Syntax

Any element other than `[tag]iconify-icon` is treated as inline icon, `[tag]iconify-icon` is treated as block icon.

You can change that behaviour by adding `[attr]data-inline` attribute:

```yaml
src: iconify1/inline-block2.html
title: 'HTML:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify-inline-block
```

Icons imported from fonts are special case. Sometimes they were designed with extra spacing below and above icon to perfectly fit into text. Those icons have different height in inline and block modes, so they might look a bit different. If you are migrating from font, use inline mode with those icons. Or better yet select different collection that was designed to be used as SVG, not as font.
