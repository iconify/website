```yaml
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
```

Icon name is a string, which has 3 parts:

`include api/namespaces/name`

Examples of valid icon names:

- `[icon]flat-color-icons:voice-presentation` - icon is `[str]voice-presentation` from [Flat Color Icons](https://icon-sets.iconify.design/flat-color-icons/) icon set, from public Iconify API.
- `[icon]mdi-light:home` - icon is `[str]home` from [Material Design Light](https://icon-sets.iconify.design/mdi-light/) icon set, from public Iconify API.

Exceptions:

- If API provider is empty, it can be skipped (like in examples above).
- If prefix does not contain `[str]-`, prefix and icon name can be separated with hyphen. This is to support people migrating from icon fonts. For example, `[icon]fa:arrow-left` and `[icon]fa-arrow-left` are identical because `[str]fa` does not contain hyphen.

There are over 60,000 icons available from 80+ icon sets. [Browse icons sets](https://icon-sets.iconify.design/) to see all available icons.

You can also add custom API providers for more icon choices. See [API providers documentation](/docs/api/providers.md).
