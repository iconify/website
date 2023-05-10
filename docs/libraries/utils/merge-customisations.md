```yaml
title: mergeCustomisations() in Iconify Utils
types:
  FullIconCustomisations: './icon-customisations.md'
  IconifyIconCustomisations: './icon-customisations.md'
  IconifyIconName: './icon-name.md'
functions:
  validateIconName: './validate-icon.md'
```

# mergeCustomisations()

This function is part of [Iconify Utils package](./index.md).

Function `[func]mergeCustomisations()` merges default customisations, presented as `[type]FullIconCustomisations` object and partial customisations. It also validates types, so it can be used to clean up user input.

## Usage

Function has the following parameters:

- `[prop]defaults`, `[type]FullIconCustomisations`. Full customisations.
- `[prop]item`, `[type]IconifyIconCustomisations`. Partial customisations that need to be merged with `[prop]defaults`.

Function returns merged customisations with same type as passed in first parameter (which makes it possible to use function with extended types).

## Example

```yaml
src: libraries/utils/merge-customisations2.ts
title: 'example.ts'
```

## Merge

Why not just merge objects, like this?

```yaml
src: libraries/utils/merge-customisations.ts
title: 'bad-example.ts'
```

That works only with default customisations, but not if both objects have transformations.

Function `[func]mergeCustomisations()` should be used when, for example, you are merging customisations from icon, which might include transformations and user's customisations. It can also be used to merge customisations when resolving icon alias.
