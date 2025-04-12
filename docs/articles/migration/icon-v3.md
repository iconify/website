```yaml
title: April 2025 Iconify icon components migration guide
```

# Icon components migration guide

> Important: this article is not final yet.
> Versions of packages mentioned below are currently in beta, not yet ready for production.

The following migration guide applies to:

- [Iconify icon web component](/docs/iconify-icon/index.md) version 2 to 3.
- [Iconify icon component for Vue](/docs/icon-components/vue/index.md) version 4 to 5.
- [Iconify icon component for Svelte](/docs/icon-components/svelte/index.md) version 4 to 5.
- [Iconify icon component for React](/docs/icon-components/react/index.md) version 5 to 6.

New major versions of all components mentioned above was released in April 2025.

This was a breaking change, this migration guide should help you change your code.

## Changes

Update introduces the following changes:

- Previously deprecated functions `[func]disableCache()` and `[func]enableCache()` have been removed.
- Previously deprecated function `[func]iconExists()` has been removed. Use `[func]iconLoaded()` instead (see below).

There are more changes for Vue and Svelte components, see below.

### iconExists removal

Do not worry, function is not gone. It was renamed to `[func]iconLoaded()`.

Reason for renaming function is really bad name.
It was internal name in initial versions of component, used inside storage module.
It checks if icon exists in storage, which makes sense within storage.
However, when exported from component, function no longer storage specific, so it gave impression that it can be used to check if icon exists in Iconify API.

To avoid confusion, later function was renamed to `[func]iconLoaded()`, but old name `[func]iconExists()` was supported for backwards compatibility.

New major version is a good time to get rid of it.

Migration is as simple as it can get: change function name in your code.

### Cache functions

Caching in storage is no longer available.

To migrate, simply remove usages of those functions.

See [/news/2025.md#components-storage](January 2025 news) for detailed explanation of why these functions were removed.

### Vue changes

Vue component has been rewritten with Vue's Composition API. It does not change behavior, but now you can remove Options API from bundle if other components do not use it.

Other changes:

#### onLoad

Callback `[prop]onLoad` in Vue component has been replaced with `[prop]load` event.

Old code:

```vue
<template>
  <Icon icon="mdi:home" :onLoad="(icon) => console.log('Loaded', icon)" />
</template>
```

New code:

```vue
<template>
  <Icon icon="mdi:home" @load="(icon) => console.log('Loaded', icon)" />
</template>
```

### Svelte

Svelte component has been rewritten using Svelte 5 runes.

If you are still using Svelte 4 or older version, new Svelte component will not work for you.

You need to use version 5 of component:

```bash
npm install --save-dev @iconify/svelte@4
```

or use a [web component](/docs/iconify-icon/index.md).

#### onLoad

Event `[prop]on:load` in Svelte component has been replaced with `[prop]onload` callback.

Old code:

```svelte
<Icon icon="mdi:home" on:load={(event) => console.log('Loaded', event.detail.icon)} />
```

New code:

```svelte
<Icon icon="mdi:home" onload={(icon) => console.log('Loaded', icon)} />
```
