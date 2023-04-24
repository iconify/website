```yaml
title: Icon Bundles for Iconify SVG Framework
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# Icon bundles for Iconify SVG framework

This tutorial is a part of [Iconify icon bundles tutorial](./index.md).

[Iconify SVG framework](../../icon-components/svg-framework/index.md) supports 2 ways of adding icon bundles:

- Loading icon bundles before loading Iconify.
- Loading icon bundles after loading Iconify.

If you want to skip boring explanation, scroll down to ["How to automate build process" section](#automation).

## Including SVG framework {#script}

There are different ways to include SVG framework:

You can bundle SVG framework and icons, then link to a big bundle:

```html
<script src="/assets/iconify-bundle.js"></script>
```

If you bundle SVG framework and icons, you can use any method of including icon bundle.

### Separate files

Bundling SVG framework and icons is not always an option. It requires coding. It is easier to link to the latest version of SVG framework and to bundle separately.

There are several ways you can link SVG framework and icon bundle separately.

You can load script and bundle in `[tag]head` section:

```yaml
src: icon-components/bundles/svg-framework-head-after.html
hint: Loading bundle after SVG framework in head section.
extra:
  - src: icon-components/bundles/svg-framework-head-before.html
    hint: Loading bundle before SVG framework in head section.
```

You can load script and bundle inside `[tag]body` section:

```yaml
src: icon-components/bundles/svg-framework-footer-before.html
hint: Loading bundle before SVG framework in footer.
```

Example above shows method that is used by Iconify documentation website.

```yaml
src: icon-components/bundles/svg-framework-footer-after.html
hint: Loading bundle after SVG framework in footer.
```

The last example shows what you should not do. Why? Because scripts are loaded separately and part of DOM is ready. This means SVG framework can be loaded first and can start replacing icons, while bundle is still being loaded. SVG framework might send API queries for icons that exist in bundle, making bundle pointless.

## Bundle before script {#before}

You can use this method regardless of how you include Iconify.

Global variable `[var]Iconify` is not available until SVG framework is loaded, so how does this method work? By assigning data to a global variable `[var]IconifyPreload`. When Iconify SVG framework is loading, it will check if global variable `[var]IconifyPreload` exists and will load icon data from it.

Value can be a `[type]IconifyJSON` object or an array of `[type]IconifyJSON` objects.

Examples:

```yaml
src: icon-components/bundles/preload.js
hint: Loading only one icon set.
extra:
  - src: icon-components/bundles/preload-mix.js
    hint: Loading multiple icon sets.
```

## Bundle after script {#after}

This method should only be used if you either:

- Bundle SVG framework and icons in the same big JavaScript file.
- Include both SVG framework and bundle in `[tag]head` section of HTML.

Loading icons after Iconify SVG framework has loaded is done by calling `[func]Iconify.addCollection`. One function call per icon bundle.

Example:

```yaml
src: icon-components/bundles/mix.js
```

## Both methods

Not sure if your bundle will be included before or after SVG framework?

You can wrap icon sets data in function that checks for `[func]Iconify.addCollection` and appends icon data to `[var]IconifyPreload` if `[func]Iconify.addCollection` is missing.

```yaml
src: icon-components/bundles/universal.js
```

## How to automate build process? {#automation}

Build process is simple:

1. Get icon data.
2. Wrap it in a callback.
3. Optional: bundle it with SVG framework.

See [examples](./examples/index.md) for scripts you can use.
