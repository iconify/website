```yaml
title: SVG Class
types:
  IconSet: '../icon-set/index.md'
functions:
  cleanupSVG: '../icon/cleanup.md'
  runSVGO: '../icon/svgo.md'
```

# SVG class

`[type]SVG` class represents one icon. It is used in [Iconify Tools](../index.md) in functions for icon content.

## Usage

To create an instance, use this code:

```ts
import { SVG } from '@iconify/tools';

const svg = new SVG(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 6v12l10-6z" fill="currentColor"/></svg>'
);
```

If you are working with icon sets, use function `[func]toSVG()` of `[type]IconSet` instance to get `[type]SVG` instance:

```ts
const svg = iconSet('home');
if (!svg) {
	throw new Error('Icon "home" is not available or invalid');
}
```

## Properties

`[type]SVG` instance has several properties, all are initialized when instance is created:

- `[prop]viewBox`, `[type]ViewBox`. Icon's `[attr]viewBox`. It is a simple object with numeric properties `[prop]left`, `[prop]top`, `[prop]width` and `[prop]height`.
- `[prop]$svg` is a root element of SVG. For parsing XML, Iconify Tools uses `[npm]cheerio` library. This property is an object returned by `[npm]cheerio` after loading icon. You can use it to manipulate content directly.

## Methods

The following methods are available:

- `[func]load(content)` replaces icon content. This is identical to creating new `[type]SVG` instance, but it changes current instance instead of making new one.
- `[func]toString()` exports icon as string.
- `[func]toMinifiedString()` export icon as string, but without whitespace.
- `[func]toPrettyString()` export icon as string, with extra tabs and new lines for readability.
- `[func]getBody()` export icon's content as string (icon without `[tag]svg` tag).

## Validating and cleaning up icon

Unfortunately, many editors leave lots of junk in SVG files, sometimes multiplying icon file size several times.

SVG files might also contain scripts and links to external resources.

This is why after loading icon, it should be validated and cleaned up. See `[func]cleanupSVG()` function.

## Optimising icon

The cleanup process is very basic, it does bare minimum to get rid of bad stuff.
However, icons often contain unnecessary or unused elements and attributes.

Before exporting icons, you need to properly fix them. The process can include:

- Fixing color palette.
- Scaling icons.
- Optimising icons.

See [icon manipulation functions](../icon/index.md).
