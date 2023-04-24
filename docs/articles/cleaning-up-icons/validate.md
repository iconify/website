```yaml
title: Validating SVG
functions:
  cleanupSVG: ../../tools/tools2/icon/cleanup.md
```

# Validating SVG

This article is part of [SVG clean up article](./index.md).

SVG can contain a lot of stuff that might be dangerous: scripts and external resources.

## Style

Global `[tag]style` and inline `[attr]style` are converted to attributes.

Style complicates the process of analysing an icon structure, which is needed to later get rid of unused elements and parse the palette, so style should go. If style is too complex to parse or style overrides attribute, an exception is thrown.

## Bad tags

During [clean up](./cleanup.md), the icon is also checked for bad stuff.

Validation is very strict and opinionated.

Things that will cause validation to fail (function will throw an exception):

- `[tag]script` is found or an event listener is found.
- Text or font. See below.
- Any external resources.
- Raster images. See below.
- Links.

```yaml
src: articles/script.svg
```

```yaml
src: articles/image.svg
```

## Removed tags

Clean up function has a list of all allowed SVG tags and their attributes.

If an unknown tag is encountered, this happens:

- If a tag belongs to a namespace, such as `[tag]rdf:RDF`, it is removed with all its children elements.
- If a tag does not have a namespace, an exception is thrown.

## Attributes

Clean up function also checks each attribute on each element.

All attributes that do not affect icon rendering are removed.

If an event listener is found, the function throws an exception.

`[attr]class` attribute is allowed.

Inline `[attr]style` is converted to attributes (before parsing other attributes).

## Text and fonts

All text tags are not allowed.

Why? Because different operating systems have different fonts, it will cause the icon to render differently.

This rule cannot be disabled.

```yaml
src: articles/text.svg
```

## Raster images

Sometimes raster images are used by icons for various purposes, usually masks or masked content.

They are not allowed. Why?

- They do not scale, thus it is no longer a vector icon.
- Validating them adds unnecessary complications. Having content that cannot be fully validated in SVG is not acceptable.

## Clean up

Validation is done during [clean up process](./cleanup.md).

It is done with the `[func]cleanupSVG()` function from [Iconify Tools](../../tools/tools2/index.md).
