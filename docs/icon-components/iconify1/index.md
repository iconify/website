```yaml
title: Iconify SVG Framework 1.0
replacements:
  - code: '/1/1.0.3/'
    value: '/${iconify1.version.major}/${iconify1.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '@iconify/iconify@1'
    value: '${iconify1.import}'
```

# Iconify SVG framework

`include notices/iconify1`

Iconify SVG framework is a modern replacement for icon fonts.

It combines the pixel-perfect rendering of SVG with ease of use of glyph fonts while offering more choice than any glyph font or SVG framework.

Unlike icon fonts, Iconify SVG framework only loads icons that are used on the current page, so visitors do not waste bandwidth loading hundreds or thousands of icons just to show a few icons.

Iconify SVG framework was designed to be as easy to use as possible. You can change icon dimensions and color with CSS, just like icon fonts.

## Usage

Adding icons to HTML is very simple:

Add script tag to include Iconify SVG framework. You can add it in head section (before `[tag]</head>`) or at the end of page before `[tag]</body>`:

```yaml
src: iconify1/script.html
```

To add an icon, write placeholder `[tag]span` (or it could be any other inline DOM element):

```yaml
src: iconify1/index-sample0.html
demo: true
demoFirst: false
```

To change an icon, write a different icon name in the `[attr]data-icon` attribute instead of `[str]"fa-solid:home"`.

