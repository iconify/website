```yaml
title: Convert SVG to mask
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
functions:
  #parseColors: './colors/parse.md'
```

# Converting SVG to mask

This function is part of [icon manipulation functions](./index.md) in [Iconify Tools](../index.md).

Function `[func]convertSVGToMask()` converts icon content to an alpha mask and masks a rectangle that has the same
dimensions as icon's `[prop]viewBox`.

This function is intended to be used in two scenarios:
- When changing icon with multiple colors to a monotone icon, using different shades for different colors.
- When fixing badly designed icon, which has white shapes instead of transparent parts.

## How masks work

Masks help in a situation when there are multiple shapes, some of which should be solid, some transparent.
Image in a mask is treated as an alpha channel for shape that is being masked.

Color in shapes is treated as an alpha channel: white (255) has opacity of 1, black (0) has opacity of 0. Other colors
are converted to alpha channel by combining their red, green and blue channels are dividing it by 255*3.

For example, this icon has multiple shapes with different colors (using black background to make sure white shapes are visible):

<svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="background-color: black">
    <path d="M6.5 20C4.98 20 3.68333 19.4767 2.61 18.43C1.53667 17.3767 1 16.0933 1 14.58C1 13.28 1.39 12.12 2.17 11.1C2.95667 10.08 3.98333 9.43 5.25 9.15C5.67 7.61667 6.50333 6.37667 7.75 5.43C9.00333 4.47667 10.42 4 12 4C13.9533 4 15.6067 4.68 16.96 6.04C18.32 7.39333 19 9.04667 19 11C20.1533 11.1333 21.1067 11.6333 21.86 12.5C22.62 13.3533 23 14.3533 23 15.5C23 16.7533 22.5633 17.8167 21.69 18.69C20.8167 19.5633 19.7533 20 18.5 20" fill="white"/>
    <path d="M6.5 18H18.5C19.2 18 19.79 17.7567 20.27 17.27C20.7567 16.79 21 16.2 21 15.5C21 14.8 20.7567 14.21 20.27 13.73C19.79 13.2433 19.2 13 18.5 13H17V11C17 9.62 16.5133 8.44 15.54 7.46C14.5667 6.48667 13.3867 6 12 6C10.62 6 9.44 6.48667 8.46 7.46C7.48667 8.44 7 9.62 7 11H6.5C5.53333 11 4.71 11.3433 4.03 12.03C3.34333 12.71 3 13.5333 3 14.5C3 15.4667 3.34333 16.3 4.03 17C4.71 17.6667 5.53333 18 6.5 18Z" fill="#444"/>
    <circle cx="19" cy="19" r="5" fill="red"/>
    <path d="M18 16H20V18H22V20H20V22H18V20H16V18H18V16Z" fill="white"/>
</svg>

Here is the same icon used as a mask for rectangle, rendered using various colors:

<svg width="192" height="48" viewBox="0 0 96 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <mask id="mask0">
            <path d="M6.5 20C4.98 20 3.68333 19.4767 2.61 18.43C1.53667 17.3767 1 16.0933 1 14.58C1 13.28 1.39 12.12 2.17 11.1C2.95667 10.08 3.98333 9.43 5.25 9.15C5.67 7.61667 6.50333 6.37667 7.75 5.43C9.00333 4.47667 10.42 4 12 4C13.9533 4 15.6067 4.68 16.96 6.04C18.32 7.39333 19 9.04667 19 11C20.1533 11.1333 21.1067 11.6333 21.86 12.5C22.62 13.3533 23 14.3533 23 15.5C23 16.7533 22.5633 17.8167 21.69 18.69C20.8167 19.5633 19.7533 20 18.5 20" fill="white"/>
            <path d="M6.5 18H18.5C19.2 18 19.79 17.7567 20.27 17.27C20.7567 16.79 21 16.2 21 15.5C21 14.8 20.7567 14.21 20.27 13.73C19.79 13.2433 19.2 13 18.5 13H17V11C17 9.62 16.5133 8.44 15.54 7.46C14.5667 6.48667 13.3867 6 12 6C10.62 6 9.44 6.48667 8.46 7.46C7.48667 8.44 7 9.62 7 11H6.5C5.53333 11 4.71 11.3433 4.03 12.03C3.34333 12.71 3 13.5333 3 14.5C3 15.4667 3.34333 16.3 4.03 17C4.71 17.6667 5.53333 18 6.5 18Z" fill="#444"/>
            <circle cx="19" cy="19" r="5" fill="red"/>
            <path d="M18 16H20V18H22V20H20V22H18V20H16V18H18V16Z" fill="white"/>
        </mask>
    </defs>
    <rect mask="url(#mask0)" width="24" height="24" fill="currentColor"/>
    <rect mask="url(#mask0)" width="24" height="24" fill="var(--hljs-inline-type)" transform="translate(24 0)" />
    <rect mask="url(#mask0)" width="24" height="24" fill="var(--hljs-string)" transform="translate(48 0)" />
    <rect mask="url(#mask0)" width="24" height="24" fill="var(--vp-c-text-2)" transform="translate(72 0)" />
</svg>

Code used to create this sample is available below in the examples section, in "Converting as is" demo.

## Usage

Function has the following parameters:

- `[prop]svg`, `[type]SVG`. Icon instance.
- `[prop]options`, `[type]object`. Optional options.

