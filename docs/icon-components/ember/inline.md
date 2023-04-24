```yaml
title: Vertical Alignment in Iconify for Ember
```

# Vertical alignment

This tutorial is part of [Iconify for Ember tutorial](./index.md).

`include icon-components/vertical-align-intro`

## Inline attribute

Instead of adding `[prop]vertical-align` to each icon, icon component has a property `[prop]inline`. Adding `[prop]inline` property to icon component is identical to setting `[html]style="vertical-align: -0.125em"`:

```yaml
src: icon-components/ember/inline.hbs
title: 'HTML:'
demo: icon-components/common/inline.html
demoFirst: false
demoTitle: 'Demo:'
class: iconify-inline-block
```

`include icon-components/vertical-align-footer`
