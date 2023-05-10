```yaml
title: SVG validation in Iconify Tools
```

# SVG validation in Iconify Tools

When importing SVG in Iconify Tools, there are some limitations, which cannot be changed.

Any icons containing the following will not be imported:

- Scripts.
- External resources.
- Raster images.
- Text.

Iconify is very strict when it comes to security and quality. Icons should look identical for all users, regardless of browser and operating system.

## Scripts

Not allowing scripts should be obvious. They can be dangerous. Also, scripts are not ran when icon is used as `[func]url()`, so they might not even work.

## External resources

Relying on external resources is not ok:

- Those resources might not be available for all users.
- It might be used for tracking.

There are no valid use cases for external resources in SVG.

## Raster images

SVG is meant to scale. Raster images do not belong in SVG.

## Text

Text is rendered differently in different browsers and operating systems. This is not acceptable. Icons should render identically for all users.

Convert text to vector shapes.
