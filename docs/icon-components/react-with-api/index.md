```yaml
title: Iconify for React with API
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
types:
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
  addIcon: './add-icon.md'
  iconExists: './icon-exists.md'
  listIcons: './list-icons.md'
  loadIcons: './load-icons.md'
  getIcon: './get-icon.md'
  enableCache: './enable-cache.md'
  disableCache: './disable-cache.md'
  addAPIProvider: './add-api-provider.md'
```

# Iconify for React with API

`include notices/react-with-api`

```yaml
include: icon-components/components/intro
```

## Component variations

There are two variations of Iconify for React:

- [Iconify for React](../react/index.md).
- Iconify for React with API (this documentation).

What is the difference?

### Iconify for React

[Iconify for React](../react/index.md) is a basic component. It works offline and does not have any dependencies. Icon data is provided as parameter to component.

```js
import { Icon } from '@iconify/react';
import home from '@iconify/icons-mdi-light/home';
```

```jsx
<Icon icon={home} />
```

### Iconify for React with API

Iconify for React with API is a more advanced component. It works similar to [SVG framework](../svg-framework/index.md). You do not need to provide icon data, you can reference icon by name and component will automatically retrieve icon data from Iconify API.

```js
import { Icon } from '@iconify/react-with-api';
```

```jsx
<Icon icon="mdi-light:home" />
```

Downside of such component is it requires internet access to retrieve icon data. You can provide icon data using [icon bundles](../../icon-components/bundles/index.md) to allow it to work offline.

## Installation

This documentation is for advanced component. [Click here](../react/index.md) for documentation for basic component.

If you are using NPM:

```bash
npm install --save-dev @iconify/react-with-api
```

If you are using Yarn:

```bash
yarn add --dev @iconify/react-with-api
```

## Usage

Install `[npm]@iconify/react-with-api` and import `[var]Icon` component from it:

```js
import { Icon } from '@iconify/react-with-api';
```

Then use `[var]Icon` component with icon name as `[prop]icon` parameter:

```jsx
<Icon icon="mdi-light:home" />
```

```yaml
include: icon-components/components/intro-online
```

### Offline use

```yaml
include: icon-components/components/intro-offline
```

See [icon bundles for Iconify for React](../../icon-components/bundles/react.md) documentation.

## Properties

You can pass any custom properties to `[var]Icon`.

Required properties:

- `[prop]icon`, `[type]IconifyIcon | string` icon name or icon data.

Optional properties:

- `[prop]inline`, `[type]boolean` toggles inline or block mode.
- `[prop]width`, `[type]string | number` icon width.
- `[prop]height`, `[type]string | number` icon height.
- `[prop]hFlip`, `[type]boolean` flips icon horizontally.
- `[prop]vFlip`, `[type]boolean` flips icon vertically.
- `[prop]flip`, `[type]string` alternative to `[prop]hFlip` and `[prop]vFlip`.
- `[prop]rotate`, `[type]number | string` rotates icon.
- `[prop]color`, `[type]string` changes icon color.
- `[prop]hAlign` horizontally aligns content inside icon.
- `[prop]vAlign` vertically aligns content inside icon.
- `[prop]slice` alignment behaviour: `[str]meet` or `[str]slice`.
- `[prop]align`, `[type]string` aligns content inside icon, alternative to `[prop]hAlign`, `[prop]vAlign` and `[prop]slice`.

See below for more information on each optional property.

In addition to the properties mentioned above, the icon component accepts any other properties and events. All other properties and events will be passed to generated SVG element, so you can do stuff like assigning `[prop]onClick` event, setting the inline style, add title and so on.

## Icon

```yaml
include: icon-components/components/intro-icon
```

## Color

```yaml
include: icon-components/components/intro-color
```

```jsx
<Icon icon="mdi:home" style={{ color: 'red' }} />
```

For various ways to set color, see [how to change icon color in Iconify for React](./color.md).

## Dimensions and alignment

```yaml
include: icon-components/components/intro-size
```

```jsx
<Icon icon="mdi:home" style={{ fontSize: '24px' }} />
```

For various ways to change icon dimensions, see [how to change icon dimensions in Iconify for React](./dimensions.md).

## Transformations

```yaml
include: icon-components/components/intro-transform
```

For more details see [how to transform icon in Iconify for React](./transform.md).

## Functions {#functions}

This component offers functions, which developers can use to control icons.

Functions are split in several groups (click function name to see more details and examples):

### Check available icons {#getting-icons}

There are several functions in this section:

- `[func]iconExists(name)`. Checks if data for icon is available, returns `[type]boolean`.
- `[func]listIcons()`. Lists available icons, returns `[type]string[]`.
- `[func]getIcon(name)`. Returns icon data, returns `[type]IconifyIcon` object.

### Adding icons {#adding-icons}

Functions for adding icons to component:

- `[func]addIcon()`. Adds one icon.
- `[func]addCollection()`. Adds an icon set.

Note: icons added to component with these functions are not stored in cache. Component caches only icons retrieved from API.

### Helper functions {#helper}

- `[func]replaceIDs(html)`. Randomizes IDs in generated string. This should be used when rendering icon based on data returned by `[func]getIcon()` to make sure elements inside each icon have unique IDs.
- `[func]calculateSize()`. Calculates icon size. It is used to calculate `[attr]width` if only `[attr]height` is set and vice versa.

### API functions {#api}

- `[func]loadIcons(icons, callback?)`. Loads icons from API, calls optional callback when either all or part of icons have been loaded.
- `[func]enableCache()`. Enables caching in `[prop]localStorage` and `[prop]sessionStorage`.
- `[func]disableCache()`. Disables caching in `[prop]localStorage` and `[prop]sessionStorage`.
- `[func]addAPIProvider()`. Adds custom API provider. See [API providers documentation](../../api/providers.md).

### Internal API functions {#internal}

`include icon-components/components/functions-list/internal-intro`

All internal API functions are exposed as properties of `[var]_api` object:

- `[func]getAPI()`. Returns internal API module.
- `[func]getAPIConfig()`. Returns API configuration.
- `[func]setAPIModule(provider)`. Sets API module for provider. This is experimental function intended for custom API providers. API provider functionality is in development.
