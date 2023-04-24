```yaml
title: Converting icon font to Iconify JSON with Iconify Tools
```

# Import SVG font

This example shows how to convert SVG font to Iconify JSON format.

`include notices/tools1`

As a source, lets take FontAwesome 4 from [Font-Awesome 4 GitHub repository](https://github.com/FortAwesome/Font-Awesome/tree/fa-4) that is also available as `[npm]font-awesome` NPM package.

Initialize project by running these commands:

```bash
npm init
npm install @iconify/tools --save
npm install font-awesome --save
```

Then create file `[file]convert-fa.js` and put this content:

```yaml
src: tools/node/convert-fa.js
title: 'convert-fa.js'
```

Then run:

```bash
node convert-fa
```

It will generate file `[file]fa.json`.

There are comments in code above that explain what is going on.

Process is simple:

1. `[func]tools.ImportFont()` imports SVG font.
2. `[func]tools.SVGO()` is used to optimize icons.
3. `[func]tools.ChangePalette()` is used to add `[str]"currentColor"` to all shapes because imported SVG do not have any color values.
4. `[func]tools.ExportJSON()` is used to export collection to JSON file.

This code does not do one major part of importing font: it does not assign keywords to each icon. Keywords are not stored in font, they should be retrieved from CSS file. Problem with those files is they can be very different for each font, so there is no universal code to get those icon names.

However, if you do get icon names for each icon, you can use code like this to rename icons:

```js
let keywords = {
	f19c: 'bank',
	f0fc: 'beer',
	// and the rest of keywords
};
collection.forEach((svg, key) => {
	if (keywords[key] === void 0) {
		// No keyword for character - delete it
		collection.remove(key);
	} else {
		collection.rename(key, keywords[key]);
	}
});
```
