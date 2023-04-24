```yaml
title: Icon Bundles for Iconify for Ember
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# Icon bundles for Iconify for Ember

```yaml
include: icon-components/bundles/component-intro
replacements:
  - search: Iconify for React
    replace: Iconify for Ember
  - search: '/react/'
    replace: '/ember/'
```

## Generating data

```yaml
include: icon-components/bundles/component-intro2
replacements:
  - search: Iconify for React
    replace: Iconify for Ember
  - search: '/react/'
    replace: '/ember/'
```

## Difference with SVG framework {#difference}

```yaml
include: icon-components/bundles/component-differences
replacements:
  - search: React
    replace: Ember
```

## Bundle example

```yaml
include: icon-components/bundles/component-bundle
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

## How to automate build process? {#automation}

```yaml
include: icon-components/bundles/automation
```
