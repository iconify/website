```yaml
title: "Iconify for Svelte Function: iconLoaded"
functions:
  getIcon: "./get-icon.md"
```

# Iconify for Svelte function: iconLoaded

This tutorial is part of [Iconify for Svelte functions tutorial](./index.md#functions).

`include icon-components/functions/icon-loaded/intro`

## Usage

`include icon-components/functions/icon-loaded/props`

## Example

This example renders `[prop]fallback` snippet while icon is being loaded.

```yaml
src: icon-components/common/icon-exists.svelte
```

Usage example:

```svelte
<IconWrapper icon="mdi-light:alert">
    {#snippet fallback()}
        <small>!</small>
    {/snippet}
</IconWrapper>
```

This example uses `[func]iconLoaded()` to show function, but for this purpose it is better to use `[func]getIcon()`. See `[func]getIcon()` documentation for better example.

## Legacy

`include icon-components/functions/icon-loaded/legacy`
