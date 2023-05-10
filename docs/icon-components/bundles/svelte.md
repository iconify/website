```yaml
title: Icon Bundles for Iconify for Svelte
types:
  IconifyJSON: '/docs/types/iconify-json.md'
```

# Icon bundles for Iconify for Svelte

```yaml
include: icon-components/bundles/component-intro
replacements:
  - search: Iconify for React
    replace: Iconify for Svelte
  - search: '/react/'
    replace: '/svelte/'
```

## Generating data

```yaml
include: icon-components/bundles/component-intro2
replacements:
  - search: Iconify for React
    replace: Iconify for Svelte
  - search: '/react/'
    replace: '/svelte/'
```

## Difference with SVG framework {#difference}

```yaml
include: icon-components/bundles/component-differences
replacements:
  - search: React
    replace: Svelte
```

## Bundle example

```yaml
include: icon-components/bundles/component-bundle
replacements:
  - search: iconify/react
    replace: iconify/svelte
```

### CommonJS module

```yaml
include: icon-components/bundles/component-bundle-require
replacements:
  - search: iconify/react
    replace: iconify/svelte
```

## How to automate build process? {#automation}

```yaml
include: icon-components/bundles/automation
```
