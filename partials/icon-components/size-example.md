Many icons are square. For such icons if you set one dimension, another dimension will have the same value.

However, there are many icons that are not square. For example, icons imported from icon fonts and Font Awesome.

This is data for `[icon]fa-regular:address-book`:

```yaml
src: common/fa-address-book.json
hint: Icon size is 448 x 512
```

If you do not set any dimensions, `[prop]height` will be set to `[str]1em` and `[prop]width` will be set to `[num]448 / 512` = `[str]0.875em`. However, values that have more than 2 numbers after decimal point are rounded up, so actual `[prop]width` will be `[str]0.88em`:

```html
<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	aria-hidden="true"
	focusable="false"
	role="img"
	class="iconify iconify--fa-regular"
	width="0.88em"
	height="1em"
	preserveAspectRatio="xMidYMid meet"
	viewBox="0 0 448 512"
>
	<path d="..." fill="currentColor"></path>
</svg>
```

If you set `[prop]width` to `[num]56`, but do not set `[prop]height`, `[prop]height` will be set to `[num]56 * 512 / 448` = `[num]64`:

```html
<svg width="56" height="64" ...>...</svg>
```

If you set both values: `[prop]width` to `[num]56` and `[prop]height` to `[num]128`, values will be as you set them (also see `[str]Alignment` section below):

```html
<svg width="56" height="128" ...>...</svg>
```
