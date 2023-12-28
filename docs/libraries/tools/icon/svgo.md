```yaml
title: Optimising SVG
functions:
  cleanupSVG: './cleanup.md'
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
```

# Optimising icon with SVGO

This function is part of [icon manipulation functions](./index.md) in [Iconify Tools](../index.md).

Function `[func]runSVGO()` optimises icon using popular SVG optimisation tool SVGO.

It is meant to be used on icons that have already been processed with `[func]cleanupSVG()`, which does most of the cleanup.

This function is used to do advanced stuff that SVGO is good at: converting transformations,
cleaning up numbers, removing unused SVG elements, and so on.

## Plugins

By default, function uses a pre-configured list of SVGO plugins, which excludes some bugged plugins.

If an icon contains SVG animations, plugins that modify shapes are excluded.

## Usage

Function has the following parameters:

- `[prop]svg`, `[type]SVG`. Icon instance.
- `[prop]options`, `[type]object`. Options (optional).

## Options

There are two ways to set options:

- Using a custom list of SVGO plugins.
- Toggle groups of plugins using several options.

### Custom plugins list

You can set custom plugins using `[prop]plugins` property of options. Value is array of plugins, passed directly to SVGO (see SVGO documentation).

Example:

```ts
runSVGO(svg, {
	plugins: ['convertStyleToAttrs', 'inlineStyles'],
	multipass: true,
});
```

### Plugin options

You can also pick from a preset list of plugins by setting these options:

- `[prop]animated`, `[type]boolean`. If `true`, SVGO plugins that are known to bug out with animated icons are not used.
- `[prop]keepShapes`, `[type]boolean`. If `true`, plugins that modify shapes are not used. This is useful if you need to keep shapes as-is, for example, when animating shapes, but it is not as strict as setting `[prop]animated` option.
- `[prop]cleanupIDs`, `[type]string | false | function`. Custom prefix for rewriting IDs, `false` to disable plugins that change IDs. Can be a callback that returns new ID based on old ID.

These options cannot be used together with `[prop]plugins` option.

### Other options

Options that can be used with any options listed above:

- `[prop]multipass`, `[type]boolean`. If `true`, plugins are ran multiple times for better optimisation. Enabled by default.

## Example

```yaml
src: libraries/tools/icon/svgo.ts
title: 'svgo.ts'
extra:
  - src: libraries/tools/icon/svgo.svg
    title: 'Result:'
```

That example shows running SVGO on icon that has not been cleaned up and validated. Not all useless attributes have been removed, and SVGO doesn't check for some content that should not be in icon, such as text, raster images and events.

Therefore, all icons must be cleaned up after loading.

Same code with clean up:

```yaml
src: libraries/tools/icon/svgo2.ts
title: 'svgo.ts'
extra:
  - src: libraries/tools/icon/svgo2.svg
    title: 'Result:'
```
