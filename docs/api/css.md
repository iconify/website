```yaml
title: Generating CSS for icons
functions:
  getIconsCSS: '../tools/utils/get-icons-css.md'
```

# CSS for icons

Iconify API can dynamically generate CSS for icons, where icons are used as background or mask image.

This allows rendering icons with a simple `[tag]span` tag without any components.

## Query

API URI that generates CSS is `[url]/{prefix}.css?icons={icons}`, where:

- `[str]{prefix}` is icon set prefix. To generate CSS for icons from multiple icon sets, send separate queries for each icon set.
- `[str]{icons}` is list of icon names, separated by comma.

Examples:

```yaml
hint: /openmoji.css?icons=axe,balance-scale
src: api/openmoji.css
```

```yaml
hint: /mdi.css?icons=account-box,account-cash,account,home
src: api/mdi.css
```

Using icons in HTML is easy: use a placeholder element with 2 class names: class name for an icon set and class name for icon:

```html
<span class="icon--openmoji icon--openmoji--axe"></span>
```

```html
<span class="icon--mdi icon--mdi--account"></span>
```

Why 2 classes? This allows splitting common style in separate rule, reducing duplication and making it easier to target all icons from an icon set.

If you want to reference icons with 1 simple class, you can use `[prop]selector` and `[prop]common` options. See examples below.

### Options

Optional parameters:

- `[prop]download`. If set to `[str]true` or `[str]1`, sends CSS as an attachment, forcing browser to download file.
- `[prop]iconSelector` or `[prop]selector`. Selector for icon, defaults to `[str].icon--{prefix}--{name}`. Variable `[str]{prefix}` is replaced with icon set prefix, `[str]{name}` with icon name.
- `[prop]commonSelector` or `[prop]common`. Common selector for icons, defaults to `[str].icon--{prefix}`. Set it to empty to disable common code (see one of examples below). Variable `[str]{prefix}` is replaced with icon set prefix.
- `[prop]overrideSelector` or `[prop]override`. Selector that mixes `[prop]iconSelector` and `[prop]commonSelector` to generate icon specific style that overrides common style. See below. Default value is `[str].icon--{prefix}.icon--{prefix}--{name}`.
- `[prop]pseudoSelector` or `[prop]pseudo`, `[type]boolean`. Set it to `true` if selector for icon is a pseudo-selector, such as `[str].icon--{prefix}--{name}::after`.
- `[prop]varName` or `[prop]var`. Name for variable to use for icon, defaults to `[str]svg` for monotone icons, `null` for icons with palette. Set to `null` to disable.
- `[prop]forceSquare` or `[prop]square`, `[type]boolean`. Forces icon to have width of `[num]1em`.
- `[prop]color`. Sets color for monotone icons. Also renders icons as background images.
- `[prop]mode`: `[str]mask` or `[str]background`. Forces icon to render as mask image or background image. If not set, mode will be detected from icon content: icons that contain `[prop]currentColor` will be rendered as mask image, other icons as background image.
- `[prop]format`. Stylesheet formatting option. Matches options used in Sass. Supported values: `[str]expanded`, `[str]compact`, `[str]compressed`.

Other optional parameters are the same as in `[func]getIconsCSS()` function of [Iconify Utils](../tools/utils/index.md).

### Color and mode

There are two types of icons:

- Monotone icons, which use `[prop]currentColor` for color.
- Icons with hardcoded palette, where colors cannot be changed.

You can use both types in CSS.

Icons with hardcoded palette are rendered as background images:

`include common/icon-types-palette`

Monotone icons are rendered as mask images with background color set to `[prop]currentColor`:

`include common/icon-types-monotone`

Using `[prop]currentColor` as background color makes it easy to change icon color by changing text color:

```html
<span class="icon--bi icon--bi--bell-fill" style="color: green"></span>
```

You can force background or mask mode by adding `[prop]mode` parameter: `[url]&mode=background` or `[url]&mode=mask`

You can also use `[prop]color` parameter to convert monotone icons to icons with palette: `[url]&color=green`.

#### CSS variables

```yaml
include: tools/utils/css-color
```

```html
<span class="icon--mdi icon--mdi--home" style="color: var(--icon-color)"></span>
```

### More examples

You can customise generated stylesheet using various optional parameters.

Getting CSS for one icon with custom selector by adding `[prop]selector` parameter:

```yaml
hint: /openmoji.css?icons=axe&selector=.axe-icon
src: api/openmoji-axe.css
```

CSS for one icon with a pseudo selector, using `[prop]selector` and `[prop]selector` parameters:

```yaml
hint: /material-symbols.css?icons=check-box-outline-rounded&selector=.checkbox-checked::after&pseudo=1
src: api/checkbox.css
```

Same as above, but sets icon color to green:

```yaml
hint: /material-symbols.css?icons=check-box-outline-rounded&selector=.checkbox-checked::after&pseudo=1&color=green
src: api/checkbox-color.css
```

CSS for mutliple icons with pseudo selectors requires multiple parameters. It requires using at least `[prop]icon` and `[prop]pseudo` parameters, optionally with `[prop]common` and `[prop]override` parameters:

```yaml
hint: /line-md.css?icons=account-add,account-delete&selector=.icon--{prefix}--{name}::after&pseudo=1
src: api/line-md.css
```

```yaml
hint: /line-md.css?icons=account-add,account-delete&selector=.icon--{prefix}--{name}::after&common=.icon--{prefix}::after&override=.icon--{prefix}.icon--{prefix}--{name}::after&pseudo=1
src: api/line-md2.css
```

Want to support old browsers? Add `[url]&var=null`:

```yaml
hint: /openmoji.css?icons=axe,balance-scale&var=null
src: api/openmoji-novar.css
```

... which might result in duplicate content for monotone icons:

```yaml
hint: /line-md.css?icons=account-add,account-delete&var=null
src: api/line-md-novar.css
```

See `[func]getIconsCSS()` function of [Iconify Utils](../tools/utils/index.md) for more examples.
