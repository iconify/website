```yaml
title: Icons on Demand
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Icons on demand

Iconify ecosystem has a unique feature: [Iconify API](../api/index.md).

It can be used to [load icon data on demand](../api/icon-data.md) and is used by Iconify icon components.

[Skip to list of available components](#components) if you want to skip long explanation of how it all works.

## How does it work? {#process}

Iconify icon components are very easy to use. All developer has to specify is an icon name:

```yaml
src: icon-components/icon/usage.html
demo: true
demoFirst: false
class: sample-big
```

Unlike [regular icon components](../usage/svg/index.md), Iconify icon components do not bundle icon data. They load only data for icons used on currently viewed page at run time.

<icon-loading-process link="#components"></icon-loading-process>

### Advantages

Loading icon data on demand has its advantages and disadvantages over using [regular icon components](../usage/svg/index.md).

Advantages:

- Very easy to use.
- If you are using many icons on various pages, bundle size is smaller because icon data is loaded only as needed.
- Can be used with customisable themes, where developer doesn't know which icons theme is using.
- Small HTML. Icons are loaded only in browser, not server side rendered.

Disadvantages:

- Requires access to Iconify API, making it unusable for offline applications. You can host your own API instance, but it is not trivial.
- Icons might not render instantly. Even though there are multiple layers of caching icon data, there is a few milliseconds delay in rendering.

## Components

There are several options:

- [Web component](#web-component), usable in HTML with or without UI frameworks.
- ["SVG Framework"](#svg-framework), usable in HTML without UI frameworks.
- [Components for UI frameworks](#ui-frameworks): React, Vue, Svelte, Ember.

### Web component {#web-component}

Best option by far is web component. It is the most modern iteration, works with all UI frameworks and works great with server side rendering.

Usage is very simple:

```html
<iconify-icon icon="mdi:home"></iconify-icon>
```

See [Iconify icon web component documentation](../iconify-icon/index.md).

#### Shadow DOM

Web component renders icon in Shadow DOM, separating it from main document.

That has its advantages and disadvantages over other components.

Advantages:

- Separates icon from main DOM, so main DOM doesn't become bloated.
- No conflicts with unique ids, which are used in some icons in masks, clip paths, animations and few other elements.
- Works wonderfully with SSR, much better than UI framework native components: no ID conflicts, render is independant from framework rendering, so it doesn't cause any issues with hydration.

Disadvantages:

- Accessing icon content, such as changing `[prop]stroke-width`, is not always possible. Depends on use case.
- Cannot render icon without `[prop]width` and `[prop]height`, making it impossible to resize icon with those properties. Icon can be resized only with `[prop]font-size`.

If these disadvantages are unacceptable for your project, use "SVG framework" or one of UI framework specific components listed below.

### SVG framework {#svg-framework}

SVG framework is an older iteration of web component. It was the first package developed in early stages of Iconify project.

Before end of 2020, web components were not usable because too many users were still using older browsers that do not support them, more specifically MS Edge and various old mobile browsers.

Usage is simple:

```html
<span class="iconify" data-icon="mdi:home"></span>
```

SVG framework finds all such elements in HTML and replaces them with `[tag]svg` elements.

This often causes problems with various UI frameworks, so SVG framework is not usable inside React/Vue/Svelte/etc... components.

See [SVG framework documentation](./svg-framework/index.md).

### UI frameworks {#ui-frameworks}

Iconify offers components native to various UI frameworks:

- [React](./react/index.md) (warning: when using with Next.js, wrap it in client-only component!)
- [Vue 3](./vue/index.md)
- [Vue 2](./vue2/index.md)
- [Svelte](./svelte/index.md)
- [Ember](./ember/index.md)

Usage is as any other component:

```jsx
<Icon icon="mdi:home" />
```

These components behave differently than web component:

- To avoid SSR errors, icons are rendered only after component is mounted. Otherwise it breaks hydration.
- Icons can be rendered without `[prop]width` and `[prop]height` attributes, making it easy to style in CSS.
