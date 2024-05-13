```yaml
title: Customising icons in Iconify for Tailwind CSS
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addIconSelectors: './index.md'
```

# Customising icons in Iconify for Tailwind CSS

This documentation covers `[prop]customise` option for `[func]addIconSelectors` plugin.

## Customise callback

Option `[prop]customise` allows you to change content of icons.

What is it for?
- You can change `[prop]stroke-width` in icons that use stroke.
- You can change colors in icons that use hardcoded palette, such as emojis.
- You can change animation duration in animated icons.
- You can change opacity of semi-transparent elements.
- You can add extra shapes to icons.

...and so on. You have full control over SVG content.

## Usage

`[prop]customise` option is a function, which has 3 parameters:
- `[prop]content`, `[type]string`. Icon content.
- `[prop]name`, `[type]string`. Icon name.
- `[prop]prefix`, `[type]string`. Icon set prefix.

Function should return modified content. 
If there is nothing to modify, it should return original `[prop]content` value.

## Example

Example of using `[prop]customise` option to change `[prop]stroke-width` in [Tabler icons](https://icon-sets.iconify.design/tabler/):

```js
addIconSelectors({
    prefixes: ['tabler'],
    customise: (content, name, prefix) => {
        switch (prefix) {
            case 'tabler':
                return content.replaceAll('stroke-width="2"', 'stroke-width="1.5"');
        }
        return content;
    }
})
```

## Conflicts

If you also have a `[prop]customise` option used in entry in [`[prop]prefixes` option](./prefixes.md), 
that callback has a priority and main `[prop]customise` will not be used for that icon set.
