```yaml
title: Iconify JSON Type
types:
  IconifyIcon: './iconify-icon.md'
  IconifyAlias: './iconify-alias.md'
functions:
  getIconData: '../tools/utils/get-icon-data.md'
  parseIconSet: '../tools/utils/parse-icon-set.md'
  defaultIconProps: '../tools/utils/default-icon-props.md'
```

# IconifyJSON type

All Iconify libraries share common object structures. They are described as types in `[npm]@iconify/types` NPM package.

For description of types and short explanation of TypeScript see [types documentation](./index.md).

This article describes `[type]IconifyJSON` type.

## Usage

Icon set in `[type]IconifyJSON` is created by Iconify Tools or loaded from pre-parsed JSON file.

See [Iconify Utils documentation](../tools/utils/index.md) for parsing icon sets and [icon sets package documentation](../icons/all.md).

See [Iconify Tools documentation](../tools/tools2/index.md) for creating custom icon sets.

## Structure

Type `[type]IconifyJSON` is an object that has the following required properties.

### Required properties

- `[prop]prefix`, `[type]string`. Prefix for icons in JSON file. All icons in an icon set have the same prefix and icon set cannot include icons from other icon sets.
- `[prop]icons`, `[type]Record<string, IconifyIcon>`. List of icons. Key is icon name, value is `[type]IconifyIcon` icon data.

Example:

```json
{
	"prefix": "mdi",
	"icons": {
		"home": {
			"body": "<path d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z\" fill=\"currentColor\"/>",
			"width": 24,
			"height": 24
		}
	}
}
```

Other properties are optional: aliases, default values for all icons, metadata.

### Icon

Object `[prop]icons` contains data for icons.

Key is icon name. Value is icon data, where `[prop]body` is required and other properties are optional:

`include types/iconify-optional`

In your code you can get default values from `[var]defaultIconProps` constant from [Iconify Utils](../tools/utils/index.md).

### Alias

One optional property of `[type]IconifyJSON` type is `[prop]alias`, which has type `[type]Record<string, IconifyAlias>`. Key is alias name, value is `[type]IconifyAlias` alias data. It represents list of aliases.

What are aliases? They are variations of other icons. Aliases are used to reduce duplications.

For example, if icons `[icon]home` and `[icon]house` are identical, only one of those icons can be present in `[prop]icons` property, other icon can be listed in `[prop]aliases`, pointing to original icon:

```json
{
	"prefix": "mdi",
	"icons": {
		"house": {
			"body": "<path d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z\" fill=\"currentColor\"/>",
			"width": 24,
			"height": 24
		}
	},
	"aliases": {
		"home": {
			"parent": "house"
		}
	}
}
```

Aliases can also include transformations: horizontal and/or vertical flip, 90/180/270 degrees rotation. This allows icon variations by reusing other icon, such as creating a right arrow by using left arrow with horizontal flip:

```json
{
	"prefix": "bi",
	"icons": {
		"arrow-left": {
			"body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z\"/><path fill-rule=\"evenodd\" d=\"M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"/></g>",
			"width": 16,
			"height": 16
		}
	},
	"aliases": {
		"arrow-right": {
			"parent": "arrow-left",
			"hFlip": true
		}
	}
}
```

Alias has the same properties as icons, except for `[prop]body`. It also has additional required property `[prop]parent` that points to parent icon.

Logic for resolving properties of alias:

- For icon dimensions, value set in alias overrides value from parent icon.
- For icon transformations, if value is set in both alias and parent icon, they are merged: horizontal flip + horizontal flip = no horizontal flip, 90 degrees rotation + 180 degrees rotation = 270 degrees rotation.

```yaml
src: types/alias-json.json
title: 'IconifyJSON:'
extra:
  - src: types/alias-merged.json
    title: 'Merged "arrow-right" icon as IconifyIcon:'
```

```yaml
src: types/alias3-json.json
title: 'IconifyJSON:'
extra:
  - src: types/alias3-merged.json
    title: 'Merged "house-32" icon as IconifyIcon:'
```

### Default dimensions

If most icons in an icon set have the same dimensions, it does not make sense to list them all for each icon:

```json
{
	"prefix": "mdi",
	"icons": {
		"home": {
			"body": "<path fill=\"currentColor\" d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z\"/>",
			"width": 24,
			"height": 24
		},
		"account": {
			"body": "<path fill=\"currentColor\" d=\"M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z\"/>",
			"width": 24,
			"height": 24
		},
		"arrow-left": {
			"body": "<path fill=\"currentColor\" d=\"M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z\"/>",
			"width": 24,
			"height": 24
		}
	}
}
```

To reduce that duplication, root of `[type]IconifyJSON` object might include default values for icon dimensions:

```json
{
	"prefix": "mdi",
	"icons": {
		"home": {
			"body": "<path fill=\"currentColor\" d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z\"/>"
		},
		"account": {
			"body": "<path fill=\"currentColor\" d=\"M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z\"/>"
		},
		"arrow-left": {
			"body": "<path fill=\"currentColor\" d=\"M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z\"/>"
		}
	},
	"width": 24,
	"height": 24
}
```

These default values are used only for icons that do not have dimensions:

```yaml
src: types/json-defaults-source.json
title: 'With default values:'
extra:
  - src: types/json-defaults-merged.json
    title: 'Without default values:'
    hint: 'Both examples are identical, first example has default values, second example does not.'
```

If dimensions in icon are missing and default values in root object are missing, default value for property (see list of properties above) is used:

```yaml
src: types/json-defaults2-source.json
title: 'Icon without dimensions, which default to 16:'
extra:
  - src: types/json-defaults2-merged.json
    title: 'Icon with dimensions:'
    hint: 'Both examples are identical, first example has default property values, second example has explicit dimensions.'
```

In all examples above, `[prop]width` and `[prop]height` are used to demonstrate dimensions. But there are also `[prop]left` and `[prop]top` properties and transformations, which are missing in all examples. This is example above with all properties resolved:

```json
{
	"prefix": "bi",
	"icons": {
		"arrow-left": {
			"body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z\"/><path fill-rule=\"evenodd\" d=\"M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"/></g>",
			"width": 16,
			"height": 16,
			"left": 0,
			"top": 0,
			"hFlip": false,
			"vFlip": false,
			"rotate": false
		}
	}
}
```

## Metadata

`[type]IconifyJSON` can also contain additional data that is used for displaying icons list.

This is optional data that has no effect on rendering icons, so it was moved to a separate document.

See [IconifyJSON metadata](./iconify-json-metadata.md) for details.

## Functions

To parse icon sets, [Iconify Utils](../tools/utils/index.md) offers the following functions:

- `[func]parseIconSet()` parses an entire icon set, calling custom function for every icon.
- `[func]getIconData()` extracts data for an icon in `[type]IconifyIcon` format.

To create convert icons to icon sets, use [Iconify Tools](../tools/tools2/index.md).