Look in [icon collections](https://icon-sets.iconify.design/) to find icons. Click an icon to see HTML code for that icon.

### Importing SVG framework

You can also import Iconify SVG framework in other script and bundle it with your code. This is useful if you are using tools like WebPack or Rollup.js to build your project.

Install `[npm]@iconify/iconify@1` as dependency and import it in your project:

```js
import Iconify from '@iconify/iconify';
```

## How does it work?

Iconify SVG framework works by locating icon placeholders, retrieving icon name from placeholder, retrieving icon data from Iconify API, then replacing the placeholder with SVG. This is done very quickly in a fraction of a second.

What are the advantages of this approach?

- It is very easy to use, just like icon fonts.
- No need to embed icons in HTML code. Icons retrieved from Iconify API are cached, so they are retrieved only once. If you embed SVG into HTML code, you need to send it to the visitor on every page view.
- Only icons that are found on the current page are retrieved from API. Other SVG frameworks and icon fonts load entire icon sets, wasting your visitor's bandwidth.

What are the disadvantages?

- It requires an internet connection. However, there is a solution for offline use, see [Iconify icon bundles](../../icon-components/bundles/index.md).
- Relies on third party service. However, there is an option to host your own Iconify API, see [self-hosted API](../../api/hosting.md).

### Usage without API

Iconify SVG framework retrieves icon data from Iconify API. That makes it very easy to use because developer does not need to prepare the icon data. Downside is, visitor must be online to retrieve icon data.

However, SVG framework can also work without API. It allows using Iconify SVG framework in offline web applications.

See [using SVG framework without API](./without-api.md) tutorial.

## Icon syntax

An element must have tag other than `[tag]svg`. Usually, it is `[tag]span`, but you can use any element, for example, `[tag]i` or `[tag]strong`.

For the Iconify SVG framework to treat the element as icon placeholder, the element must have `[str]"iconify"` among the list of classes.

Element also must have a `[prop]data-icon` attribute with icon name as value.

```yaml
src: iconify1/index-sample1.html
demo: true
demoFirst: false
```

Icon name syntax is `[attr]data-icon="prefix:icon-name"` or `[attr]data-icon="prefix-icon-name"`. Second syntax can be used if prefix does not contain `[str]"-"`, it is kept for compatibility with icon fonts.

For example, `[attr]data-icon="fa-arrow-left"` and `[attr]data-icon="fa:arrow-left"` are identical (both have a prefix `[str]"fa"`), but `[attr]data-icon="flat-color-icons:voice-presentation"` and `[attr]data-icon="flat-color-icons-voice-presentation"` are not the same (first has a prefix `[str]"flat-color-icons"`, second has a prefix `[str]"flat"` that does not exist).

## Color

You can only change color of monotone icons. Some icons, such as emoji, have a hardcoded palette that cannot be changed.

To add color to the monotone icon simply change text color.

```yaml
src: iconify1/index-color.html
title: 'HTML:'
css: iconify/index-color.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify-index-color
```

Color only works for icons that do not have a palette. Color in icons that do have a palette, like `[icon]noto:paintbrush` in an example above, cannot be changed.

## Dimensions

By default, icon height is set to `[str]"1em"`, icon width is changed dynamically based on the icon's width to height ratio.

This makes it easy to change icon size by changing `[attr]font-size` in the stylesheet, just like icon fonts:

```yaml
src: iconify1/index-size-em.html
title: 'HTML:'
css: iconify1/index-size-em.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify1-index-size-em
```

If you want icon to have specific size instead of `[str]"1em"`, you can change `[prop]height` and/or `[prop]width` by adding `[attr]data-height` and/or `[attr]data-width` attributes.

If only one attribute is set, another attribute will be calculated using the icon's width to height ratio.

```yaml
src: iconify1/index-size-attr.html
title: 'HTML:'
css: iconify1/index-size-attr.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify1-index-size-attr
```

Why is Iconify SVG framework using `[attr]data-` attributes instead of `[attr]width` and `[attr]height`? To make it easier to change icon dimensions by changing only one dimension. You can change `[attr]width` and/or `[attr]height` by adding attributes or in the stylesheet, however, if you set only one attribute, Iconify SVG framework cannot reliably detect width or height change and set another attribute.

When setting `[attr]width` and `[attr]height` in attributes or stylesheet, make sure you set both attributes. Otherwise, bad things happen:

```yaml
src: iconify1/index-size-fail.html
title: 'HTML:'
css: iconify1/index-size-fail.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify1-index-size-fail
```

## Transformations

An icon can be rotated and flipped horizontally and/or vertically. All transformations are done relative to the center of the icon.

### Flip

To flip an icon, add `[attr]data-flip` attribute:

```yaml
src: iconify1/index-transform-flip.html
title: 'HTML:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify1-index-transform-flip
```

Possible values:

- `[str]horizontal`: flip icon horizontally.
- `[str]vertical`: flip icon vertically.
- `[str]horizontal,vertical`: flip icon horizontally and vertically.

### Rotation

To rotate an icon, add `[attr]data-rotate` attribute:

```yaml
src: iconify1/index-transform-rotate.html
title: 'HTML:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify1-index-transform-rotate
```

Rotation can be done by 90°, 180°, and 270°. Why only these angles? Because unlike CSS rotations, icon rotations are done inside an icon and modify the bounding box.

When an icon is rotated by 90° and 270°, the icon's `[prop]width` and `[prop]height` properties are swapped.

Possible values:

- `[str]90deg`, `[str]1`: rotate by 90 degrees.
- `[str]180deg`, `[str]2`: rotate by 180 degrees.
- `[str]270deg`, `[str]3`: rotate by 270 degrees.

Comparison with CSS rotation:

```yaml
src: iconify1/index-transform-rotate-comparison.html
title: 'HTML:'
css: iconify1/index-transform-rotate-comparison.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify1-index-transform-rotate-comparison
```

You can use both rotation and flip on an icon. The icon is flipped first, then rotated.

## Vertical alignment

Many users are switching to Iconify from icon fonts. To make things easier, by default, the Iconify SVG framework behaves like an icon font.

Icon font characters are drawn by browsers like any other font, not like images.

What's the difference?

- Fonts have the `[prop]ascend` and `[prop]descend` properties, which cause glyphs to render near the baseline.
- Images are rendered on the baseline.

Because of that difference, when switching from font to images, images appear to render above the text. This can be fixed by adding `[attr]vertical-align` and that's exactly what Iconify SVG framework does by default.

So how to change behaviour?

### Inline rendering

To render icon inline, simply write a placeholder using an inline tag, such as `[tag]span` or `[tag]i`:

```yaml
src: iconify1/index-inline.html
demo: true
demoFirst: false
```

This will force the Iconify SVG framework to add `[prop]vertical-align` style to `[tag]svg` element to align it like icon font glyph:

```yaml
src: iconify1/index-inline-svg.html
```

If you want to understand other attributes added to `[tag]svg` by Iconify SVG framework, see [SVG rendering](#svg-rendering) section below.

### Block rendering {#block-rendering}

If you want to align icon perfectly, like an image, you need to tell Iconify SVG framework to use block mode.

The only difference between inline and block mode is, for block mode SVG framework does not add `[attr]vertical-align` to `[tag]svg`.

There are two ways to force block mode:

- Adding `[attr]data-inline="false"` attribute.
- Using `[tag]iconify-icon` tag instead of `[tag]span`.

```yaml
src: iconify1/index-block.html
demo: true
demoFirst: false
```

This will force the Iconify SVG framework to not add `[attr]vertical-align` style to `[tag]svg` element, so browsers render it like an image:

```yaml
src: iconify1/index-block-svg.html
```

If you want to understand other attributes added to `[tag]svg` by Iconify SVG framework, see [SVG rendering](#svg-rendering) section below.

## SVG rendering {#svg-rendering}

The Iconify SVG framework changes SVG a little to make it behave like the icon fonts and to account for browser bugs.

An example of a rendered SVG:

```yaml
src: iconify1/index-inline-svg.html
```

There are several attributes added to `[tag]svg`:

- `[attr]aria-hidden="true"`. This hides icon from screen readers.
- `[attr]focusable="false"`. This attribute fixes Internet Explorer bug. In Internet Explorer `[tag]svg` tags can have focus, this attribute makes it behave like other browsers.
- `[attr]style`. There are two parts of style:
  - `[attr]vertical-align`. This moves icon a bit below the baseline, making it behave like text. To remove it add `[attr]data-inline="false"` to the placeholder element. See [block rendering](#block-rendering)
  - `[attr]transform`. 360 degrees rotation seems redundant, but it does serve a purpose. In Firefox until 2020 as well as older versions of other browsers, there was a bug that caused blurry edges of SVG when SVG left edge is place on sub-pixel. Rotation trick was a workaround for that bug. In the latest versions of all modern browsers this bug has been fixed.

Also, `[attr]fill` of `[tag]path` was changed to `[str]currentColor`. This forces icon to use current text color for fill. For icons that use `[attr]stroke`, Iconify also changes `[attr]stroke` to `[str]currentColor`.

## Optimization

Sometimes an icon might flicker during load. Usually it is caused by a slow internet connection or long page.

If your page is large or your server is slow or visitor's internet connection is slow, it might take a while for page to load.

If you have placed Iconify script in footer before `[tag]</body>`, it might take a while for browser to initialize Iconify, so your visitors will see empty places where icons are supposed to be.

How to fix that? Move Iconify script to header between `[tag]<head>` and `[tag]</head>`.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Your page title</title>
		<script src="https://code.iconify.design/1/1.0.3/iconify.min.js"></script>
		<!-- the rest of your header here -->
	</head>
	<body>
		<!-- page content here -->
	</body>
</html>
```
