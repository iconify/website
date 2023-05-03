This tutorial is a part of [Iconify icon bundles tutorial](./index.md) and [Iconify for React documentation](/docs/icon-components/react/index.md).

Icon bundle is the easiest way to make Iconify components work without internet access. Instead of loading icon data from Iconify API, you can provide icon by loading icon bundle.

Use cases for icon bundles:

- Faster rendering. Preload frequently used icons, so icon data is available immediately and icons render instantly.
- Render icons offline without relying on Iconify API.
- Smaller bundle size when importing bundle than importing icons one by one.
