```yaml
title: Wrapper Function for Icon Bundles
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# Wrapper function for icon bundles

This tutorial is a part of [Iconify icon bundles tutorial](./index.md).

When you extract data for icons in `[type]IconifyJSON` format, you need to add it to icon component.

There are two ways to do it:

- If you are adding icons after component or bundling icons with component, use `[func]addCollection()` function.
- If you are loading icon bundle separately in a browser, use `[var]IconifyPreload` global variable.

## IconifyPreload

When using icon components in a browser, on startup they try to load bundles icons from global variable `[var]IconifyPreload`, if it exists.

Value can be `[type]IconifyJSON` or array of `[type]IconifyJSON` objects.

Variable is checked only during loading, so make sure you load icon bundle that uses `[var]IconifyPreload` before icon component.

Example:

```js
if (typeof self.IconifyPreload === 'undefined') {
	self.IconifyPreload = [];
}
self.IconifyPreload.push({
	prefix: 'mdi-light',
	icons: {
		account: {
			body: '<path d="M11.5 14c4.142 0 7.5 1.567 7.5 3.5V20H4v-2.5c0-1.933 3.358-3.5 7.5-3.5zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5zM11.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z" fill="currentColor"/>',
		},
		home: {
			body: '<path d="M16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2z" fill="currentColor"/>',
		},
	},
	width: 24,
	height: 24,
});
```

## addCollection

If you want to load icons after loading icon component or you want to use it in environment other than browser (such as server side application), use `[func]addCollection()`.

Example:

```js
addCollection({
	prefix: 'mdi-light',
	icons: {
		account: {
			body: '<path d="M11.5 14c4.142 0 7.5 1.567 7.5 3.5V20H4v-2.5c0-1.933 3.358-3.5 7.5-3.5zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5zM11.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z" fill="currentColor"/>',
		},
		home: {
			body: '<path d="M16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2z" fill="currentColor"/>',
		},
	},
	width: 24,
	height: 24,
});
```

Function exists in every icon component, the only difference between icon components is where you import `[func]addCollection()` from.

### SVG Framework

When using SVG framework, you can get `[func]addCollection()` from global variable `[var]Iconify`:

```js
Iconify.addCollection({
	prefix: 'mdi-light',
	icons: {
		account: {
			body: '<path d="M11.5 14c4.142 0 7.5 1.567 7.5 3.5V20H4v-2.5c0-1.933 3.358-3.5 7.5-3.5zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5zM11.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z" fill="currentColor"/>',
		},
		home: {
			body: '<path d="M16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2z" fill="currentColor"/>',
		},
	},
	width: 24,
	height: 24,
});
```

If you are bundling SVG framework and icons bundle, you can import `[func]addCollection()` from SVG framework:

```js
import { addCollection } from '@iconify/iconify';

addCollection({
	prefix: 'mdi-light',
	icons: {
		account: {
			body: '<path d="M11.5 14c4.142 0 7.5 1.567 7.5 3.5V20H4v-2.5c0-1.933 3.358-3.5 7.5-3.5zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5zM11.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z" fill="currentColor"/>',
		},
		home: {
			body: '<path d="M16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2z" fill="currentColor"/>',
		},
	},
	width: 24,
	height: 24,
});
```

If you are not sure if SVG framework has loaded, you can wrap your code in function that checks for both `[var]Iconify` and `[var]IconifyPreload`. This is available only for SVG framework.

```js
(function () {
	function addCollection(data) {
		try {
			if (typeof self.Iconify === 'object' && self.Iconify.addCollection) {
				self.Iconify.addCollection(data);
				return;
			}
			if (typeof self.IconifyPreload === 'undefined') {
				self.IconifyPreload = [];
			}
			self.IconifyPreload.push(data);
		} catch (err) {}
	}

	addCollection({
		prefix: 'mdi-light',
		icons: {
			account: {
				body: '<path d="M11.5 14c4.142 0 7.5 1.567 7.5 3.5V20H4v-2.5c0-1.933 3.358-3.5 7.5-3.5zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5zM11.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z" fill="currentColor"/>',
			},
			home: {
				body: '<path d="M16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2z" fill="currentColor"/>',
			},
		},
		width: 24,
		height: 24,
	});

	addCollection({
		prefix: 'tabler',
		icons: {
			'device-desktop': {
				body: '<g class="icon-tabler" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/></g>',
			},
			'photo': {
				body: '<g class="icon-tabler" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 8h.01"/><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 15l4-4a3 5 0 0 1 3 0l5 5"/><path d="M14 14l1-1a3 5 0 0 1 3 0l2 2"/></g>',
			},
		},
		width: 24,
		height: 24,
	});
})();
```

### Other components

For other components you need to import `[func]addCollection()` from component package.

For all components is it simple:

```js
import { addCollection } from '@iconify/react';
```

```js
import { addCollection } from '@iconify/vue';
```

```js
import { addCollection } from '@iconify/vue2';
```

```js
import { addCollection } from '@iconify/svelte';
```

For Ember it is a bit different because component is different, It is an add-on, not a simple component:

```js
import { addCollection } from '@iconify/ember/components/iconify-icon';
```

You can also use `[var]IconifyPreload` with all icon components.
