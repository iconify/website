```yaml
title: CSS for icons without coding
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

# CSS for icons without coding

You can generate CSS for icons without writing any code, using Iconify API.

If you would rather generate CSS programmatically, [consider using Iconify Utils](../utils/index.md).

## API

Iconify API is an open source hosted (or self-hosted) service for developers. Public Iconify API servers host over 60,000 icons from more than 70 open source icon sets.

Public API is available at `[url]https://api.iconify.design`.

Among other features, it can generate CSS for icons. Query for CSS is `[url]/{prefix}.css?icons={icons}`, where:

- `[str]{prefix}` is icon set prefix. To generate CSS for icons from multiple icon sets, send separate queries for each icon set.
- `[str]{icons}` is list of icon names, separated by comma.

## Usage

Getting CSS is easy:

- In your browser, create URL for Iconify API with the correct list of icons, as described above (see examples below).
- Select all generated CSS, copy it to clipboard, paste it to a `[file].css` file.

To use those icons in HTML, use `[tag]span` elements with 2 class names: class name for the icon set, class name for the icon.

```html
<span class="icon--mdi-light icon--mdi-light--alert-circle"></span>
```

There is a bit of duplication in class names, as both the icon set and the icon contain the same first part. You can change it with options. See below.

## Examples

[/mdi-light.css?icons=alert-circle,circle,help-circle](https://api.iconify.design/mdi-light.css?icons=alert-circle,circle,help-circle):

```yaml
hint: /mdi-light.css?icons=alert-circle,circle,help-circle
src: api/mdi-light.css
```

[/openmoji.css?icons=axe,balance-scale](https://api.iconify.design/openmoji.css?icons=axe,balance-scale):

```yaml
hint: /openmoji.css?icons=axe,balance-scale
src: api/openmoji.css
```

[/mdi.css?icons=account-box,account-cash,account,home](https://api.iconify.design/mdi.css?icons=account-box,account-cash,account,home):

```yaml
hint: /mdi.css?icons=account-box,account-cash,account,home
src: api/mdi.css
```

## Options

API query has optional params that you can use to get different results.

See [API query documentation](/docs/api/css.md) for more details.
