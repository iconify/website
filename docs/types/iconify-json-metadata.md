```yaml
title: Iconify JSON Metadata
types:
  IconifyIcon: './iconify-icon.md'
  IconifyAlias: './iconify-alias.md'
  IconifyJSON: './iconify-json.md'
  IconifyInfo: './iconify-info.md'
```

# IconifyJSON metadata

`[type]IconifyJSON` can also contain additional data that is used for displaying a list of icons:

- Last modification time (since version 2).
- Icon set info.
- Categories. Each icon can belong to multiple categories.
- Themes. They are used for variations of the same icon that have different start or end parts.
- Characters map. This is used for icons imported from icon fonts.

## Last modification time {#last-modified}

Last modification time is used to check if an icon set was updated. Icon components use it to invalidate old cache.

Value is a number, which needs to be higher than in a previously released version of an icon set.

## Information {#iconify-info}

Information is stored in `[prop]info` object.

See `[type]IconifyInfo` documentation.

## Categories {#iconify-categories}

Categories are stored in `[prop]categories` object.

In TypeScript categories are represented by type `[type]IconifyCategories` that can be imported from `[npm]@iconify/types`.

This is a simple object, where key is category name, value is an array of icon names that belong to that category.

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

Themes are stored in `[prop]prefixes` and `[prop]suffixes` objects.

In TypeScript both `[prop]prefixes` and `[prop]suffixes` are simple `[type]Record<string, string>` objects, where:
- key is prefix or suffix in icon.
- value is the name of theme.

Example of prefixes used in [Google Material Icons](https://icon-sets.iconify.design/ic/):

```json
{
    "prefixes": {
        "baseline": "Baseline",
        "outline": "Outline",
        "round": "Round",
        "sharp": "Sharp",
        "twotone": "Two-Tone"
    }
}
```

In an example above, all icons that start with `[icon]baseline-` belong to `[str]Baseline` theme and so on.

When checking if icon belongs to a prefix, add `[str]-` to prefix.
For example, `[str]baseline-home` belongs to `[str]Baseline` theme in example above,
`[str]baselinehome` does not, because `[str]-` should separate prefix and icon name.

Example of suffixes used in [Ant Design Icons](https://icon-sets.iconify.design/ant-design/):

```json
{
    "suffixes": {
        "filled": "Filled",
        "outlined": "Outlined",
        "twotone": "TwoTone"
    }
}
```

In an example above, all icons that end with `[str]-filled` belong to `[str]Filled` theme,
all icons that end with `[str]-outlined` belong to `[str]Outlined` theme and all icons that
end with `[str]-twotone` belong to `[str]TwoTone` theme.

### Default theme

Both prefixes and suffixes can have default entry, where the key is an empty string.
Icons that do not fit other themes should be put in that theme.

Example:

```json
{
    "suffixes": {
        "": "Filled",
        "outline": "Outline",
        "negative": "Negative"
    }
}
```

Icons that end with `[str]-outline` belong to `[str]Outline` theme, 
icons that end with `[str]-negative` belong to `[str]Negative` theme,
all other icons belong to `[str]Filled` theme.

### Legacy themes

In older versions of metadata, themes were stored in `[prop]themes` property.
This has been deprecated and should be ignored.

## Characters map {#chars}

Map of characters is stored in `[prop]chars` object.

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
