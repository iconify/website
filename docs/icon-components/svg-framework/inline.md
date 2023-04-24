```yaml
title: Vertical Alignment in Iconify SVG Framework
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Vertical alignment

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

`include icon-components/vertical-align-intro`

## Inline attribute

To add `[prop]vertical-align` to icon, there are has several options:

- Adding `[str]iconify-inline` to class list (or replacing `[str]iconify` with `[str]iconify-inline`).
- Adding `[attr]data-inline` attribute.
- Adding `[prop]vertical-align` style with value `[num]-0.125em`.

```yaml
src: icon-components/common/inline.html
title: 'HTML:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify-inline-block
```

`include icon-components/vertical-align-footer`
