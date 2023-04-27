```yaml
title: Iconify Tools
replacements:
  - code: '@iconify/tools@1'
    value: '${tools.import-tools1}'
```

# Iconify Tools

Iconify Tools is a NPM package for manipulating icons.

This library is a collection of tools for importing, exporting and processing SVG images.

Its main purpose is to convert icon sets and fonts to Iconify JSON collections, but it can be used for other purposes.

`include notices/tools1`

## Installation and import

To install Iconify Tools run this:

```bash
npm install @iconify/tools@1 --save
```

Then you can use it in your Node.js files:

```js
const tools = require('@iconify/tools');
```

## What tools are available?

- Import SVG from various sources.
- Export SVG to various formats.
- Optimize SVG.
- Crop SVG.
- Clean up SVG.
- Get/change color palette.
- Find shapes, get lengths of shapes.
- Convert shapes to paths.

## Core

Core of tools are `[class]SVG` and `[class]Collections` classes. All tools create or manipulate instances of `[class]SVG` or `[class]Collection` classes.

All tools are based on `[class]Promise` instances. If you are not familiar with JavaScript Promises, do read up. There are many tutorials available online. Make sure you are reading something from 2016 or newer, not tutorials for old implementations.

### SVG class

`[class]SVG` class represents one SVG image. It is a simple class, it does not manipulate anything, except for
cleaning up junk code that could otherwise cause XML parser to fail.

You can find code in `[file]src/svg.js`

Creating `[class]SVG` instance is easy:

```js
let svg = new tools.SVG('<svg ...></svg>');
```

That code will load SVG from string, extract image dimensions and clean up a bit, removing all junk image editors left
behind.

`[class]SVG` instance has multiple methods to get SVG as string:

- `[func]toString()` returns SVG as string.
- `[func]toMinifiedString()` the same as `[func]toString()`, but without white spaces.
- `[func]getBody()` returns body as string: child elements of `[tag]svg` element.

Then you can get dimensions:

- `[func]getDimensions()` returns object containing width and height properties.
- `[func]width` contains width, read-only property.
- `[func]height` contains height, read-only property.

Last method replaces content of SVG instance:

- `[func]load(content)` the same as constructor, but instead of making new instance it changes existing instance.

You can see usage examples in unit tests: `[file]tests/core/svg_test.js`

### Collection class

`[class]Collection` is a set of SVG instances.

You can find code in `[file]src/collection.js`

To create `[class]Collection` instance use this:

```js
let collection = new tools.Collection();
```

That will create empty collection.

To clone another collection add collection as parameter to constructor:

```js
let newCollection = new tools.Collection(oldCollection);
```

To add/remove items there are several methods:

- `[func]add('icon-name', svg)` add new item to the collection.
- `[func]remove('icon-name')` remove item from the collection.
- `[func]rename('old-name', 'new-name')` rename item.

To access any item use this: `[js]collection.items['item-name']`

There are other helpful functions:

- `[func]length()` returns number of items in the collection.
- `[func]keys()` returns list of all icon names.

Then there are main functions that are used to manipulate SVG instances in the collection:

- `[func]forEach(callback)` iterates through all `[class]SVG` instances in the collection. Callback function arguments: `[js](svg, name)`, where `[prop]svg` is `[class]SVG` instance, `[prop]name` is the icon name.
- `[func]promiseAll(promise)` runs `[class]Promise` on all items in the collection. See example below.
- `[func]promiseEach(promise, stopOnError)` runs `[class]Promise` on all items in the collection, but only one at a time.

How to use `[func]forEach()`:

```js
collection.forEach((svg, name) => {
    console.log('Found icon ' + name + ': ' + svg.toString());
});
```

How to use `[func]promiseAll()` and `[func]promiseEach()`:

```js
collection.promiseAll((svg, name) => {
    return new Promise((fulfill, reject) => {
        // do stuff to "svg" variable
        fulfill('Result for icon ' + name);
    });
}).then(results => {
    // Results of all promises as object. Key = icon name, value = result for that icon

    Object.keys(results).forEach(name => {
        console.log('Result for icon ' + name + ':', results[name]);
    });
}).catch(err => {
    console.error('Promise failed:', err);
});
```

`[func]promiseAll()` and `[func]promiseEach()` are almost identical. First argument is callback that returns `[class]Promise` for one icon.

The only difference between function is: `[func]promiseAll()` runs all promises at the same time using `[func]Promise.all()` function, `[func]promiseEach()` runs promises one after another. It is better to use `[func]promiseEach()` when dealing with large collections.

You can find examples throughout this library and unit tests. Everything in this library is based on promises.

## Importing

There are several importers available. Some import one file, some import collections.

See [import functions](./import.md).

## Manipulating

Most functions require SVG to be optimized. Therefore, before doing anything else, you should optimize icon.

See [icon manipulation functions](./manipulation.md).

## Exporting

There are several exporters available that work with Collection or SVG instances.

See [export functions](./export.md).

## Examples

Few examples that show how to import, optimize and export icons:

- [Convert SVG set to Iconify JSON format](./import-mdi.md).
- [Convert FontAwesome Pro to Iconify JSON format](./import-fa-pro.md).
- [Convert FontAwesome 4 icon font to Iconify JSON format](./import-font.md).
