```yaml
title: Iconify JSON Metadata
types:
  IconifyIcon: './iconify-icon.md'
  IconifyAlias: './iconify-alias.md'
  IconifyJSON: './iconify-json.md'
  IconifyInfo: './iconify-info.md'
```

# IconifyJSON metadata

`[type]IconifyJSON` can also contain additional data that is used for displaying icons list:

- Last modification time (since version 2).
- Icon set info.
- Categories. Each icon can belong to multiple categories.
- Themes. They are used for variations of the same icon that have different start or end part.
- Characters map. This is used for icons imported from icon fonts.

## Last modification time {#last-modified}

Last modification time is used to check if icon set was updated. Icon components use it to invalidate old cache.

Value is a number, which needs to be higher than in previously released version of icon set.

## Information {#iconify-info}

Information is stored in `[prop]info` object.

See `[type]IconifyInfo` documentation.

## Categories {#iconify-categories}

Categories are stored in `[prop]categories` object.

In TypeScript categories are represented by type `[type]IconifyCategories` that can be imported from `[npm]@iconify/types`.

This is a simple object, where key is category name, value is array of icons names that belong to that category.

Example:

```json
{
	"categories": {
		"Accessibility": ["accessible-icon"],
		"Audio & Video": ["youtube"],
		"Communication": ["bluetooth", "bluetooth-b"],
		"Currency": ["bitcoin", "btc", "ethereum", "gg", "gg-circle"],
		"Games": [
			"playstation",
			"steam",
			"steam-square",
			"steam-symbol",
			"twitch",
			"xbox"
		]
	}
}
```

## Themes: prefixes and suffixes {#themes}

Themes are used to display variations of the same icon that have different prefix or suffix. It is similar to categories, but instead of listing every icon, data contains only prefixes or suffixes.

Themes are stored in `[prop]themes` object.

In TypeScript themes are represented by type `[type]IconifyThemes` that can be imported from `[npm]@iconify/types`.

Theme is an object, where key is unique identifier for theme, value contains theme title and either prefix or suffix. Theme cannot contain both prefix and suffix, it must have only one of properties.

Example of prefixes used in Box Icons:

```json
{
	"themes": {
		"bxl": {
			"title": "Logos",
			"prefix": "bxl-"
		},
		"bx": {
			"title": "Regular",
			"prefix": "bx-"
		},
		"bxs": {
			"title": "Solid",
			"prefix": "bxs-"
		}
	}
}
```

In an example above, all icons that start with `[str]bxl-` belong to `[str]Logos` theme, all icons that start with `[str]bx-` belong to `[str]Regular` theme and all icons that start with `[str]bxs-` belong to `[str]Solid` theme.

Prefix must end with `[str]-`.

Example of suffixes used in Ant Design Icons:

```json
{
	"themes": {
		"filled": {
			"title": "Filled",
			"suffix": "-filled"
		},
		"outlined": {
			"title": "Outlined",
			"suffix": "-outlined"
		},
		"twotone": {
			"title": "TwoTone",
			"suffix": "-twotone"
		}
	}
}
```

In an example above, all icons that end with `[str]-filled` belong to `[str]Filled` theme, all icons that end with `[str]-outlined` belong to `[str]Outlined` theme and all icons that end with `[str]-twotone` belong to `[str]TwoTone` theme.

Suffix must start with `[str]-`.

## Characters map {#chars}

Characters map is stored in `[prop]chars` object.

In TypeScript characters are represented by type `[type]IconifyChars` that can be imported from `[npm]@iconify/types`.

This is a simple object, where key is character code in hexadecimal form, value is name of icon.

Example:

```json
{
	"chars": {
		"e007": "firefox-browser",
		"e013": "ideal",
		"e01a": "microblog",
		"e01e": "pied-piper-square",
		"e049": "unity",
		"e052": "dailymotion",
		"e055": "instagram-square",
		"e056": "mixer",
		"e057": "shopify"
	}
}
```
