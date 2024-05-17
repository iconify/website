```yaml
title: Iconify for Figma update
```

# What's new in Iconify for Figma

Welcome to the new Iconify plugin for Figma.

In 2024, the plugin has been completely rewritten.
The new version has nothing in common with the old version, so this is a rather radical change, 
which requires a tutorial. 

## New UI

The first change you'll notice immediately is the new layout.

Plugin is designed to fit as much content as possible in the smallest possible space.

![Iconify for Figma: main page](/assets/images/plugins/figma4_index.png)

You can make it even smaller by clicking the button in navigation to toggle compact width.

![Iconify for Figma: compact mode](/assets/images/plugins/figma4_compact_toggle.png)

Due to limited space, the plugin uses tooltips to show additional information.

## License information

One of the biggest changes is advanced license information.

Even though all icon sets are open source, not all open source licenses are equal.
Some ask for attribution, some prevent commercial use.

The new plugin shows attribution requirement and commercial use limitation in various places:
- In icon sets list in tooltip for each icon set.
- When browsing icon set, it is shown in tooltip for icon set name.
- When browsing icons, it is shown in tooltip for each icon.

![Iconify for Figma: search results](/assets/images/plugins/figma4_cat.png)

Additionally, you can filter icon sets and search results by license (see below).

## Advanced filters

There are many icon sets, finding an icon set that you want might be a challenge.

The new version of the plugin has advanced filters to help you find icon sets.

You can filter icon sets by:
- Category
- Palette
- License
- Icon grid
- Tags (coming very soon)

![Iconify for Figma: advanced filters](/assets/images/plugins/figma4_filters.png)

## Favorite icon sets

You can now mark icon sets as favorite.

This can be done by clicking the star button when viewing icon set.

![Iconify for Figma: star an icon set](/assets/images/plugins/figma4_favorite_toggle.png)

When browsing the icon sets list, if you have marked some icon sets as favorite,
you will see the new option to browse only favorite icon sets.

![Iconify for Figma: favorite icon sets](/assets/images/plugins/figma4_favorite.png)

All lists (favorite and recent icon sets, recent icons) are considered to be private data (stored in Figma) and can be cleared.

## Scrollable icons

Previous versions of the plugin used pagination to show many icons.
You needed to click page buttons to show more icons, which was not convenient.

The new version of the plugin has completely redesigned icons view:
- You can now scroll icons.
- Icons list takes all available space, so the bigger plugin window is, the more icons are shown.
- Pagination is also available if you prefer to use pages.

![Iconify for Figma: icon set](/assets/images/plugins/figma4_solar.png)

## Color styles

When importing icons, you can now pick color styles in color picker.

Due to Figma plugin system limitation, color picker might not show all color styles.

The plugin has access to:
- Color styles defined in the currently viewed document.
- Color styles used in selected layers.

So if you have color styles shared from another document, the plugin might not see them.
To add them to color picker, you need to select any layer that uses that color style.

![Iconify for Figma: color picker](/assets/images/plugins/figma4_colors.png)

### Solid colors only

Note that the plugin supports only color styles that have one solid color.

Gradients, patterns, colors with opacity are not supported.

## Replacing icons

If you have selected a layer that contains icon, which was previously imported with plugin,
you will see an option to replace that icon.

Option to replace icon already existed in the previous version of the plugin, but now it has been redesigned.

When replacing an icon, new icon will keep old icon's:
- Size.
- Color. Also supports color styles.

![Iconify for Figma: replacing icon](/assets/images/plugins/figma4_replace.png)

## Animated icons

Unfortunately, Figma does not support SVG animations.

But it does not mean you cannot use animated icons in your work.

The new version of the plugin allows you to import animated icons to Figma.
It will parse animations, remove animations and import static icon without animations.

This allows you to use animated icon in the design.

In production code, you can copy SVG with full animations from the Iconify website
or use Iconify icon components. 

![Iconify for Figma: animated icons](/assets/images/plugins/figma4_animations.png)

## Removed functions

Not all functions from the old version made it to the new version:
- Function to paste SVG (it also decoded icons wrapped in `[func]url()`).
- Option to minify the plugin window. This option might return if requested, but it is not available in first release.
- Various configuration options.

## Feedback

Feedback is welcome.

See `[str]feedback` page in the plugin or visit [support page on website](/support/index.md).
