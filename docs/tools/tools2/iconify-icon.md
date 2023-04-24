```yaml
title: ResolvedIconifyIcon Type
standalone: true
navigation: './index.md'
types:
  IconifyIcon: '../../types/iconify-icon.md'
  FullIconifyIcon: '../utils/full-iconify-icon.md'
  IconSet: './icon-set/index.md'
```

# ResolvedIconifyIcon type

`[type]ResolvedIconifyIcon` type is used in [Iconify Utils](./index.md).

It is `[type]IconifyIcon` with added optional properties that exist in both `[type]ExtendedIconifyIcon` and `[type]ExtendedIconifyAlias`. Currently there is only one extra property:

- `[prop]hidden`, `[type]boolean`. If value is `true`, icon is hidden and should not be displayed in icons list. Usually this property is set for icons that used to exist in older version of icon set, but no longer exist.
