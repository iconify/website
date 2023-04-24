```yaml
title: Exporting icons with Iconify JSON Tools
```

# Exporting icons with Iconify JSON Tools

`include notices/json-tools`

Iconify JSON Tools is a library for manipulating JSON icon sets. The library is available for PHP and Node.js, code in both versions is almost identical. See [Iconify JSON Tools documentation](./index.md).

This document shows how to export JSON icon set to individual SVG files.

In addition to Iconify JSON Tools, JSON icon set can be exported to SVG using [Iconify Tools](../node/export.md).

Unlike Iconify Tools, Iconify JSON Tools requires a bit more coding to export icons. However, you have more control over each icon, so you can do things like change color, resize, transform icon and add bounding box so icons would keep their `[attr]viewBox` when imported to some image editors that usually ignore `[attr]viewBox`.

## Node.js {#node}

Install `[npm]@iconify/json-tools` by running `[bash]npm install @iconify/json-tools` then create file `[file]export.js` with the following content:

```yaml
src: tools/json/export-svg.js
title: 'export.js'
```

Run `[bash]node export` to run `[file]export.js`.

This code will convert `[file]mdi.json` to individual SVG files that will be saved in directory `[file]output`.

## PHP

PHP code is identical to previous example, but written in PHP.

Initialize Composer project, install `[packagist]iconify/json-tools` dependency by running `[bash]composer require iconify/json-tools` then create file `[file]export.php` with the following content:

```yaml
src: tools/json/export-svg.php
title: 'export.php'
```

Run `[bash]php export.php` to run `[file]export.php`.

This code will convert `[file]mdi.json` to individual SVG files that will be saved in directory `[file]output`.

## Additional parameters

By default, exported icons will have `[key]currentColor` as color value, icon height will be set to icon's original dimensions. With Iconify JSON Tools it is very easy to customize exported icons by adding additional properties to `[func]getSVG()` function.

Example:

```js
// Generate red icon with "1em" height and bounding rectangle
let code = svg.getSVG({
	height: '1em',
	color: 'red',
	box: true,
});
```

```php
// Generate red icon with "1em" height and bounding rectangle
$code = $svg->getSVG([
    'height' => '1em',
    'color' => 'red',
    'box' => true
]);
```

See [SVG class documentation](./svg.md).

## Iconify Tools

In addition to Iconify JSON Tools, JSON icon set can be exported to SVG using [Iconify Tools](../node/export.md).
