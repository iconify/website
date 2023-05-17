```yaml
title: SVG for icons without coding
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '70 icon sets'
    value: '${counters.sets} icon sets'
  - code: '70 open source'
    value: '${counters.sets} open source'
functions:
  getIconsCSS: '/docs/libraries/utils/get-icons-css.md'
```

# SVG for icons without coding

You can get SVG for icons without writing any code.

There are 2 options:

- You can download SVG from Iconify website (very easy).
- You can use Iconify API to generate SVG (might be too complicated or inefficient).

If you would rather generate SVG programmatically, [consider using Iconify Utils](../utils/index.md).

## Websites

You can browse all available icons and copy code or SVG on the following websites:

`include usage/options/websites`

Find icon you want, select it, copy SVG to clipboard, paste it in your HTML.

## API

If you know the name of the icon you want to use, you can download SVG from Iconify API.

Iconify API is an open source hosted (or self-hosted) service for developers. Public Iconify API servers host over 60,000 icons from more than 70 open source icon sets.

You can get icons from public API by visiting URLs like this: `[url]https://api.iconify.design/mdi-light/home.svg`.

Replace `[icon]mdi-light` with icon set prefix, `[icon]home` with icon name.

Optional parameters:

- `[url]?height=none` - removes width and height.
- `[url]?height=auto` - sets width and height to same as `[prop]viewBox`.
- `[url]?color=black` - changes `[prop]currentColor` to color, usable only for monotone icons. If color contains `[str]#`, replace it with `[str]%23` (see URL encoding).
- `[url]?box=1` - adds empty rectangle that match `[prop]viewBox`. When importing SVG to some software, such as Sketch, it is needed to maintain icon dimensions after import.
- `[url]?download=1` - forces browser to download file.

Example: `[url]https://api.iconify.design/ri/account-box-line.svg?height=none&color=%23000&box=1`

Process:

- Get SVG from API.
- Download and save it.
- Copy it to clipboard, paste in your HTML.

See [Iconify API documentation](/docs/api/svg.md) for details and more parameters.
