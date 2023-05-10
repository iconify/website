```yaml
title: Vendor lock-in and icons
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '70 icon sets'
    value: '${counters.sets} icon sets'
```

# Vendor lock-in

What is vendor lock-in? Vendor lock-in is when someone is essentially forced to continue using a product or service regardless of quality, because switching away from that product or service is not practical.

## Icon sets

Most icon sets have their own icon components or fonts with stylesheets.

When using those components or fonts, you no longer have freedom to choose icons, you are only limited to icons provided by your chosen vendor.

Issues:

- Cannot easily use your own icons. If available icons don't cover all your use cases, you'll need to use different method to add custom icons. For most developers that is not an easy task.
- Cannot easily switch to another icon set. It often requires rewriting a lot of code, matching old icons to new. Usually, this is a huge task.

You are forced to choose bad icons or spend a lot of time.

### Vendor lock-in with customisable software

Worst case of vendor lock-in, is when you are working with customisable software, who's authors made a choice to use a specific icon set or icon font. Very common cases are popular forum and blogging software packages.

Forums and blogging software have:

- Customisable themes.
- Plug-ins, which can include templates.

Unless you are designing theme only for yourself, as a theme designer you need to make sure it works with third party plug-ins. Third party plug-ins are designed to work with whatever default theme software package offers. So, even if you want to change icon set in your theme, you still need to keep default icon set or third party plugins might not work.

This very specific vendor lock-in is one of reasons why Iconify was created. After years of frustration of working with one very popular icon font, I wanted to find a solution to vendor lock-in for forum software, but at that moment there were none. See [about Iconify](https://iconify.design/about/).

## Iconify

When using Iconify, doesn't it lock-in to Iconify?

Sort of, but it is a technology lock-in, not vendor lock-in and there are huge differences. See below.

Iconify was designed to be as flexible as possible, the only way you can get more freedom is directly embed SVG files one by one, without any specific icon set. Working with SVG is not easy for most developers and it is very time consuming.

### Icons

One big difference is choice of icons. When using any icon set, you are limited to that icon set.

When using Iconify, you can use over 70 icon sets.

### Custom icons

Most icon components support custom icon loaders, making it easy to use Iconify with custom icons.

Iconify also offers open source tools for cleaning up and optimising icons. Same tools that are used by Iconify scripts to keep icon sets up to date.

### API

Some icon components get icon data from Iconify API. Doesn't that lock-in users to third party services?

No.

API is open source, you can host your own API, where you have full control over available icon sets and over servers.

Icon components can be easily configured to use your Iconify API servers. You can also build custom version of icon components that have your servers pre-configured.

Everything is open source!

### Components

Icon data is available for everyone. You are not forced to use Iconify icon components.

- There are [many ways to use icons, including third party components](/docs/usage/index.md).
- You can create your own components that use [icon data from Iconify](/docs/icons/index.md). [All types are documented](/docs/types/index.md), [tools for working with data are open source](/docs/libraries/utils/index.md).

Furthermore, third party icon components are very welcome... as long as it is high quality and maintained!

## Freedom to choose

With Iconify you are free to do whatever you want.

Theme designers can choose from hundreds of thousands of icons or add their own icons, without worrying about compatibility with third party plug-ins.
