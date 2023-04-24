```yaml
title: Converting SVG set to Iconify JSON with Iconify Tools
```

# Converting SVG set to Iconify JSON

This example shows how to convert directory full of SVG files to Iconify JSON format.

`include notices/tools1`

This example uses Iconify Tools 1. Modern version that uses Iconify Tools 2 [is available here](../tools2/examples/import-mdi.md).

As a source, lets take Material Design icons from [Templarian/MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG) repository that is also available as `[npm]@mdi/svg` NPM package.

Initialize project by running these commands:

```bash
npm init
npm install @iconify/tools @mdi/svg --save
```

Then create file `[file]convert-mdi.js` and put this content:

```yaml
src: tools/node/convert-mdi.js
title: 'convert-mdi.js'
```

Then run:

```bash
node convert-mdi
```

Prepared project is available in [Iconify Tools GitHub repository](https://github.com/iconify/tools/tree/demo/convert-mdi).

## How does it work?

There are comments in code above that explain what is going on.

Process is simple:

1. `[func]tools.ImportDir()` imports all icons from directory `[str]"svg"` of `[npm]@mdi/svg` package.
2. `[func]tools.SVGO()` is used to optimize icons.
3. `[func]tools.Tags()` is used to validate and clean up icons.
4. Then icons' origin is moved to 0,0 and `[func]tools.SVO()` is used again to optimize icons.
5. `[func]tools.ChangePalette()` is used to add `[str]"currentColor"` to shapes that are missing colors and change existing color to `[str]"currentColor"` (colored icons use different sets of options, see comments in code).
6. `[func]tools.ExportJSON()` is used to export collection to JSON file.

Steps 2, 3 and 4 are actually useless for this example because MDI icons are all well coded, but they are included in example because some SVG sets do require them.

Also see [how to import Font Awesome Pro](./import-fa-pro.md). It is a bit more complex because it imports multiple icon sets at once, but it is also cleaner because it does not include unnecessary steps.

## Handling errors when processing icons

In code in this tutorial, if script encounters error, it will throw exception.

But what if you want bad file to be simply ignored? Then you can change `[prop]stopOnError` parameter to `[func]promiseEeach()` to false or replace `[func]reject()` with `[func]fulfill()` while also removing bad icon.

For example, this is code that optimizes icons:

```js
return collection.promiseEach(
	(svg, key) =>
		new Promise((fulfill, reject) => {
			tools
				.SVGO(svg, SVGOOptions)
				.then((res) => {
					fulfill(res);
				})
				.catch((err) => {
					reject('Error optimizing icon ' + key + '\n' + util.format(err));
				});
		}),
	true
);
```

And this is same code that instead of throwing error simply removes bad icon:

```js
return collection.promiseEach(
	(svg, key) =>
		new Promise((fulfill, reject) => {
			tools
				.SVGO(svg, SVGOOptions)
				.then((res) => {
					fulfill(res);
				})
				.catch((err) => {
					console.error('Error optimizing icon ' + key, err);
					collection.remove(key);
					fulfill(null);
				});
		}),
	false
);
```
