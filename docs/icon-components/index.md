```yaml
title: Icons on Demand
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Icons on demand

Iconify ecosystem has a unique feature: [Iconify API](/docs/api/index.md).

It can be used to [load icon data on demand](/docs/api/icon-data.md) and is used by Iconify icon components.

[Skip to list of available components](#components) if you want to skip long explanation of how it all works.

## How does it work? {#process}

Iconify icon components are very easy to use. All developer has to specify is an icon name:

```yaml
src: icon-components/icon/usage.html
demo: true
demoFirst: false
class: sample-big
```

Unlike [regular icon components](/docs/usage/svg/index.md), Iconify icon components do not bundle icon data. They load only data for icons used on currently viewed page at run time.

<icon-loading-process link="#components"></icon-loading-process>

### Advantages

Loading icon data on demand has its advantages and disadvantages over using [regular icon components](/docs/usage/svg/index.md).

Advantages:

- Very easy to use.
- If you are using many icons on various pages, bundle size is smaller because icon data is loaded only as needed.
- It can be used with customisable themes, where a developer doesn't know which icons theme is using.
- Small HTML. Icons are loaded only in browser, not server side rendered.

Disadvantages:

- Requires access to Iconify API, making it unusable for offline applications. You can host your own API instance, but it is not trivial.
- Icons might not render instantly. Even though there are multiple layers of caching icon data, there is a few milliseconds delay in rendering.

## Components

The best option by far is [Web component](#web-component).
It is usable in HTML with or without UI frameworks.  

Additionally, there are [components for UI frameworks](#ui-frameworks): React, Vue, Svelte, Ember.

In future, only `[npm]iconify-icon` web component will be supported. Why?
- SVG Framework is an old version of the web component, developed many years ago as an experiment when browser did not support web components. It has no place in modern development.
- Framework-specific components have issue with server side rendering. Web component solves those issues.

### Web component {#web-component}

The best option by far is web component.
It is the most modern iteration, works with all UI frameworks and works great with server side rendering.

Usage is simple:

```html
<iconify-icon icon="mdi:home"></iconify-icon>
```

See [Iconify icon web component documentation](/docs/iconify-icon/index.md).

#### Shadow DOM

Web component renders icon in Shadow DOM, separating it from the main document.

That has its advantages and disadvantages over other components.

Advantages:

- Separates icon from main DOM, so main DOM doesn't become bloated.
- No conflicts with unique ids, which are used in some icons in masks, clip paths, animations and few other elements.
- Works wonderfully with SSR, much better than UI framework native components: no ID conflicts, render is independent of framework rendering, so it doesn't cause any issues with hydration.

Disadvantages:

- Accessing icon content, such as changing `[prop]stroke-width`, is not always possible. Depends on use case.
- Cannot render icon without `[prop]width` and `[prop]height`, making it impossible to resize icon with those properties. Icon can be resized only with `[prop]font-size`.

If these disadvantages are unacceptable for your project, use "SVG framework" or one of UI framework specific components listed below.

### UI frameworks {#ui-frameworks}

Iconify offers components native to various UI frameworks:

- [React](./react/index.md) (warning: when using with Next.js, wrap it in a client-only component or switch to IconifyIcon web component!)
- [Vue](./vue/index.md)
- [Svelte](./svelte/index.md)

Usage is as any other component:

```jsx
<Icon icon="mdi:home" />
```

These components behave differently than the web component:

- To avoid SSR errors, icons are rendered only after a component is mounted. Otherwise, it breaks hydration.
- Icons can be rendered without `[prop]width` and `[prop]height` attributes, making it easy to style in CSS.

You should consider using the `[npm]iconify-icon` web component instead of components mentioned above.
Dynamic data loading does not work well with SSR.
Web component solves those issues.

#### Legacy components

In addition to components listed above, there are several legacy components.
They were created a long time ago, but no longer relevant in modern development. 

These components are no longer updated, but can be used if you really need it:

- [Vue 2](./vue2/index.md) (Vue 3 was released a long time ago, no point in supporting the old version)
- [Ember](./ember/index.md) (Ember framework is outdated)
- [SVG Framework](./svg-framework/index.md) (the oldest of components, has been replaced by the IconifyIcon web component)
