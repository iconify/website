```yaml
title: Icon set information
types:
  IconSet: './index.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  export: './export.md'
```

# info

This property is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Property `[prop]info` contains icon set information in `[type]IconifyInfo` format.
It includes icon set name, license, author information and some other data relevant when displaying an icon set.

If an icon set does not have the information block, value is `[type]null`.

You can write to property directly to update value.

## Value

Value is used when exporting icon set using `[func]export()` function.

Icons count in `[prop]info` property is automatically updated when running `[func]export()` function,
so no need to update it manually.
