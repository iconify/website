```yaml
title: Iconify in UnoCSS
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Icons with UnoCSS

If you are using [UnoCSS](https://github.com/unocss/unocss), you can easily use [over 60,000 open source icons](/docs/icons/icon-data.md) and custom icons with minimal code.

Among other features, UnoCSS has `[npm]@unocss/preset-icons` package that dynamically generates icons. It uses [icon data from Iconify](/docs/icons/icon-data.md).

## Usage

To use icons with UnoCSS, add `[npm]@unocss/preset-icons` preset to config:

```js
import presetIcons from '@unocss/preset-icons';

UnoCSS({
	presets: [
		presetIcons({
			/* options */
		}),
		// ...other presets
	],
});
```

In your code add element with the following class name: `[str]i-` + icon set prefix + `[str]-` + icon name.

Examples:

```html
<span class="i-carbon-logo-github"></span>
<span class="i-mdi-light-home"></span>
```

It is that simple.

For more information, see [README file in preset-icons package](https://github.com/unocss/unocss/tree/main/packages/preset-icons/).

## Icon size

Be aware that by default, UnoCSS scales icons to `[num]1.2em`.

You can change that by changing `[prop]scale` option.

If you want to change `[prop]width` and `[prop]height` separately or make icon square, you can use `[prop]customize` option.
See below. 

## Custom icons

You can use UnoCSS with custom icons. During the build process, you can import, clean up and optimise icons using [Iconify Tools](/docs/libraries/tools/index.md).

See [demo from Iconify Tools package](https://github.com/iconify/tools/tree/main/%40iconify-demo/unocss). Configuration is in `[file]unocss.config.ts`.

Functions used in that config file are documented in [Iconify Tools](/docs/libraries/tools/index.md) section of this documentation. 

## Customise icons

You can customise icons using `[prop]customize` option.

Option `[prop]customize` is part of `[prop]customizations` option, it is a function has 3 parameters:
- `[prop]customisations` that can be used for flip or rotate icon.
- `[prop]data`, `[type]IconifyIcon` with icon data.
- `[prop]name`, `[type]string` with icon name in `[str]prefix:name` format.

The first parameter is a legacy option, it is not really useful.

Icon data is a mutable object, you can change it to customise icon.
You can change colors in icons that have hardcoded palette, opacity, timing for animations, add additional shapes and so on...
You can also resize icon or add padding by messing with `[prop]width`, `[prop]height`, `[prop]left` and `[prop]top` properties.

See [IconifyIcon type](/docs/types/iconify-icon.md) for icon data format.

Icon name lets you know which icon you are customizing.

### Examples

Making all icons square:

```js
presetIcons({
    customizations: {
        customize: (defaultCustomizations, data, name) => {
            // Make icon square
            const width = data.width ?? 16;
            const height = data.height ?? 16;
            if (height > width) {
              // Set width to match height
              data.width = height;
              // Center icon horizontally by changing viewBox left position
              data.left = (data.left ?? 0) - (height - width) / 2;
            }
            
            return defaultCustomizations
        },
    }
})
```

Changing color:

```js
presetIcons({
    customizations: {
        customize: (defaultCustomizations, data, name) => {
            if (name === 'twemoji:blue-square') {
                // Turn blue square into red square
                data.body = data.body.replaceAll('#55ACEE', '#e83933')
            }
            
            return defaultCustomizations
        },
    }
})
```

If something is not working, don't forget that you can always `[js]console.log(data)` to see icon data.
