```yaml
title: Getting SVG data
replacements:
  - code: '/1/1.0.3/'
    value: '/${iconify1.version.major}/${iconify1.version.full}/'
  - code: '"1.0.3"'
    value: '"${iconify1.version.full}"'
```

# Getting SVG data

`include notices/iconify1`

Iconify offers components for many frameworks, such as React, Vue, Svelte. Most of those components work only with bundled icons.

But what if framework you are using is not supported or you want to load icons from API?

There is a simple solution. You can use Iconify SVG framework to build your own components.

## Iconify 2

This article is outdated!

Iconify 2 offers much better and cleaner code that can be re-used for custom components. See [Iconify GitHub repository](https://github.com/iconify/iconify) for various components.

... back old article...

## Loading icons

It can be simplified by including icons in a bundle, but this example shows what to do if you are loading icons from API. If you bundle icons with your script, you can skip this code.

Loading icons from API is not trivial task because icons are not loaded instantly, so code needs to be asynchronous.

To load icons, first you need to check if icons have already been loaded:

```js
if (Iconify.iconExists('mdi-home')) {
	// Already loaded!
}
```

Then you need to add event listener for event `[str]IconifyAddedIcons`:

```js
function listener() {
	// Re-check if icons have been loaded
	if (Iconify.iconExists('mdi-home')) {
		// Loaded!
		document.removeEventListener('IconifyAddedIcons', listener);
		return;
	}
}
document.addEventListener('IconifyAddedIcons', listener);
```

Then you need to tell Iconify SVG framework to load icons from API:

```js
Iconify.preloadImages(['mdi-home']);
```

If you need to load multiple icons, check for all icons in event listener and remove event listener only after all icons have loaded.

If icon cannot be loaded for some reason (icon does not exist or internet connection to API is bad), there is no way to check if icon has failed to load. Therefore, if you are displaying multiple icons, render each one as soon as it is ready instead of waiting for all icons to load.

### Load icons with callback {#load-callback}

The code above is not trivial for developers with limited JavaScript experience, so would it be better if there was a simple callback?

Unfortunately Iconify SVG framework version 1 does not have a built-in asynchronous function to load icons (but Iconify 2 does, see notice at the beginning of this article!). However, using functions mentioned above, it is very easy to create a callback.

This is a sample function that loads several icons and fires callback when all icons have been loaded:

```js
/**
 * Load icons
 *
 * @param {Array} icons List of icons to load
 * @param {function} callback Function to call when icons have been loaded
 */
function preloadIconifyIcons(icons, callback) {
	var pending = icons.slice(0),
		loaded = [],
		listener = null;

	/**
	 * Check if icons have been loaded
	 */
	function check() {
		var stillPending = [];

		// Check if all icons have been loaded
		pending.forEach(function (icon) {
			if (Iconify.iconExists(icon)) {
				loaded.push(icon);
			} else {
				stillPending.push(icon);
			}
		});
		pending = stillPending;

		if (!pending.length) {
			// All icons have been loaded - remove event listener (if it was added) and call callback
			if (listener) {
				document.removeEventListener('IconifyAddedIcons', listener);
				listener = null;
			}
			callback(loaded);
		}
	}

	// Check if icons have been loaded
	check();
	if (pending.length) {
		// Not all icons are available - setup event listener that
		// calls check() when new icons are added to Iconify storage
		listener = check;
		document.addEventListener('IconifyAddedIcons', listener);

		// Load pending icons
		Iconify.preloadImages(pending);
	}
}

/**
 * Do your stuff!
 */
preloadIconifyIcons(['mdi:home', 'mdi:arrow-left'], function (icons) {
	// Icons are loaded, do whatever you want!
	console.log('Loaded icons:', icons);
});
```

## Retrieving data

After making sure icons have been loaded, you can retrieve icon data.

There are several functions that retrieve different type of data.

### Iconify.getIcon {#get-icon}

This function retrieves raw data that you can use to render SVG yourself.

See [Iconify.getIcon](./functions.md#get-icon).

### Iconify.getSVG {#get-svg}

This function renders SVG and returns it as a string.

See [Iconify.getSVG](./functions.md#get-svg).

### Iconify.getSVGObject {#get-svg-object}

This function renders SVG and returns it as list of attributes for `[tag]svg` and icon body as a string.

See [Iconify.getSVGObject](./functions.md#get-svg-object).
