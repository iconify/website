```yaml
title: 'Iconify for Vue Function: loadIcons'
types:
  IconifyIconName: './icon-name.md'
functions:
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
```

# Iconify for Vue function: loadIcons

This tutorial is part of [Iconify for Vue functions tutorial](./index.md#functions).

`include icon-components/functions/load-icons/intro`

## Usage

`include icon-components/functions/load-icons/props`

## Icons list

`include icon-components/functions/load-icons/props-icons`

## Callback

`include icon-components/functions/load-icons/props-callback`

## IconifyIconName type

`include types/iconify-icon-name`

## Examples

Simple callback that loads one icon:

```yaml
src: icon-components/common/load-icons.js
replacements:
  - search: react
    replace: vue
```

Async version of `[func]loadIcons()`:

```yaml
src: icon-components/common/load-icons-async.js
replacements:
  - search: react
    replace: vue
```

## Component example

This example dynamically loads icon data and renders `[html]<slot />` while icon is being loaded. It is redundant because Vue component already does that, but it is used to show how to use `[func]getIcon()` and `[func]loadIcons()`.

```js
import { Icon, getIcon, loadIcons } from '@iconify/vue';
import { h, defineComponent, ref } from 'vue';

export default defineComponent({
	components: {
		Icon,
	},
	props: ['icon'],
	setup() {
		// Variable to store function to cancel loading
		const loader = ref(null);

		// Icon data
		const data = ref(null);

		// Function to check icon data
		const check = (icon: string) => {
			const iconData = getIcon(icon);

			// Cancel old loder
			if (loader.value) {
				loader.value();
				loader.value = null;
			}

			if (iconData) {
				data.value = iconData;
			} else {
				loader.value = loadIcons([icon], () => {
					data.value = getIcon(icon);
				});
			}
		};
		return {
			loader,
			data,
			check,
		};
	},
	watch: {
		icon: {
			immediate: true,
			handler(value) {
				// Check new value
				this.check(value);
			},
		},
	},
	// Stop loading
	unmounted() {
		const loader = this.loader.value;
		if (loader) {
			loader();
		}
	},
	render() {
		const icon = this.data;
		if (icon) {
			return h(Icon, {
				icon,
			});
		}
		return this.$slots.default ? this.$slots.default() : null;
	},
});
```

If you want to load only one icon, there is also `[func]loadIcon()` that is easier to use.
