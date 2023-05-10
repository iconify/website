```yaml
title: Icon set themes
types:
  IconSet: './index.md'
functions:
  checkTheme: './check-theme.md'
```

# Themes

Theme properties are part of `[type]IconSet` class in [Iconify Tools](../index.md).

Themes are used to quickly place icons in categories based on part of icon name without listing every single icon.

There are two properties:

- `[prop]prefix` is for prefixes, such as `[str]baseline` in `[str]baseline-home`.
- `[prop]suffix` is for suffixes, such as `[str]twotone` in `[str]home-twotone`.

You can write to properties directly to update values.

## Structure

Both are simple objects `[type]Record<string, string>`, where:

- key is part of icon name, can be empty string
- value is title

## Examples

Examples below show suffixes. Prefixes work just like suffixes, but compare first part of icon.

Example of suffixes list:

```json
{
	"line": "Line",
	"solid": "Solid"
}
```

Prefixes and suffixes should not start or end with `[str]-`.

All icons that end with `[str]-line` belong to `[str]Line` category, all icons that end with `[str]-solid` belong to `[str]Solid` category.

If icon ends with something else, like `[str]-outline`, it will not belong to `[str]Line` category because icons are checked for `[js]'-' + suffix` (or `[js]prefix + '-'` for prefixes).

### Multiple similar items

There can be multiple matching suffixes, such as `[str]24-line` and `[str]line`.

There can also be empty suffix (and prefix), which matches icons that do not match other suffixes.

Example of suffixes:

```json
{
	"24-line": "Line 24",
	"line": "Line",
	"": "Other"
}
```

Icon `[str]home-24-line` will belong to `[str]Line 24` suffix, icon `[str]home-20-line` will belong to `[str]Line` suffix, icon `[str]home-solid` will belong to `[str]Other` suffix.

Order of suffixes and prefixes does not matter. They are sorted by length (longest first) before matching icons to make sure icons are placed in correct theme regardless of order.

## Finding icons

To find which icons belong to which theme, use `[func]checkTheme()` function.
