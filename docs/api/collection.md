```yaml
title: List of icons
types:
  IconifyJSON: '../types/iconify-json.md'
  IconifyInfo: '../types/iconify-info.md'
```

# List of icons

You can get a list of icons in an icon set sets using `[url]/collection` API query.

## Query

API query is `[url]/collection`.

Required parameter:

- `[prop]prefix`, `[type]string`. Icon set prefix.

Optional parameters:

- `[prop]info`, `[type]boolean`. If enabled, the response will include icon set information.
- `[prop]chars`, `[type]boolean`. If enabled, the response will include the character map. The character map exists only in icon sets that were imported from icon fonts.

## Response

Response is a complex object with the following required properties:

- `[prop]prefix`, `[type]string` - icon set prefix.
- `[prop]total`, `[type]number` - total number of visible icons.

Then there are many optional properties.

### Icons

Properties that are relevant for a list of icons:

- `[prop]uncategorized`, `[type]string[]` - list of icon names that aren't in any category.
- `[prop]categories`, `[type]Record<string, string[]>` - list of icons sorted by categories. Key is category title, value is a list of icon names that belong to that category.
- `[prop]hidden`, `[type]string[]` - list of hidden icons. Usually icons are marked as hidden if at some point they were removed from the icon set. To prevent user apps from breaking, icons are never deleted, they are marked as hidden instead, but still can be used in apps.
- `[prop]aliases`, `[type]Record<string, string>` - list of aliases. Key is alias, value is parent icon name.

To get a list of all icon names that should be shown, use the following logic:

- Get values from `[prop]uncategorized` property, if it exists.
- Traverse all categories from `[prop]categories` property, if it exists. One icon can exist in multiple categories, so check for duplicates, the easiest way to do that is to use `[type]Set` class in JavaScript instead of `[type]Array`.

To get all icon names, add to the result above:

- Keys of `[prop]aliases` object, if it exists. It should not be displayed in the list of icons because they are duplicate names for other icons.
- Values from `[prop]hidden` property, if it exists. It should not be displayed in the list of icons because these are hidden icons. To prevent user apps from breaking, icons are never deleted, they are marked as hidden instead, but still can be used in apps.

### Other properties

Other optional properties:

- `[prop]info`, `[type]IconifyInfo` - icon set information, set if `[prop]info` parameter was enabled.
- `[prop]title`, `[type]string` - icon set name, usually a duplicate of `[prop]info.name`.
- `[prop]chars`, `[type]Record<string, string>` - map of characters, where key is a character as hexadecimal string, value is an icon name. It exists only for icon sets that were imported from icon fonts. It can be used to allow user to search icon name by character code.
- `[prop]themes`, `[prop]prefixes` and `[prop]suffixes` - icon set themes. Property `[prop]themes` is deprecated, so it can be ignored.

See `[type]IconifyJSON` type and [metadata documentation](../types/iconify-json-metadata.md).

Only icon sets that have info can be browsed. If you want to hide an icon set, do not set the info object when importing it.

## Simple example

This is a basic icon set, without categories or any extra metadata:

```yaml
hint: /collection?prefix=mdi-light&pretty=1
src: api/collection-mdi-light.json
```

Actual API response is a lot bigger. Example was reduced.

## Categories example

Icon set in example below:

- uses categories to sort icons (`[prop]categories` can be combined with `[prop]uncategorized` from example above, so check both properties to get all icons).
- has hidden icons.
- has aliases.
- has [theme suffixes](../types/iconify-json-metadata.md).

```yaml
hint: /collection?prefix=line-md&pretty=1
src: api/collection-line-md.json
```

Actual API response is a lot bigger. Example was reduced.

### Error response

If an icon set is not found or cannot be browsed, server returns `[num]404` HTTP error.

If browsing icons is disabled, route is not handled, server returns `[num]404` HTTP error.

## Type

Type for API response:

```ts
import type { IconifyInfo, IconifyJSON } from '@iconify/types';

export interface APIv2CollectionResponse {
	// Icon set prefix
	prefix: string;

	// Number of icons (duplicate of info?.total)
	total: number;

	// Icon set title, if available (duplicate of info?.name)
	title?: string;

	// Icon set info
	info?: IconifyInfo;

	// List of icons without categories
	uncategorized?: string[];

	// List of icons, sorted by category
	categories?: Record<string, string[]>;

	// List of hidden icons
	hidden?: string[];

	// List of aliases, key = alias, value = parent icon
	aliases?: Record<string, string>;

	// Characters, key = character, value = icon name
	chars?: Record<string, string>;

	// Themes
	themes?: IconifyJSON['themes'];
	prefixes?: IconifyJSON['prefixes'];
	suffixes?: IconifyJSON['suffixes'];
}
```
