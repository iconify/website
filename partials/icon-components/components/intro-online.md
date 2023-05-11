```yaml
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
```

Component will automatically retrieve data for `[icon]mdi-light:home` from Iconify API and render it. There are over 60,000 icons available on Iconify API from various free and open source icon sets, including all the most popular icon sets.

Availability of Iconify API is the biggest feature that makes Iconify components different from alternatives.

API sends data for icons on demand. Loading icons on demand has massive advantages over other methods:

- There can be unlimited number of icons, giving you more choices. Icons you do not use are not loaded.
- No useless data. Icon sets usually have thousands of icons. Instead of bundling all icons, component retrieves only icons you use.
