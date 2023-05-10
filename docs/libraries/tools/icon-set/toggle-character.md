```yaml
title: Assign character to icon in icon set
types:
  IconSet: './index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  chars: './chars.md'
  entries: './entries.md'
```

# toggleCharacter()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]toggleCharacter()` adds character to icon or removes it.

## Usage

Function has the following parameters:

- `[prop]iconName`, `[type]string`. Icon name.
- `[prop]char`, `[type]string`. Character as hexadecimal string, such as `[str]f001`.
- `[prop]add`, `[type]boolean`. If `true`, character will be added to icon. If `false`, character will be removed from icon.

Function returns `true` on success, `false` on failure.

## Character map

What is the purpose of characters map?

It is used to generate icon fonts. Each icon in an icon font has a character assigned to it. Even when using ligatures, ligatures point to a character, so character is needed.

## How to find all characters? {#chars}

You can get list of all assigned characters by using `[func]chars()` method.

If you want to know characters assigned to an icon, use code like this:

```ts
const item = iconSet.entries['some-icon'];
// Set<string>
console.log(item.chars);
```

It is safe to modify characters directly in `[func]entries` property.

## Example

```yaml
src: libraries/tools/icon-set/chars.ts
title: 'chars-example.ts'
```
