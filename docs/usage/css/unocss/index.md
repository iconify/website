```yaml
title: Iconify in UnoCSS
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
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

For more information see [README file in preset-icons package](https://github.com/unocss/unocss/tree/main/packages/preset-icons/).

## Icon size

Be aware that by default, UnoCSS scales icons to `[num]1.2em`.

You can change that by changing `[prop]scale` option.

## Custom icons

You can use UnoCSS with custom icons. During build process you can import, clean up and optimise icons using [Iconify Tools](/docs/libraries/tools/index.md).

See [demo from Iconify Tools package](https://github.com/iconify/tools/tree/main/%40iconify-demo/unocss). Configuration is in `[file]unocss.config.ts`.
