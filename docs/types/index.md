```yaml
title: Iconify Types
types:
  IconifyIcon: './iconify-icon.md'
  IconifyAlias: './iconify-alias.md'
  IconifyJSON: './iconify-json.md'
  IconifyInfo: './iconify-info.md'
```

# Iconify types

All Iconify libraries share common object structures. They are described as types in `[npm]@iconify/types` NPM package.

## TypeScript

All types are described with TypeScript.

If you are not familiar with TypeScript, but are familiar with JavaScript, it should not be hard to understand this documentation because it is mostly just basic types.

Few basic TypeScript concepts you need to know to understand documentation:

### Record

Type `[type]Record<string, number>` is an object, where key is `[type]string`, value is `[type]number`.

For PHP developers it is the same as associative array.

### unknown

Type `[type]unknown` means value can be any type.

### extends

```yaml
src: types/interface.ts
copy: false
```

This means one type extends another type. In the example above, type `[type]Foo` has all properties of types `[type]Bar` and `[type]Baz`.

## Main types

There are two main types that are used in Iconify ecosystem:

- `[type]IconifyIcon` is used for data for one icon.
- `[type]IconifyJSON` is used for an entire icon set. It stores icon data, aliases and various metadata.

## Additional types

These types are used in `[type]IconifyJSON` type:

- `[type]IconifyAlias` is used for icon aliases.
- `[type]IconifyInfo` is used for icon set information.
