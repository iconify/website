```yaml
title: Generating Iconify Icon Bundles with API
types:
  IconifyJSON: '/docs/types/iconify-json.md'
```

# Generating icon bundles with API

This tutorial is a part of [Iconify icon bundles tutorial](./index.md).

You can use Iconify API to generate data for icon bundles. Icon bundles use the same `[type]IconifyJSON` format that is used to retrieve icon data from API.

This method can be used to generate small bundles, where you do not need to automate anything. If you want to automate bundle generation, for example, make it a part of your build process, you should use [Iconify Tools](./tools.md) instead.

## Retrieving icon data

To get icons data, all you need to do is query Iconify API.

End point is `[url]https://api.iconify.design/{prefix}.json?icons={icons}`, where `[str]{prefix}` is icon set prefix, `[str]{icons}` is comma separated list of icon names.

You can add `[url]&pretty=1` to URL to generate pretty markup.

Example: `[url]https://api.iconify.design/mdi.json?icons=account-box,account-cash,account,home&pretty=1`

```yaml
src: api/mdi.json
```

Copy contents to clipboard, paste it in your bundle file, wrapped in callback.

## Wrapping in a callback

API can wrap data in a callback, skipping second step in bundle creation process.

Name of callback varies, see [wrapper function for icon bundles](./wrapper.md) for details.

To wrap data in a callback, you need to:

1. Change `[url].json?` to `[url].js?` in URL.
2. Add `[url]&callback={callback}` to URL, where `[str]{callback}` is a callback name.

Example, using `[func]Iconify.addCollection` for a callback that is used in SVG framework:

`[url]https://api.iconify.design/uil.js?icons=home,lock,lock-open-alt&pretty=1&callback=Iconify.addCollection`

```yaml
src: icon-components/bundles/uil.js
```

## Importing component

If you are using a component, you need to add import statement at start of file.

API doesn't do that, it only wraps data. You need to add appropriate import statement yourself, then add generated file to your scripts, so it could be bundled with everything else.

```yaml
src: icon-components/bundles/import-component.js
```
