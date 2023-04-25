```yaml
types:
  IconifyIcon: '../../../types/iconify-icon.md'
  IconifyJSON: '../../../types/iconify-json.md'
  IconSet: './index.md'
```

There are 3 types of icon items in `[type]IconSet`: `[str]icon`, `[str]variation`, `[str]alias`.

`[str]icon` represents a full unique icon.

`[str]variation` represents variation of another icon. It has the following properties:

- `[prop]parent`, `[type]string`. Name of parent icon.

and at least one of the transformations:

- `[prop]rotate` rotation by `[num]90`, `[num]180` or `[num]270` degrees.
- `[prop]hFlip` horizontal flip.
- `[prop]vFlip` vertical flip.

Variations make it easy to create clones of icons, such as `[icon]arrow-left` after creating `[icon]arrow-right`.

`[str]alias` is an alternative name for icon. It has the following property:

- `[prop]parent`, `[type]string`. Name of parent icon.

Aliases can be created to have different name for icon. If you have renamed some icon, alias can be used to allow users use old name.
