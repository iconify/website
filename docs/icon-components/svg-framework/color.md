```yaml
title: Changing Icon Color in Iconify SVG Framework
```

# Icon color

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

You can only change color of monotone icons. Some icons, such as emoji, have a hardcoded palette that cannot be changed.

To change color of a monotone icon simply change text color.

```yaml
src: icon-components/iconify/index-color.html
title: 'HTML:'
css: iconify/index-color.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify-index-color
```

Color only works for icons that do not have a palette. Color in icons that do have a palette, like `[icon]noto:paintbrush` in an example above, cannot be changed.

## Demo breakdown

In demo above some icons have `[attr]class="iconify-inline"`, but in stylesheet they are targetted by `[prop].iconify`. This requires a small explanation.

When icons are rendered by Iconify SVG Framework, all icons get class `[str]iconify`, even ones that did not have it. That means if placeholder had `[attr]class="iconify-inline"`, `[tag]svg` will have `[attr]class="iconify iconify-inline"` (and few other extra classes). All custom classes will be passed from placeholder to `[tag]svg` as well.

Why are icons using `[attr]class="iconify-inline"`? This is covered by [inline mode tutorial](./inline.md).

## Various ways to set color

You can change color the same way as you would for text.

Example above shows changing color with stylesheet.

You can also change color with inline style:

```html
<span class="iconify" data-icon="ion:umbrella-sharp" style="color: red"></span>
```

## Target specific icon

To target a specific icon, you can:

### Target icon by name

```css
.iconify[data-icon='mdi:home'] {
	color: red;
}
```

This will change color for all icons that have `[attr]data-icon="mdi:home"` to red.

### Target icon by prefix

```css
.iconify--mdi {
	color: red;
}
```

When SVG Framework renders `[tag]svg`, it will add current provider and prefix to list of classes. See demo below.

### Custom class

You can add custom class to placeholder:

```html
<span class="iconify red-icon" data-icon="mdi:home"></span>
```

Then you can target icon by that class name:

```css
.red-icon {
	color: red;
}
```

### Example

```yaml
src: icon-components/iconify/prefix-color.html
title: 'HTML:'
extra:
  - src: icon-components/iconify/prefix-color-svg.html
    title: 'Rendered SVG:'
  - src: icon-components/iconify/prefix-color.css
    title: 'CSS:'
```

## RGBA and HSLA colors {#opacity}

`include icon-components/color-rgba`

## fill and stroke

`include icon-components/color-fill`
