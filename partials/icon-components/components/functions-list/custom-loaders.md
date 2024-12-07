Custom loaders can be used to load icons from custom sources:

- `[func]setCustomIconLoader()`. Loads one icon.
- `[func]setCustomIconsLoader()`. Loads icons in bulk.

Loaders are set per icon set prefix. Make sure to configure loader before displaying any icons.

It can also be used to customise icons: in custom loader you can load icon from API using `[func]loadIcon`, change its content (such as colors or stroke width) and return modified icon.
