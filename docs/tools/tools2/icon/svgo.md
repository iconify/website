```yaml
title: Optimising SVG
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
```

# Optimising icon with SVGO

This function is part of [icon manipulation functions](./index.md) in [Iconify Tools](../index.md).

Function `[func]runSVGO()` optimises icon using popular SVG optimisation tool SVGO.

## Usage

Function has the following parameters:

- `[prop]svg`, `[type]SVG`. Icon instance.
- `[prop]options`, `[type]object`. Options (optional).

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

## Options

There are two ways to set options:

- Using custom list of SVGO plugins.
- Toggle groups of plugins using several options.

### Custom plugins list

You can set custom plugins using `[prop]plugins` property of options. Value is array of plugins, passed directly to SVGO (see SVGO documentation).

Example:

```ts
await runSVGO(svg, {
	plugins: ['convertStyleToAttrs', 'inlineStyles'],
	multipass: true,
});
```

### Plugin options

You can also pick from preset list of plugins by setting these options:

- `[prop]keepShapes`, `[type]boolean`. If `true`, plugins that modify shapes are not ran. This is useful if you need to keep shapes as is, for example, when animating shapes.
- `[prop]cleanupIDs`, `[type]string | false`. Custom prefix for rewriting IDs, `false` to disable plugins that change IDs.

These options cannot be used together with `[prop]plugins` option.

### Other options

Options that can be used with any options listed above:

- `[prop]multipass`, `[type]boolean`. If `true`, plugins are ran multiple times for better optimisation. Enabled by default.

## Example

```yaml
src: tools/tools2/icon/svgo.ts
title: 'svgo.ts'
extra:
  - src: tools/tools2/icon/svgo.svg
    title: 'Result:'
```

That example shows running SVGO on icon that has not been cleaned up and validated. Not all useless attributes have been removed and SVGO doesn't check for some content that should not be in icon, such as text, raster images and events.

Therefore all icons must be cleaned up after loading.

Same code with clean up:

```yaml
src: tools/tools2/icon/svgo2.ts
title: 'svgo.ts'
extra:
  - src: tools/tools2/icon/svgo2.svg
    title: 'Result:'
```
