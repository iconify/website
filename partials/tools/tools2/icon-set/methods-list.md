```yaml
title: IconSet Functions
types:
  IconifyIcon: '../../../types/iconify-icon.md'
  IconifyJSON: '../../../types/iconify-json.md'
  IconifyInfo: '../../../types/iconify-info.md'
  FullIconifyIcon: '../../utils/full-iconify-icon.md'
  Color: '../../utils/color.md'
  FullIconCustomisations: '../../utils/icon-customisations.md'
  IconCustomisations: '../../utils/icon-customisations.md'
  SVG: '../svg/index.md'
  ResolvedIconifyIcon: '../iconify-icon.md'
functions:
  list: './list.md'
  forEach: './for-each.md'
  exists: './exists.md'
  count: './count.md'
  remove: './remove.md'
  rename: './rename.md'
  setItem: './set-item.md'
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
  entries: './entries.md'
  prefix: './prefix.md'
  resolve: './resolve.md'
  load: './load.md'
  export: './export.md'
  toSVG: './to-svg.md'
  fromSVG: './from-svg.md'
  toString: './to-string.md'
  info: './info.md'
  chars: './chars.md'
  toggleCharacter: './toggle-character.md'
  listCategory: './list-category.md'
  toggleCategory: './toggle-category.md'
  categories: './categories.md'
  checkTheme: './check-theme.md'
  suffixes: './themes.md'
  prefixes: './themes.md'
  validateIconSet: '../../utils/validate-icon-set.md'
  mergeIconSets: './merge.md'
  getTree: './get-tree.md'
```

Working with icons:

- `[func]list()` lists all icons.
- `[func]forEach()` runs callback for all icons. Supports asynchronous callbacks.
- `[func]exists(name)` checks if icon exists.
- `[func]count()` counts number of icons in icon set.
- `[func]remove(name)` removes icon.
- `[func]rename(oldName, newName)` renames icon.
- `[func]setItem(name, item)` adds/updates item in `[func]entries` property.
- `[func]setIcon(name, icon)` adds/updates icon, using `[type]IconifyIcon` data.
- `[func]setVariation(name, parent, props)` creates a variation (alias with customisations) for icon.
- `[func]setAlias(name, parent)` creates an alias for icon.
- `[func]getTree()` returns list of parent icons for each icon, `null` if icon is invalid.
- `[func]entries` property contains data for all icons and aliases. You can access it directly, but most changes can be done using functions listed above.

Functions for importing/exporting icon set:

- `[func]prefix` property contains icon set prefix, which is used when exporting icon set. To change prefix, write to property.
- `[func]resolve(name)` returns `[type]ResolvedIconifyIcon` object for icon, `null` on failure.
- `[func]load(data)` loads data from `[type]IconifyJSON` type. This is identical to creating new `[type]IconSet` instance, but it changes current instance instead of making new one.
- `[func]export()` exports icon set as `[type]IconifyJSON`.
- `[func]toSVG(name)` returns `[type]SVG` instance for icon, `null` on failure.
- `[func]fromSVG(name, svg)` adds/updates icon from `[type]SVG` instance.
- `[func]toString(name)` exports icon as SVG string, returns `null` on failure.

Functions for working with metadata:

- `[func]info` property contains icon set info in `[type]IconifyInfo` type (or `[type]null` if info is not available). To update info, write to property.
- `[func]chars()` returns characters map, where key is character (as hexadecimal code) and value is icon name.
- `[func]toggleCharacter(name, char, add)` adds or removes character for icon.
- `[func]listCategory(category)` lists all icons in category, excluding aliases and hidden icons.
- `[func]toggleCategory(name, category, add)` adds or removes category for icon.
- `[func]categories` property contains data for categories. You can access it directly if needed.
- `[func]checkTheme()` checks prefixes or suffixes, returning list of icons that belong to each theme and list of icons that do not belong to any theme.
- `[func]suffixes` and `[func]prefixes` properties contain prefixes and suffixes. Access properties directly to update themes.

Other:

- `[func]mergeIconSets()` merges two `[type]IconSet` instances, returning new instance. This function is intended to be used to update icon set.
