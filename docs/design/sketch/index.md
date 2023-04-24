```yaml
title: Iconify for Sketch
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '60,000'
    value: '${counters.icons}'
  - code: '70+'
    value: '${counters.sets}+'
```

# Iconify for Sketch

Want to add icons to your designs?

Iconify for Sketch got you covered. One plugin offers over 60,000 icons from 70+ icon sets.

With Sketch plug-in you can:

- Browse icon sets.
- Search icon sets.
- Import any icon as vector shape to Sketch document.

It is completely free! Unlike other plugins that offer many icons, but require payment to use SVG, Iconify always imports icons as SVG. Iconify project is open source and offers only open source icon sets.

## Installation

Go to [plug-in releases page](https://github.com/iconify/iconify-sketch/releases), download the latest file, unpack it, open `[file]iconify.sketchplugin` in Finder. Finder should launch Sketch that should install plug-in.

If plug-in installation fails, copy `[file]iconify.sketchplugin` to `[file]~/Library/Application Support/com.bohemiancoding.sketch3/Plugins/`.

## Usage

In Sketch menu select `[str]Plug-ins`, then `[str]Iconify` or press Ctrl+Shift+I.

Browse or search icons, select any icon, click `[str]Import` button. Plug-in will import icon to your current project.

## Screenshots

Importing icon:

![Iconify for Sketch: footer](https://docs.iconify.design/assets/images/plugins/sketch_footer.png)

Big choice of `[str]home` icons:

![Iconify for Sketch: search results](https://docs.iconify.design/assets/images/plugins/sketch_home_grid.png)

Collections list:

![Iconify for Sketch: browse collections](https://docs.iconify.design/assets/images/plugins/sketch_index.png)

![Iconify for Sketch: browse collections](https://docs.iconify.design/assets/images/plugins/sketch_emoji.png)

Importing multiple icons:

![Iconify for Sketch: browsing icons set](https://docs.iconify.design/assets/images/plugins/sketch_select_multiple.png)

## Available icons

You can browse and import iver 60k open source icons hosted on [Iconify API](../../api/index.md) to Sketch projects.

## Source code

All source code is available at [Iconify for Sketch repository](https://github.com/iconify/iconify-sketch).

To build it, install all necessary dependencies and run `[bash]npm run build`. Build script will generate `[file]iconify.sketchplugin` that you can install.
