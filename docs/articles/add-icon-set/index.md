```yaml
title: How to add icon set to Iconify
```

# How to add icon set to Iconify

If you have created an icon set, please consider sharing it with Iconify community.

## Benefits

What are the benefits of publishing an icon set to Iconify?

- Icons become available to thousands of users that [use projects that get icon data from Iconify](/docs/usage/index.md).
- Iconify is open source, all icon sets are also open source and they are used by many open source projects. Do you feel like contributing to open source projects?
- Each icon set has an information section, which includes author name and link to repository. It is shown on websites that list icons, it is shown in Figma and Sketch plugin. It might get you some visitors, followers and links for search engines.

## Adding icon set

To add an icon set to Iconify, all you need to is [open an issue on Iconify icon sets repository on GitHub](https://github.com/iconify/icon-sets).

In opened issue you need to post:

- A link to icons. See below.
- Each icon set has a prefix, such as `[icon]mdi-light`. You can post prefix you want be assigned to your icon set.

### Icon set source

Icon sets are automatically updated several times a week.
In order to update icon set, icons must be published and maintained by developer on one of the following sources:

- Public git repository (GitHub, GitLab, etc...) containing SVG files.
- NPM package containing SVG files.
- Figma document. You need to share the file and post link to it.

Updates must be automated, so manually downloading icons from a third party website is not an option.

### Open source

All icon sets must be open source and have a valid open source license.

If you are not sure about licenses, [check out various icon sets](https://icon-sets.iconify.design/). Click any icon set, it will show license and link to license text.

Popular licenses:

- [MIT](https://opensource.org/licenses/MIT).
- [Apache 2.0](https://opensource.org/licenses/Apache-2.0).
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

See [Open Source Initiative](https://opensource.org/licenses) for more licenses.

### Bad icon sets

Not all icon sets are the same. There are good and bad icon sets. Bad icon sets are not accepted.

Most common reasons:

- Icon set should be useful to community. If icon set is specific to your website, such as your website logos, it is not really useful to other developers.
- Icons, not illustrations. Icon sets must contain only icons, which can be used as a small icon, not as a large image. Collections of vector images with high details, that are meant to be used as large images are not acceptable.
- No icons exported from fonts. Icons exported from fonts are almost always badly aligned, not following any logical grid system. They are very low quality and not usable as SVG.

## Design tips

If you are new to icon design, [Google Material Icons website has excellent guidelines for designing icons](https://material.io/design/iconography/system-icons.html#grid-and-keyline-shapes).

Those guidelines are specific to material design, but the same principles apply to most icons. Even though icons are vector images, displays are pixel devices and icon edges are blurred if shape is not aligned to the edge of a pixel. Icon sets that follow a specific grid, have padding, shapes aligned to pixel edges, are the best looking icon sets.
