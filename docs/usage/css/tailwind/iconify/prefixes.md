```yaml
title: Selecting icon sets in Iconify for Tailwind CSS
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addIconSelectors: './index.md'
```

# Selecting icon sets in Iconify for Tailwind CSS

This documentation covers `[prop]prefixes` option for `[func]addIconSelectors` plugin.

## Prefixes list

`[func]addIconSelectors()` plugin requires setting a list of icon sets you want to use,
set as either the only parameter to plugin or as `[prop]prefixes` property in options.

Why is it needed?
- Iconify offers a massive number of icons. Tailwind CSS plugin system requires creating all selectors, which means parsing all icons. By selecting icon sets you want to use, plugin only parses those icon sets, reducing build time.
- It can be used for custom icon sets.

Value of prefixes list is an array, each entry can be:
- A string, containing icon set prefix.
- `[type]IconSetOptions` object.

If you use a string with icon set prefix, all icons in icon set will be parsed without any changes.

`[type]IconSetOptions` object gives you more control over icons, allowing you to filter icons, customise icons and load custom icon sets.

## IconSetOptions

Object `[type]IconSetOptions` has the following properties:
- `[prop]prefix`, `[type]string`. Icon set prefix.
- `[prop]source`, `[type]string | IconifyJSON`. Icon set source.
- `[prop]icons`, `[type]string[] | function`. List of icons to load or a callback to filter icons.
- `[prop]customise`, `[type]function`. Callback to customise icons.

Either `[prop]prefix` or `[prop]source` must be set.
If both are set, the icon set is loaded from `[prop]source`, but prefix is set to value of `[prop]prefix`.

### Source

Property `[prop]source` of `[type]IconSetOptions` can be:
- Location of icon set to load in `[type]IconifyJSON` format.
- Icon set in `[type]IconifyJSON` format.

### Icons

Property `[prop]icons` of `[type]IconSetOptions` can be used to filter icons in the loaded icon set.

By filtering unused icons, you can improve parsing time, thus making the build process faster.

### Customise

Property `[prop]customise` of `[type]IconSetOptions` can be used to customise icons.
For example, to change `[prop]stroke-width`, change certain color in icons with color,
change animation duration in animated icons and so on.

Callback has two parameters:
- `[prop]content`, `[type]string`. SVG content.
- `[prop]name`, `[type]string`. Icon name.

Callback should return new content. If icon is not modified, it should return value passed in `[prop]content` property.

## Examples

Examples of using `[prop]prefixes` option to load custom icon sets and customise icons:

```js
addIconSelectors({
    prefixes: [
        {
            // Change stroke width in Tabler icons
            prefix: 'tabler',
            customise: (content) =>
                content.replaceAll('stroke-width="2"', 'stroke-width="1.5"'),
        },
        {
            // Change color in face emojis from Twitter, also rename icon set
            
            // Change icon set prefix by setting 'prefix' property
            prefix: 'twemoji-red',
            
            // Resolve location of icon set from '@iconify-json/twemoji' package 
            // Also below is the same code, using '@iconify/json' package
            source: require.resolve('@iconify-json/twemoji/icons.json'),
            // source: require.resolve('@iconify/json/json/twemoji.json'),
            
            // Filter only icons that contain 'face' to improve plugin performance
            icons: (name) => name.includes('face'),
            
            // Change color
            customise: (content, name) => content.replaceAll('#ffcc4d', '#ff9667'),
        },
        {
            // Load custom icon set. It can be pre-generated using Iconify Tools
            prefix: 'custom',
            source: 'data/custom.json',
            
            // Example of using Iconify Tools icon set as source. Assumes that customIconSet is an IconSet class instance. 
            // source: customIconSet.export(),
        },
    ],
})
```
