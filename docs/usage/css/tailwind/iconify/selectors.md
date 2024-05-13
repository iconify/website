```yaml
title: Selectors in Iconify for Tailwind CSS
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addIconSelectors: './index.md'
```

# Selectors in Iconify for Tailwind CSS

This documentation covers options that change selectors for `[func]addIconSelectors` plugin.

## Options

There are several selectors set by plugin:
- Selector for mask image rules, default value is `[str].iconify`.
- Selector for background image rules, default value is `[str].iconify-color`.
- Selectors for each icon, default value is `[str].{prefix}--{name}`.

To render an icon, you need to use icon selector (which provides icon data) and
either background or mask selector (which renders that icon).

You can customise all of them.

Why would you want to do that?
- To use multiple instances of plugin with different settings.
- To change class names because they conflict with something else.
- To keep using old class names after migrating from a different plugin or platform.

## Mask and background image

Mask and background image selectors must be used in each icon together with icon name selector.
These selectors contain all rules needed to render icon as mask or background image.

To customise mask or background image selectors, use the following options:
- `[prop]maskSelector`, `[type]string` - mask image selector, default value is `[str].iconify`.
- `[prop]backgroundSelector`, `[type]string` - background image selector, default value is `[str].iconify-color`.

Set value to an empty string to disable it.

Why would you want to disable it?
It can be useful if classes are already set somewhere else, such as another instance of plugin,
or you are not using background or mask mode.

### Extra rules

You can also add CSS rules for background and mask selectors by using `[prop]extraBackgroundRules` and `[prop]extraMaskRules` options.

That can be used to change dimensions, display mode or add vertical alignment.

## Icon selector

Icon selector gives you control over icon name. To change it, change option `[prop]iconSelector`.

Value must include:
- `[str]{prefix}` that is replaced with icon set prefix for each icon.
- `[str]{name}` that is replaced with icon name.

Default value is `[str].{prefix}--{name}`.

## Examples

The following configuration changes syntax to syntax used by UnoCSS:

However, be aware that you still must have a background or a mask selector for each icon, which UnoCSS does not use.

```js
addIconSelectors({
    iconSelector: '.i-{prefix}-{name}',
    // UnoCSS uses scale 1.2 by default
    scale: 1.2
})
```

```html
<span class="iconify i-mdi-light-home"></span>
```

The following configuration will create several instances of plugin with different options:

```js
plugins: [
    addIconSelectors(['mdi-light']),
    addIconSelectors({
        // Change selectors to avoid conflicts
        maskSelector: '.icon',
        backgroundSelector: '.icon-color',
        // Disable width and height 
        scale: 0,
        // Not using 'prefixes' because icons are already set in previous instance
        // Yes, you can mix selectors from different instances of plugin: background or mask from one, 
        // icon from another, but only as long as `varName` option is the same (or not customised).
        // Since icons used in example below are identical, no need to re-parse them.
    }),
    addIconSelectors({
        // Align icon below baseline and set fixed size
        maskSelector: '.material-icon',
        extraMaskRules: {
            'vertical-align': '-0.125em',
            'width': '24px',
            'height': '24px',
        },
        // Not using background selector for this demo - demo uses monotone icons only
        backgroundSelector: '',
    })
]
```

```html
<p>
  Icon with 1em size: 
  <span class="iconify mdi-light--home"></span>
</p>
<p>
  Icon without size (using custom width/height): 
  <span class="icon mdi-light--home h-12 w-12"></span>
</p>
<p>
  24px icon aligned to bottom: 
  <span class="material-icon mdi-light--home"></span>
</p>
```
