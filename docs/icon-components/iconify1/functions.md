```yaml
title: SVG framework functions
replacements:
  - code: '/1/1.0.3/'
    value: '/${iconify1.version.major}/${iconify1.version.full}/'
  - code: '"1.0.3"'
    value: '"${iconify1.version.full}"'
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyAlias: '../../types/iconify-alias.md'
  IconifyJSON: '../../types/iconify-json.md'
```

# Iconify SVG framework functions

`include notices/iconify1`

The Iconify SVG framework is capable of more than just loading and replacing icon placeholders. You can use it in custom scripts to manipulate icons.

Available functions:

- [preloadImages(names)](#preload-images) loads images from API.
- [pauseObserving()](#observer) pauses MutationObserver.
- [resumeObserving()](#observer) resumes MutationObserver.
- [getConfig(name)](#config) returns current value for configuration option.
- [setConfig(name, value)](#config) sets new value for configuration option.
- [setCustomAPI(prefix, url)](#api-custom) sets custom API URL for icons with specific prefix.
- [addCollection(data)](#add-collection) adds icons to storage.
- [addIcon(name, data)](#add-icon) adds one icon to storage.
- [iconExists(name)](#icon-exists) checks if data for icon is available in storage.
- [listIcons()](#list-icons) retrieves list of all loaded icons.
- [getIcon(name)](#get-icon) retrieves raw data for icon.
- [getSVG(name, properties)](#get-svg) retrieves SVG string for icon.
- [getSVGObject(name, properties)](#get-svg-object) retrieves SVG data for icon.
- [addFinder(prefix, finder)](#add-finder) adds custom icon finder.
- [addTag(tag, inline, resolver)](#add-tag) registers custom tag.
- [scanDOM()](#scan-dom) scans DOM for new icons.
- [ready()](#ready) runs code when DOM has been loaded. Similar to jQuery's `[js]$(document).ready()`.
- [getVersion()](#version) returns Iconify version.

Available events:

- [IconifyAddedIcons](#event-added) event is triggered when new icons have been loaded from API.
- [IconifyReady](#event-ready) event is triggered when Iconify has been loaded.

Explanation of each function and event:

## Event: IconifyAddedIcons {#event-added}

This event is being called when new icons have been loaded from API. It can be used to wait for icons to load before manipulating those icons.

Sample code that loads several icons then calls callback:

```yaml
src: iconify1/functions-ready.js
```

## Event: IconifyReady {#event-ready}

This event is being called when DOM is ready.

It is used internally, use [ready()](#ready) function instead of this event.

## Function: preloadImages {#preload-images}

```js
Iconify.preloadImages(['fa-solid:home', 'mdi-arrow-left']);
```

This function loads images from API. It has one argument: array of images to load.

## Functions: pauseObserving and resumeObserving {#observer}

```js
// Pause observer
Iconify.pauseObserving();

// Manipulate DOM without Iconify watching it
// ...

// Resume observer
Iconify.resumeObserving();
```

These functions pause and resume MutationObserver. What is MutationObserver? It monitors DOM for changes, then tells Iconify that DOM has been changed, so Iconify scans DOM for icon placeholders.

MutationObserver makes it possible to use Iconify in AJAX forms, React applications, Angular applications and any other scripts that change DOM.

If you are doing lots of changes to DOM and don't want Iconify to re-scan DOM, pause scanning by using `[js]Iconify.pauseObserving()`, then when you are done changing DOM, resume observer using `[js]Iconify.resumeObserving()`.

Most likely you'll never use these functions, but they exist anyway in case if someone needs to temporary disable Iconify.

## Functions: getConfig and setConfig {#config}

```js
// Get old value
var oldValue = Iconify.getConfig('localStorage');

// Set new value
Iconify.setConfig('localStorage', true);
```

These functions are used to get and set configuration options.

First argument is option name. In `[func]setConfig` second argument is new value.

Not all configuration options can be changed after Iconify has been included! `[js]Iconify.getConfig()` will return values for all options, but `[js]Iconify.setConfig()` can only change several options.

List of options that can be changed at any time (usable with `[js]Iconify.setConfig()`):

- `[key]defaultAPI` - URL of Iconify API, string
- `[key]API` - List of custom API URLs for different prefixes. Object, where key is prefix, value is API URL. Setting this option will merge it with existing option rather than overwrite it. See also: [Iconify.setCustomAPI()](#api-custom).
- `[key]loaderMaxURLSize` - Maximum length of API URL, number. If limit is reached when requesting icons from API, request is split into 2 or more requests.
- `[key]sessionStorage` - Toggles `[prop]sessionStorage`, `[type]boolean`. Enabled by default.
- `[key]localStorage` - Toggles `[prop]localStorage`, `[type]boolean`. Disabled by default. If both `[prop]localStorage` and `[prop]sessionStorage` are enabled, both are read on page load, but new icons are stored only in `[prop]localStorage`.
- `[key]SVGAttributes` - List of attributes added to SVG, object where key = attribute name, value = attribute value.

List of options that can be changed only before Iconify is included (not usable with `[js]Iconify.setConfig()`):

- `[key]loaderEvent` - Name of DOM event that is triggered when new icons are loaded from API.
- `[key]imageClass` - Placeholder class name, string.
- `[key]loadingClass` - Pending icon class name that is added to placeholder element when icon is being loaded from API, string.
- `[key]iconAttribute` - Name of attribute that stores icon name, string.
- `[key]rotateAttribute` - Name of attribute that stores rotation, string.
- `[key]flipAttribute` - Name of attribute that stores flip transformation, string.
- `[key]inlineModeAttribute` - Name of attribute that stores inline/block mode, string.
- `[key]alignAttribute` - Name of attribute that stores alignment, string.
- `[key]appendAttribute` - Name of attribute that stores append status (icon is appended to placeholder rather than replaces it), string.
- `[key]appendedClass` - Placeholder icon class name that is added to icons when SVG is appended as child node rather than replacing placeholder, string.
- `[key]appendedClass` - Placeholder icon class name that is added to icons when SVG is appended as child node rather than replacing placeholder, string.
- `[key]webComponentsPolyfill` - URL of web components polyfill for old browsers, string.
- `[key]classListPolyfill` - URL of `[func]classList` polyfill for old browsers, string.

To change options not usable with `[func]setConfig` you need to create `[prop]IconifyConfig` object before including Iconify:

```html
<script>
	var IconifyConfig = {
		classListPolyfill:
			'https://cdnjs.cloudflare.com/ajax/libs/classlist/1.2.201711092/classList.min.js',
		webComponentsPolyfill:
			'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.min.js',
	};
</script>
<script src="https://code.iconify.design/1/1.0.3/iconify.min.js"></script>
```

## Function: setCustomAPI {#api-custom}

```js
Iconify.setCustomAPI(
	'prefix',
	'https://my-domain-name.com/{prefix}.js?icons={icons}'
);
```

This function sets custom API URL for icons that start with some prefix. First argument is collection prefix, second argument is API URL.

URL can contain several variables:

- `[key]{prefix}` - will be replaced with prefix
- `[key]{icons}` - will be replaced with list of requested icons

You don't have to host API script if your custom icon set is small. Instead, you can upload only `[str].js` file that loads all your custom icons and use it as second `[func]setCustomAPI` argument.

To set custom API URL for all collections, change `[prop]defaultAPI` configuration variable using `[func]setConfig` function or `[prop]IconifyConfig` object.

## Function: addCollection {#add-collection}

```js
Iconify.addCollection({
	prefix: 'custom',
	icons: {
		icon1: {
			body: '<path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor"/>',
		},
	},
	width: 24,
	height: 24,
});
```

This function adds multiple icons to Iconify storage. It has only one argument: object containing icon data. Format of object is the same as format of JSON collection.

See `[type]IconifyJSON` type.

## Function: addIcon {#add-icon}

```js
Iconify.addIcon('custom-icon2', {
	body: '<path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor"/>',
	height: 24,
	width: 24,
});
```

This function adds one icon to Iconify storage.

First argument is icon name, second argument is icon data.

See `[type]IconifyIcon` type.

## Function: iconExists {#icon-exists}

```js
if (Iconify.iconExists('some-icon')) {
	// Icon exists in storage! Do something with it
} else {
	// Icon is not in storage, attempt to load it from API
	Iconify.preloadImages(['some-icon']);

	// Here you should subscribe to 'IconifyAddedIcons' event to be notified when icon has been loaded,
	// and check if it has been loaded because event might have been fired for some other icon.

	// Also see: sample code for "IconifyAddedIcons" in this tutorial
}
```

This function checks if icon has been loaded. Name might be confusing, it is meant as check if icon exists in storage, not if icon exists in API.

## Function: listIcons {#list-icons}

```js
var icons = Iconify.listIcons();
// icons = ['mdi:home', 'mdi:arrow-left', 'noto:cat', 'emojione:dog'];

var mdiIcons = Iconify.listIcons('mdi');
// mdiIcons = ['home', 'arrow-left'];
```

This function lists icons that have been loaded.

It has one optional parameter: icon prefix.

If icon prefix is not set, it will return list of all icons with their prefixes. If icon prefix is set, it will return list of icons from specific collection without their prefixes.

## Function: getIcon {#get-icon}

```js
Iconify.getIcon('icon-name');
```

This function has only 1 parameter: icon name.

It returns object that contains icon dimensions and body in same format as it is stored in JSON data retrieved from API.

If icon does not exist, it returns null.

Example:

```json
{
	"body": "<path d=\"M1408 768v480q0 26-19 45t-45 19H960V928H704v384H320q-26 0-45-19t-19-45V768q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7L832 200 140 777q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5T37 654L756 55q32-26 76-26t76 26l244 204V64q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z\" fill=\"currentColor\"/>",
	"width": 1664,
	"height": 1312,
	"left": 0,
	"top": 0,
	"rotate": 0,
	"vFlip": false,
	"hFlip": false
}
```

Also see [Getting SVG data](./svg-data.md) and `[type]IconifyIcon` type.

## Function: getSVG {#get-svg}

```js
var svg1 = Iconify.getSVG('fa-solid:home');
var svg2 = Iconify.getSVG('fa-solid:home', {
	'data-rotate': '90deg',
	'data-height': '32',
});
```

This function has 2 parameters: icon name and properties. Second parameter is optional.

It returns SVG string (or false if icon does not exist):

```yaml
src: iconify1/index-inline-svg.html
```

Also see [Getting SVG data](./svg-data.md).

## Function: getSVGObject {#get-svg-object}

```js
var icon = Iconify.getSVGObject('fa-solid:home');
```

This function is similar to `[js]getSVG()` mentioned above, but instead of returning HTML code, it returns data you can use to render HTML code yourself.

```json
{
	"attributes": {
		"xmlns": "http://www.w3.org/2000/svg",
		"xmlns:xlink": "http://www.w3.org/1999/xlink",
		"aria-hidden": "true",
		"focusable": "false",
		"width": "1em",
		"height": "1em",
		"style": "vertical-align: -0.125em;-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);",
		"preserveAspectRatio": "xMidYMid meet",
		"viewBox": "0 0 24 24"
	},
	"body": "<path d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z\" fill=\"currentColor\"/>"
}
```

Result is an object with list of attributes for `[tag]svg` and `[attr]body` attribute that has icon content as a string.

## Function: addFinder {#add-finder}

This function is used to create plugins that convert custom placeholders to Iconify icons.

You can find several examples in [Iconify v1 plugins repository on GitHub](https://github.com/iconify/iconify/tree/iconify1/src/browser/plugins).

First argument is plugin name, second argument is object containing plugin functions and properties.

## Function: addTag {#add-tag}

```js
// Add <fa-icon> tag that uses "data-icon" attribute for icon name and adds "fa" prefix to it

// <fa-icon data-icon="home" /> is equal to
// <span class="iconify" data-inline="false" data-icon="fa:home" />
Iconify.addTag('fa-icon', false, function (element) {
	var result = element.getAttribute('data-icon');
	return typeof result === 'string' ? 'fa:' + result : '';
});
```

This function is used to add custom tag. It is intended to be used for plugins. Tag `[tag]iconify-icon` is added using this function.

It has 3 arguments: name of tag (string), default inline state (boolean, can be overwritten with data-inline attribute), function to retrieve icon name from node.

Third argument is optional. If third argument is not set, default function that retrieves icon name from data-icon attribute is used.

## Function: scanDOM {#scan-dom}

```js
Iconify.scanDOM();
```

This function immediately scans DOM for changes.

Use it if for some reason you need to scan DOM immediately. For example, if document hasn't finished loading, but you want to replace placeholders.

## Function: ready {#ready}

```js
Iconify.ready(function () {
	// DOM is ready, do some stuff!
	console.log('DOM is ready!');
});
```

This function executes code when DOM is ready. If DOM has already been loaded, code is executed on next timer tick.

Function is almost identical to popular jQuery's `[js]$(document).ready()` function. It is used internally to start scanning document for icons only after entire DOM has been loaded, function was exposed so coders using Iconify could use it as well if they need it.

Function is compatible with all browsers supported by Iconify, including old browsers that don't have `[str]DOMContentLoaded` event.

## Function getVersion {#version}

This function returns Iconify SVG framework version as a string. It has no arguments.

```js
console.log(Iconify.getVersion()); // "1.0.3"
```
