```yaml
title: Icon Bundles for Iconify for Vue 3
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# Icon bundles for Iconify for Vue

```yaml
include: icon-components/bundles/component-intro
replacements:
  - search: Iconify for React
    replace: Iconify for Vue
  - search: '/react/'
    replace: '/vue/'
```

## Generating data

```yaml
include: icon-components/bundles/component-intro2
replacements:
  - search: Iconify for React
    replace: Iconify for Vue
  - search: '/react/'
    replace: '/vue/'
```

## Difference with SVG framework {#difference}

```yaml
include: icon-components/bundles/component-differences
replacements:
  - search: React
    replace: Vue
```

## Bundle example

```yaml
include: icon-components/bundles/component-bundle
replacements:
  - search: iconify/react
    replace: iconify/vue
```

### CommonJS module

```yaml
include: icon-components/bundles/component-bundle-require
replacements:
  - search: iconify/react
    replace: iconify/vue
```

## How to automate build process? {#automation}

```yaml
include: icon-components/bundles/automation
```
