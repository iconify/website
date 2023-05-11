```yaml
title: Iconify SVG Framework
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '@iconify/iconify@2'
    value: '${svg-framework.import}'
functions:
  buildIcon: './build-icon.md'
  setFetch: './set-fetch.md'
```

# Iconify SVG framework

`include notices/iconify2`

Iconify SVG framework is an easy to use JavaScript library that renders icons.

It combines the pixel-perfect rendering of SVG with ease of use of glyph fonts while offering more choice than any glyph font or SVG framework.

Unlike icon fonts, Iconify SVG framework only loads icons that are used on the current page, so visitors do not waste bandwidth loading hundreds or thousands of icons just to show a few icons.

Iconify SVG framework was designed to be as easy to use as possible. You can change icon dimensions and color with CSS, just like icon fonts.

## Usage

Adding icons to HTML document is very simple:

Add script tag to include Iconify SVG framework. You can add it in head section (before `[tag]</head>`) or at the end of page before `[tag]</body>`:

```yaml
src: icon-components/iconify/script.html
```

To add an icon, write placeholder `[tag]span` (or it could be any other inline DOM element):

```yaml
src: icon-components/iconify/index-sample0.html
demo: true
demoFirst: false
```

To change an icon, write a different icon name in the `[attr]data-icon` attribute instead of `[str]"fa-solid:home"`.

Look in [icon collections](https://icon-sets.iconify.design/) to find icons. Click an icon to see HTML code for that icon.

### Importing SVG framework

You can also import Iconify SVG framework in other script and bundle it with your code. This is useful if you are using tools like WebPack or Rollup.js to build your project.

Install `[npm]@iconify/iconify@2` as dependency and import it in your project:

```js
import Iconify from '@iconify/iconify';
```

### Usage without API

Iconify SVG framework retrieves icon data from Iconify API. That makes it very easy to use because developer does not need to prepare the icon data. Downside is, visitor must be online to retrieve icon data.

## How does it work?

Iconify SVG framework works by locating icon placeholders, retrieving icon name from placeholder, retrieving icon data from [Iconify API](/docs/api/index.md), then replacing the placeholder with SVG. This is done very quickly in a fraction of a second.

What are the advantages of this approach?

- It is very easy to use, just like icon fonts.
- No need to embed icons in HTML code. Icons retrieved from Iconify API are cached, so they are retrieved only once. If you embed SVG into HTML code, you need to send it to the visitor on every page view.
- Only icons that are found on the current page are retrieved from API. Other SVG frameworks and icon fonts load entire icon sets, wasting your visitor's bandwidth.

What are the disadvantages?

- It requires an internet connection.
- By using public API, you rely on a third party service. However, there is an option to host your own Iconify API, see [Iconify API hosting tutorial](/docs/api/hosting.md).

If you need to render icons without relying on Iconify API, [use a different icon component](/docs/usage/index.md).

## Icon syntax

An element must have `[tag]span` or `[tag]i` tag.

For the Iconify SVG framework to treat the element as icon placeholder, the element must have `[str]iconify` or `[str]iconify-inline` among the list of classes.

Element also must have a `[prop]data-icon` attribute with icon name as value.

```yaml
src: icon-components/iconify/index-sample1.html
demo: true
demoFirst: false
```

Icon name syntax is `[attr]data-icon="prefix:icon-name"` or `[attr]data-icon="prefix-icon-name"`. Second syntax can be used if prefix does not contain `[str]"-"`, it is kept for compatibility with icon fonts.

For example, `[attr]data-icon="fa-arrow-left"` and `[attr]data-icon="fa:arrow-left"` are identical (both have a prefix `[str]"fa"`), but `[attr]data-icon="flat-color-icons:voice-presentation"` and `[attr]data-icon="flat-color-icons-voice-presentation"` are not the same (first has a prefix `[str]"flat-color-icons"`, second has a prefix `[str]"flat"` that does not exist).

## Color

You can only change color of monotone icons. Some icons, such as emoji, have a hardcoded palette that cannot be changed.

To add color to the monotone icon simply change text color.

```html
<span class="iconify" data-icon="ion:umbrella-sharp" style="color: red"></span>
```

For various ways to set color, see [changing icon color tutorial](./color.md).

## Dimensions

By default, icon height is set to `[str]"1em"`, icon width is changed dynamically based on the icon's width to height ratio.

This makes it easy to change icon size by changing `[attr]font-size` in the stylesheet, just like icon fonts:

```html
<span
	class="iconify"
	data-icon="cil:locomotive"
	style="font-size: 24px;"
></span>
```

For various ways to change icon dimensions, see [changing icon dimensions tutorial](./dimensions.md).

## Transformations

An icon can be rotated and flipped horizontally and/or vertically. All transformations are done relative to the center of the icon.

These are not CSS transformations, transformations are applied inside SVG.

For more details see [icon transformations tutorial](./transform.md).

## Functions {#functions}

Iconify SVG framework offers many functions, which developers can use to control SVG framework:

- Load icons from API.
- Add custom icons and icon sets.
- Generate SVG.
- Control MutationObserver.
- ...and many other functions.

For more details see [Iconify SVG framework functions](./functions.md).

## Server side rendering {#ssr}

SVG Framework can be used in Node.js scripts, but because there is no DOM, it can be used only to generate data using functions such as `[func]buildIcon()`.

```yaml
include: icon-components/functions/set-fetch/nodejs
```

How to solve this problem?

```yaml
include: icon-components/functions/set-fetch/svg-framework
```
