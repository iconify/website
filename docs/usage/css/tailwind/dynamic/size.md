```yaml
title: Changing icon size and color in Iconify for Tailwind CSS
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addDynamicIconSelectors: './index.md'
```

# Changing icon size in Iconify for Tailwind CSS

This documentation explains how to change icon size and color for `[func]addDynamicIconSelectors` plugin.

## Icon size

By default, icons are rendered with `[num]1em` height.

Width is set automatically, using icon's width/height ratio.
Though the vast majority of icons are square, so usually width is the same as height.

To change icon size, you can change font size:

```html
<span class="icon-[mdi-light--home] text-2xl"></span>
```

Additionally, you can:
- Change default size by using `[prop]scale` option.
- Remove size by setting `[prop]scale` to `[num]0` and use width and height to resize icon.

### Scaling icon

Option `[prop]scale` changes default icon size from `[num]1em`.

The following configuration

```js
addDynamicIconSelectors({
    scale: 1.2,
})
```

changes default height to `[num]1.2em`.

You can use font size to further resize icons, like in the example above, but icons will be 1.2 times bigger.

### Custom size {#custom}

To use width and height to resize icons, you need to set `[prop]scale` to `[num]0`:

```js
addDynamicIconSelectors({
    scale: 0,
})
```

If you do this, icons will not have width and height, so you must set size to each icon:

```html
<span class="icon-[mdi-light--home] h-12 w-12"></span>
```

### Multiple sizes

What if you want to use `[num]1em` icons, icons without size and icons with fixed size in pixels in the same project?

You can use multiple instances of plugin with different settings and different selectors:

```js
plugins: [
    // Default options, 1em height
    addDynamicIconSelectors(),
    // No size
    addDynamicIconSelectors({
        // Change prefix
        prefix: 'icon-nosize',
        // Disable width and height 
        scale: 0,
    })
]
```

```html
<p>
  Icon with 1em size: 
  <span class="icon-[mdi-light--home]"></span>
</p>
<p>
  Icon without size (using custom width/height): 
  <span class="icon-nosize-[mdi-light--home] h-12 w-12"></span>
</p>
```

Note that `[prop]prefix` option in plugin config does not have `[str]-` at the end, but it does in HTML.
This is due to Tailwind CSS requirements for dynamic selectors.
Make sure to not forget `[str]-` in HTML.
