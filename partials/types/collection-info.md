In addition to properties in `[type]IconifyInfo` type, Icon Finder adds the following properties:

- `[prop]prefix`, `[type]string`. Prefix. Duplicate of property in parent object, but this object is re-used in other places where `[prop]prefix` is not provided, so duplication is needed.
- `[prop]index`, `[type]number`. Icon set index. It is used to rotate colors in collections list. Each icon set is assigned unique number and to make sure the same color is used for the same icon set everywhere, color is passed in this property instead of using `[func]nth-child()` in stylesheet.
