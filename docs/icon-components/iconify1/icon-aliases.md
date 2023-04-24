```yaml
title: Variable icon name
replacements:
  - code: '/1/1.0.3/'
    value: '/${iconify1.version.major}/${iconify1.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Variable icon name

`include notices/iconify1`

What if you are designing a theme, you are using alert icon and you want that icon to be configurable?

Typically you'd need to use some variable in whatever template system you are using, something like this:

```html
<span class="iconify icon-alert" data-icon="{{ icons.alert }}"></span>
```

Where icon name is taken from "icons" object.

But what if you can't use template engine to configure variable icon names, but you still want to easily change icons in multiple places?

There is a different solution. You can do the same using Iconify SVG Framework 1.0 plugin system.

## Writing a plugin

Add something like this to your JavaScript. Make sure it is added after Iconify code.

```js
Iconify.addTag('custom-icon', true, function (element) {
	var icon = element.getAttribute('data-icon');
	switch (icon) {
		case 'alert':
			return 'mdi:alert';

		case 'login':
			return 'uim:sign-in';

		// Put here the rest of custom icon aliases

		default:
			// Log error, return "?" icon
			console.error('Unknown icon:', icon);
			return 'uil:question-circle';
	}
});
```

or

```js
var customIconsMap = {
	alert: 'mdi:alert',
	login: 'uim:sign-in',
};
Iconify.addTag('custom-icon', true, function (element) {
	var icon = element.getAttribute('data-icon');
	if (customIconsMap[icon] !== void 0) {
		return customIconsMap[icon];
	}

	// Log error, return "?" icon
	console.error('Unknown icon:', icon);
	return 'uil:question-circle';
});
```

That's it. It is very simple.

That code will add custom tag `[tag]custom-icon/` you can use instead of `[tag]iconify-icon/`.

In first example, inside `[func]switch` your code should return real icon name for icon alias.

In second example put all your custom icons in `[key]customIconsMap` variable.

## How to use it in HTML

After adding plugin above you can write code like this:

```html
<custom-icon class="icon-alert" data-icon="alert"></custom-icon>
```

It will be handled exactly the same as this:

```html
<span
	class="iconify icon-alert"
	data-icon="mdi:alert"
	data-inline="true"
></span>
```

`[str]"alert"` will be replaced with `[str]"mdi:alert"` (see `[func]switch` statement), class `[str]"iconify"` will be added to list of classes, `[attr]data-inline` attribute will be set to `[bool]true` (second parameter to `[func]addTag` function, you can change it by adding your own `[attr]data-inline` attribute).
