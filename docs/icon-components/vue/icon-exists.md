```yaml
title: "Iconify for Vue Function: iconLoaded"
functions:
  getIcon: "./get-icon.md"
  loadIcons: "./load-icons.md"
```

# Iconify for Vue function: iconLoaded

This tutorial is part of [Iconify for Vue functions tutorial](./index.md#functions).

`include icon-components/functions/icon-loaded/intro`

## Usage

`include icon-components/functions/icon-loaded/props`

## Example

```js
import { iconLoaded } from "@iconify/vue";

const icon = "bi:arrow-left";
console.log(`Is ${icon} available?`, iconLoaded(icon) ? "yes" : "no");
```

This example dynamically loads icon data and renders `[html]<slot />` while icon is being loaded. It is redundant because Vue component already does that, but it is used to show how to use `[func]iconLoaded()` and `[func]loadIcons()`, though instead of `[func]iconLoaded()` it is better done with `[func]getIcon()`.

```js
import { Icon, iconLoaded, loadIcons } from "@iconify/vue";
import { h, defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    Icon,
  },
  props: ["icon"],
  setup() {
    // Variable to store function to cancel loading
    const loader = ref(null);

    // Icon status
    const loaded = ref(null);

    // Function to check if icon data is available
    const check = (icon: string) => {
      const isLoaded = (loaded.value = iconLoaded(icon));

      // Cancel old loder
      if (loader.value) {
        loader.value();
        loader.value = null;
      }

      if (!isLoaded) {
        loader.value = loadIcons([icon], () => {
          loaded.value = iconLoaded(icon);
        });
      }
    };
    return {
      loader,
      loaded,
      check,
    };
  },
  watch: {
    icon: {
      immediate: true,
      handler(value) {
        // Check new value
        this.check(value);
      },
    },
  },
  // Stop loading
  unmounted() {
    const loader = this.loader.value;
    if (loader) {
      loader();
    }
  },
  render() {
    const loaded = this.loaded;
    if (loaded) {
      return h(Icon, {
        icon: this.icon,
      });
    }
    return this.$slots.default ? this.$slots.default() : null;
  },
});
```

## Legacy

`include icon-components/functions/icon-loaded/legacy`
