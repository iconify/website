```yaml
title: "Iconify for React Function: iconLoaded"
```

# Iconify for React function: iconLoaded

This tutorial is part of [Iconify for React functions tutorial](./index.md#functions).

`include icon-components/functions/icon-loaded/intro`

## Usage

`include icon-components/functions/icon-loaded/props`

## Example

```jsx
import { iconLoaded, loadIcons, Icon } from "@iconify/react";

function renderLeftArrow() {
  // Check if 'bi:arrow-left' is available
  if (iconLoaded("bi:arrow-left")) {
    // Return HTML for 'bi:arrow-left'
    return <Icon icon="bi:arrow-left" />;
  }

  // Load icon. Bad example because this should use a callback to re-render arrow in a stateful
  // component, but this code example is about iconLoaded(), not loadIcons()

  // Function loadIcons() is asynchronous, so in this example it will only trigger loading, but
  // icon data will not be available immediately
  loadIcons(["bi:arrow-left"]);

  // Return '<'
  return <span>&lt;</span>;
}
```

## Legacy

`include icon-components/functions/icon-loaded/legacy`
