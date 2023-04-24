```yaml
title: Iconify JSON Tools
```

# Iconify JSON Tools

`include notices/json-tools`

Iconify JSON Tools is a lightweight library for working with icon sets in Iconify JSON format.

Library is available in 2 languages: JavaScript that runs in Node.js environment and PHP.

This library is not designed for importing, cleaning up and exporting icons. Those functions are done in [Iconify Tools](../node/index.md).

## Installation

To install library run:

```yaml
src: tools/json/install-js.sh
title: Node.js
extra:
  - src: tools/json/install-php.sh
    title: PHP
```

## Structure

There are two classes in this library: [`[class]Collection`](./collection.md) and [`[class]SVG`](./svg.md).

## Collection

`[class]Collection` class represents an icon set.

What can `[class]Collection` class do?

- Read and write JSON collections.
- Add, remove, list icons in an icon set.
- Retrieve icon data.
- Create icon bundles for Iconify icon sets.

See [Collection class documentation](./collection.md).

## SVG

`[class]SVG` class represents an icon.

It has only one purpose: generate `[tag]svg` strings that can be used to add icons to documents.

See [SVG class documentation](./svg.md).
