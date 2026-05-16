```yaml
title: Astro Icon
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Astro Icon

Astro Icon is a simple icon component for [Astro](https://astro.build/).

With Astro Icon, you can easily use [over 60,000 open source icons](/docs/icons/icon-data.md) and custom icons with minimal code.

## Installation

Install `[npm]astro-icon`:

```sh
npm i -D astro-icon
```

## Usage

After choosing your desired icon set, ensure you install it into your Astro project - preferrably as a dev dependency. For example, let us choose the Material Design iconset.

```sh
npm i -D @iconify-json/mdi
```

Astro Icon can now inline SVG directly in your HTML:

```astro
---
import { Icon } from 'astro-icon/components'
---

<Icon name="mdi:home" />
```

It can also generate SVG sprites.

See [Astro Icon readme](https://github.com/natemoo-re/astro-icon) for more details.
