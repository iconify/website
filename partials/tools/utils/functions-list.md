```yaml
title: Iconify Utils
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyJSON: '../../types/iconify-json.md'
  IconifyInfo: '../../types/iconify-info.md'
  FullIconifyIcon: './full-iconify-icon.md'
  IconifyIconName: './icon-name.md'
  Color: './color.md'
  FullIconCustomisations: './icon-customisations.md'
  IconCustomisations: './icon-customisations.md'
functions:
  validateIconSet: './validate-icon-set.md'
  quicklyValidateIconSet: './quickly-validate-icon-set.md'
  getIcons: './get-icons.md'
  getIconData: './get-icon-data.md'
  minifyIconSet: './minify-icon-set.md'
  expandIconSet: './expand-icon-set.md'
  convertIconSetInfo: './convert-info.md'
  parseIconSet: './parse-icon-set.md'
  parseIconSetAsync: './parse-icon-set.md'
  mergeIconData: './merge-icon-data.md'
  defaultIconProps: './default-icon-props.md'
  mergeCustomisations: './merge-customisations.md'
  compareObjects: './objects.md#compare'
  unmergeObjects: './objects.md#unmerge'
  commonObjectProps: './objects.md#common'
  toBoolean: './to-boolean.md'
  rotateFromString: './rotate-from-string.md'
  flipFromString: './flip-from-string.md'
  defaultIconCustomisations: './default-icon-customisations.md'
  iconToSVG: './icon-to-svg.md'
  iconToHTML: './icon-to-html.md'
  calculateSize: './calculate-size.md'
  replaceIDs: './replace-ids.md'
  matchIconName: './match-name.md'
  stringToIcon: './string-to-icon.md'
  validateIconName: './validate-icon.md'
  stringToColor: './string-to-color.md'
  compareColors: './compare-colors.md'
  colorToString: './color-to-string.md'
  getIconCSS: './get-icon-css.md'
  getIconsCSS: './get-icons-css.md'
```

Icon sets are stored in `[type]IconifyJSON` format. Functions for working with icon sets:

- `[func]validateIconSet(data)` validates icon set. If you are not sure if source is a valid icon set, run this function to validate icon set. It will convert data to correct `[type]IconifyJSON` and will attempt to fix errors.
- `[func]quicklyValidateIconSet(data)` same as above, but does basic validation. Use it if you do not care about metadata being invalid, if you do not want to attempt to fix errors in icon set, or if you want to reduce bundle size.
- `[func]getIcons(data, icons)` extracts few icons from icon set. Can be used to reduce icon set to few icons that are used by your project.
- `[func]getIconData(data, icon)` extracts data for one icon from icon set.
- `[func]minifyIconSet(data)` minifies icon set, removing redundant data. Used to reduce file size.
- `[func]expandIconSet(data)` is the opposite of function above.
- `[func]convertIconSetInfo(data)` converts legacy icon set format to correct `[type]IconifyInfo` type.
- `[func]parseIconSet(data, callback)` parses icon set, calling `[attr]callback` function for every icon. Can be used to extract all icons from icon set. Validate icon set before parsing it.
- `[func]parseIconSetAsync(data, callback)` is async version of `[func]parseIconSet()`, where both function and callback are asynchronous.

Functions for working with `[type]IconifyIcon` format that represents one icon:

- `[func]mergeIconData(icon, alias)` merges data for icon and alias. Used by functions that extract icon data from icon set.
- `[func]defaultIconProps` contains default values for optional properties to `[type]IconifyIcon` object.

When rendering icon, customisations can be applied to it. For example, changing dimensions, rotating or flipping icon. They are represented by `[type]IconCustomisations` type. Functions for working with customisations:

- `[func]mergeCustomisations(defaultIconCustomisations, custom)` function converts object to `[type]FullIconCustomisations` type. It also validates types, so it can be used to clean up user input.
- `[func]defaultIconCustomisations` exported from `[file]lib/customisations/defaults` contains default customisations.
- `[func]toBoolean(name, value, defaultValue)` converts various strings to boolean. Used by icon components to clean up parameters that can be boolean or string.
- `[func]rotateFromString(value)` converts various methods of rotating icon (such as `[str]90deg` or `[str]25%`) to a number.
- `[func]flipFromString(customisations, value)` applies flip string (such as `[attr]flip="horizontal,vertical"`) to customisations.

Functions for rendering icon:

- `[func]iconToSVG(icon, customisations)` generates data needed to render SVG. It does not generate full SVG, only content and list of attributes to add to SVG element, making it easy to use in custom components.
- `[func]iconToHTML(body, attributes)` converts result of `[func]iconToSVG()` to SVG string.
- `[func]calculateSize(size, ratio)` calculates icon dimensions. It is used when building icons using `[func]iconToSVG()`.
- `[func]replaceIDs(content)` replaces IDs in SVG with unique IDs. IDs used in elements like masks and they must be unique, so multiple icons displayed on the same page using same IDs will result in chaos. This function prevents that chaos.
- `[func]getIconCSS(icon)` generates stylesheet for using icon as background image or mask image.
- `[func]getIconsCSS(iconSet, names)` generates stylesheet for using multiple icons from same icon set as background images or mask images.

Functions for working with icon names:

- `[func]matchIconName` constant is a regular expression to test parts of icon name.
- `[func]stringToIcon(value)` converts icon name, such as `[str]mdi-light:home` into an `[type]IconifyIconName` object and optionally validates it.
- `[func]validateIconName(icon)` validates `[type]IconifyIconName` object.

Functions for working with colors:

- `[func]stringToColor(value)` converts string to `[type]Color` object, returns `null` on error. This can be used to validate user input. It supports color keywords, hexadecimal colors, RGB, HSL, LAB and LCH colors. Variables are not supported because this is meant for parsing SVGs, which should not reference any external variables.
- `[func]compareColors(color1, color2)` compares colors. It also converts RGB to HSL if needed.
- `[func]colorToString(color)` converts `[type]Color` object to string. Combined with `[func]stringToColor()`, this can be used to validate and clean up user input.