Function returns `true` on success, `false` if icon was not converted to mask.

### False result

When can function fail to convert icon to mask?
- If icon contains unexpected color(s). Make sure all colors are handled by `[prop]solid`, `[prop]transparent` and/or `[prop]custom` options.
- If there is nothing to mask (icon has one color) and `[prop]force` option is not enabled. Use `[func]parseColors` to change color in such icons.

## Options

Options is an object with the following optional properties:
- `[prop]id`, `[type]string`. Mask id, default value is `[str]mask`.
- `[prop]force`, `[type]boolean`. If enabled, forces function to apply mask even if there is nothing to mask.
- `[prop]color`, `[type]string`. Color to fill mask, default value is `[str]#000`.

To tell function which colors should be treated as solid, transparent or semi-transparent, use the following options:
- `[prop]solid`, `[type]string | string[] | function`. Solid colors: string, array of strings or a callback.
- `[prop]transparent`, `[type]string | string[] | function`. Transparent colors: string, array of strings or a callback.
- `[prop]custom`, `[type]function`. Callback that should return mask color or opacity for a color found in icon.

By default, black color is considered to be solid, white color is considered to be transparent (opposite of how masks
work, but exactly how most bugged icons are designed), all other colors found in an icon will cause function to fail.

When using `[prop]custom` option, you might want to disable default values for `[prop]solid` and `[prop]transparent` 
options if `[prop]custom` does not handle unknown colors. To do that, set them to empty arrays.

### Solid and transparent

`[prop]solid` and `[prop]transparent` can be:
- `[type]string`, such as `[str]#fff`
- `[type]string[]`, such as `[js]["#fff", "black"]`
- `[type]function`, which takes color string as parameter and returns `true` (if color should be solid/transparent) or `false` (if color should not be solid/transparent)

Color values and color passed to callback are always in lower case. So, if your icon uses `[str]#FFF`, check for `[str]#fff`.

### Custom

`[prop]custom` property is used when both `[prop]solid` and `[prop]transparent` return `false`.

It is a function with 2 parameters:
- Color as `[type]string`, in lower case, such as `[str]#fff`.
- Color as `[type]Color` instance.

Function can return:
- Color as `[type]string`, such as `[str]#fff` for solid shapes, `[str]#000` for transparent shapes, any other valid color for semi-transparent shapes.
- Opacity as `[type]number` between 0 and 1. Function will convert opacity returned by callback to a grayscale color.

Default values for `[prop]solid` and `[prop]transparent` properties might interfere with `[prop]custom` property,
so set them to either an empty array or a callback that always returns `false`.

## Examples

The following examples show how to use function.

### Fix black/white

This example fixes badly designed icons, which use black color for solid shapes, white color for transparent shapes.

Such icons are widespread in icon sets available in Figma community resources: designers use white background
for pages and don't notice that shapes contain white colors because outside of an icon background is also white.

```yaml
src: libraries/tools/icon/mask-white.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon/mask-white.svg
    title: 'Result:'
```

If instead of black color, icon is designed using another color, such as `[str]#1C274C`, add it to `[prop]solid` option in lower case:

```ts
convertSVGToMask(svg, {
	solid: ['#000', 'black', '#1c274c']
});
```

### Converting as is 

This example masks an icon without changing any colors. It is used to create mask sample used at the beginning of this page:

```yaml
src: libraries/tools/icon/mask-demo.ts
title: 'example.ts'
```

Demo of this icon is available above in "How masks work" section. 

### Multiple colors

Sometimes icons are designed with multiple colors. This function can be used to convert them to monotone icons,
using different colors as solid, semi-transparent or transparent colors.

This can be done using `[prop]custom` option.

Example (using gray background for original icon to make sure both black and white shapes are visible):

<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" style="background: #888">
	<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
		<path fill="#2F88FF" stroke="#000" d="M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z"/>
		<path stroke="#fff" d="M14 18L32 18"/>
		<path stroke="#fff" d="M14 26H32"/>
		<path stroke="#fff" d="M14 34H24"/>
	</g>
</svg>

The following code converts icon to monotone icon, rendering black shapes as solid, blue and white as different semi-transparent:

```yaml
src: libraries/tools/icon/mask-colors.ts
title: 'example.ts'
```

Result:

<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <defs>
        <mask id="mask-colors">
            <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                <path fill="#404040" stroke="#fff" d="M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z"/>
                <path stroke="#bfbfbf" d="M14 18L32 18"/>
                <path stroke="#bfbfbf" d="M14 26H32"/>
                <path stroke="#bfbfbf" d="M14 34H24"/>
            </g>
        </mask>
    </defs>
    <rect mask="url(#mask-colors)" width="48" height="48" fill="currentColor"/>
</svg>

### Advanced example

How to parse an entire icon set and check for errors?

This can be done using functions `[func]forEach()` or `[func]forEachSync()` of `[type]IconSet` instance. 
Both functions are suitable, but because masks are applied synchronously, there is no reason to use async functions, so `[func]forEachSync()` is a better choice.

See [very long example for importing icon set from Figma](../examples/import-figma.md) for code.

In that example, `[func]convertSVGToMask()` is used after all colors are parsed with `[func]parseColors()`.
If, when parsing colors, white or semi-transparent colors are found, `[func]convertSVGToMask()` is called to convert icon to mask.

