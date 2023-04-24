```yaml
title: Generating Iconify Icon Bundles with JSON Tools
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# Generating icon bundles with JSON Tools

This tutorial is a part of [Iconify icon bundles tutorial](./index.md).

You can use [Iconify JSON Tools](../../tools/json/index.md) to generate data for icon bundles. This method requires some coding, but it can be used to automate bundle creation.

[Iconify JSON Tools](../../tools/json/index.md) library is available in Node.js and PHP, so you can choose which programming language to use. See [Iconify JSON Tools](../../tools/json/index.md) for installation instructions.

## Requirements

Node.js (deprecated, use [Iconify Utils](./utils.md) instead) or PHP.

## Steps

Logic of creating bundle with Iconify JSON Tools:

1. Load icon set.
2. Filter icons.
3. Convert to string.
4. Wrap in a function, see [wrapper functions](./wrapper.md) for details.

## Loading icon set {#load}

To load an icon set, use functions `[func]loadFromFile` or `[func]loadIconifyCollection`.

Documentation for functions:

- [loadFromFile() documentation](../../tools/json/collection.md#load-from-file).
- [loadIconifyCollection() documentation](../../tools/json/collection.md#load-iconify).

```yaml
src: icon-components/bundles/load-iconify.js
title: Node.js
extra:
  - src: icon-components/bundles/load-iconify.php
    title: PHP
```

## Filter icons {#filter}

After loading icon set, you need to filter icon data.

Use `[func]getIcons` function. See [getIcons() documentation](../../tools/json/collection.md#get-icons).

```yaml
src: icon-components/bundles/get-icons.js
title: Node.js
extra:
  - src: icon-components/bundles/get-icons.php
    title: PHP
```

Variable `[var]data` contains `[type]IconifyJSON` object.

## Export to JSON string {#json}

Then convert `[type]IconifyJSON` to `[type]string`:

```yaml
src: icon-components/bundles/json-encode.js
title: Node.js
extra:
  - src: icon-components/bundles/json-encode.php
    title: PHP
```

## Wrap in a callback {#callback}

This step is different for different Iconify icon components. See [wrapper function for icon bundles](./wrapper.md).

Also check out [code examples](./examples/index.md) for full examples.
