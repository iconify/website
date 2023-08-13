```yaml
title: Iconify for Figma
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '70+'
    value: '${counters.sets}+'
```

# Iconify for Figma

With Figma plugin you can:

- Import icons. You can also drag and drop icons from plugin to Figma.
- Quickly replace selected icon.
- See code for imported icons for developers.
- Import custom SVG by pasting code. It also decodes `[str]data:` URI.

It is completely free! Unlike other plugins that offer many icons, but require payment to use SVG, Iconify always imports icons as SVG. Iconify project is open source and offers only open source icon sets.

Plugin remembers last page you have visited, making it easy to continue searching or browsing icons. You can always reset plugin from options page.

For visitors that have small monitors, plugin offers compact mode. Click menu (3 lines) link, enable compact width option.

## Installation

You can install Iconify for Figma from [Iconify plugin page](https://www.figma.com/community/plugin/735098390272716381/Iconify).

## Usage

In Figma menu select `[str]Plugins`, then select `[str]Iconify`.

Browse or search icons, select any icon, click `[str]Import Icon` button or drag icon to Figma document.

After opening plugin you will see main page:

![Iconify for Figma: main page](/assets/images/plugins/figma_index.png)

Click any icon set or search icons. For example, search for "arrow left":

![Iconify for Figma: icon search results](/assets/images/plugins/figma_search.png)

Buttons above search results show icon sets, in which matching icons are available. By clicking any icon set button, plugin will show only results from that icon set.

You can drag and drop icon directly from search results:

![Iconify for Figma: drag and drop](/assets/images/plugins/figma_drag_drop.gif)

or you can select icon and scroll to footer, where you will see more options:

![Iconify for Figma: drag and drop](/assets/images/plugins/figma_footer.png)

When importing from footer you can:

- Set icon color (not available for icons with hardcoded palette).
- Change icon dimensions.
- Transform or rotate icon.
- Import icon as component.
- Get code for icon for developers.
- Replace previously imported icon (avialable only if previously icon's layer is selected in Figma).

By default, those options are not available for icons imported via drag and drop. You can change that behavior in plugin options (button on the left of "Import" in plugin menu).

### Footer options

In footer you can get code for selected icon:

![Iconify for Figma: icon code](/assets/images/plugins/figma_code.png)

For icons that do not have hardcoded palette, color picker is available, showing recently used colors and document colors:

![Iconify for Figma: color picker](/assets/images/plugins/figma_color_picker.png)

### Compact mode

If you have limited window space available, you can make plugin smaller.

Click compact window button in top right corner and plugin window will become much smaller:

![Iconify for Figma: compact mode](/assets/images/plugins/figma_compact.png)

You can also minimize plugin window by clicking button in top right corner. In minimized window you can restore plugin or close it:

![Iconify for Figma: minimized window](/assets/images/plugins/figma_minimized.png)

When importing an icon, you have option to automatically compact or minimize plugin window, making it easier to work on imported icon without closing plugin:

![Iconify for Figma: window options](/assets/images/plugins/figma_minimize.png)

### Recent icons

Plugin remembers recently imported icons. If you have replaced an icon, but decided to go back to old one, you can find previous icon in recent icons list:

![Iconify for Figma: recent icons](/assets/images/plugins/figma_recent.png)

Recent icons are not specific to current document, so you can see icons recently imported in other documents you have edited.

### Options

Plugin has options:

![Iconify for Figma: options](/assets/images/plugins/figma_options.png)

Options are stored in Figma application (or current browser if you are using Figma in browser), so you need to configure plugin only once.

## Support

If you have any questions, support for plugin is available at [Iconify for Figma GitHub repository](https://github.com/iconify/iconify-figma/).
