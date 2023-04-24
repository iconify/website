```yaml
title: Export characters map from icon set
types:
  IconSet: './index.md'
  IconifyJSON: '../../../types/iconify-json.md'
functions:
  export: './export.md'
  toggleCharacter: './toggle-character.md'
```

# chars()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]chars()` exports characters map. Function is used by `[func]export()` function to add characters map to `[type]IconifyJSON` data.

## Usage

Function has one parameter:

- `[prop]names`, `[type]string[]`. Optional. List of icons to check.

Function returns a simple `[type]Record<string, string>` object. Key is character, in hexadecimal form (such as `[str]u1f3cc`), value is name of icon.

## Character map

What is the purpose of characters map?

It is used to generate icon fonts. Each icon in an icon font has a character assigned to it. Even when using ligatures, ligatures point to a character, so character is needed.

### How to assign a character to icon? {#assign}

You can assign a character to icon by using `[func]toggleCharacter()` method.

## Example

```yaml
src: tools/tools2/icon-set/chars.ts
title: 'chars-example.ts'
extra:
  - src: tools/tools2/icon-set/chars1.json
    title: 'chars() result:'
  - src: tools/tools2/icon-set/chars2.json
    title: 'export() result:'
```
