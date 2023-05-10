```yaml
title: How to use icons
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
```

# How to use icons

How to use icons in your projects?

Iconify ecosystem offers many ways to use icons, for both coders and designers.

## HTML {#html}

For using icons in HTML, there are several viable options:

`include usage/options/html`

### SVG in CSS {#css}

How to use icons in CSS:

- Add icon as a background or mask image in CSS.
- Use `[tag]span` element in HTML to render it.

Using icons as background images works great for icons with hardcoded palette, such as emojis.

Using icons as mask images, in combination with setting background color to `[prop]currentColor`, allows using monotone icons in CSS. To change icon color, simply change text color.

Example showing icons used as background and mask images (hover to see color change):

```yaml
include: usage/css-demo
```

See [how to use icons in CSS](./css/index.md) for various tools and plug-ins that make it easy to add icons to CSS.

### SVG in HTML {#svg}

Icons can be embedded in HTML as `[tag]svg` elements:

```yaml
src: usage/sample.svg
copy: false
```

See [how to add SVG to HTML](./svg/index.md) for various tools and components that make it easy to add icons to HTML.

### Icons on demand

Iconify ecosystem has a unique feature: [Iconify API](/docs/api/index.md).

It is used by various icon components to [load icon data on demand](/docs/api/icon-data.md). Iconify icon components only load icon data for icons used on the page visitor is viewing, at run time, instead of bundling icons.

Iconify icon components are perfect for complex projects like theme or website customisers, customisable admin panels or any similar projects, where icons can be customised by user.

Iconify icon components are very easy to use. All developer has to specify is an icon name:

```yaml
src: icon-components/icon/usage.html
copy: false
```

See [how to use Iconify icon components](/docs/icon-components/index.md).

## Design

For designers, Iconify ecosystem offers several ways to easily import icons in various design tools.

`include usage/options/design`

### Browse icons

You can browse and search more than 60k open source icons at one of the following websites:

`include usage/options/websites`

Find icon you want to use, select it, copy SVG to clipboard, paste it to your favorite design tool.

Possible issues:

- Some design tools do not support `[prop]currentColor`. Set icon color to black before copying code sample.
- Almost all image editing software do not support SVG 2 animations. Animated icons will be imported without animations, sometimes rendered weirdly.
