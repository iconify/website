```yaml
title: Cleaning up and validating SVG
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
functions:
  validateIconSet: '../../utils/validate-icon-set.md'
```

# Icon cleanup and validation

Cleanup functions are used in [Iconify Tools](../index.md) to validate and clean up imported icons.

Unfortunately, many editors leave lots of junk in SVG files, sometimes multiplying icon file size several times.

SVG files might also contain scripts and links to external resources.

## Usage

To clean up and validate icon, run `[func]cleanupSVG()`.

Function has one required parameter:

- `[prop]svg`, `[type]SVG`. Icon instance.

and one optional parameter:

- `[prop]options`, `[type]object`. Options, see below.

Function does not return anything, it applies changes to `[type]SVG` instance.

On error function will throw an exception.

### Options

The `[prop]options` parameter has the following properties:

- `[prop]keepTitles`, `[type]boolean`. If set to `true`, titles are not removed.

Titles are removed by default because almost all icons can represent many things,
therefore, hardcoded titles are not usable for most users.
The option to keep titles is intended for working with custom icon sets that are specific to one website.

## Clean up process

Clean up process runs several functions that do various tasks:

- `[func]cleanupInlineStyle()` checks inline styles and removes unneeded styles.
- `[func]convertStyleToAttrs()` converts style to attributes.
- `[func]cleanupSVGRoot()` cleans up `[tag]svg` element.
- `[func]checkBadTags()` checks icon for bad tags.
- `[func]removeBadAttributes()` removes bad attributes.

If you want to, you can run functions listed above, in order listed above. It will be identical to running `[func]cleanupSVG()`.

## Optimisation

Clean up functions do not optimise icon data, they do not rewrite any shapes. Functions only remove most dead code, making it easier to process icon.

Optimisation should be done separately. See [icon manipulation functions](../icon/index.md).

## Opinionated validation

Validation is opinionated. It is intended to be used to produce icons that are available to anyone, therefore, it is rather strict.

Icon validation fails if icon:

- Contains any scripts. Untrusted scripts are dangerous.
- Contains any text. This is heavily opinionated. Reasoning is usually icons that use text are exported by designers not realising that they are using fonts that are not installed on every computer, therefore, icon will look different than intended. Convert text to shapes before exporting it from your editor.
- Contains any raster images. Raster images in vector shapes are unacceptable because they do not scale. Icons are meant to scale without limitations.

## Example

```yaml
src: libraries/tools/svg/cleanup.ts
title: 'cleanup.ts'
extra:
  - src: libraries/tools/svg/cleanup.svg
    title: 'Result:'
```
