```yaml
title: 'Iconify for Ember Offline Use'
functions:
  addCollection: './add-collection.md'
  addIcon: './add-icon.md'
```

# Iconify for Ember offline use

```yaml
include: icon-components/components/intro-offline
```

See [icon bundles for Iconify for Ember](../../icon-components/bundles/ember.md) documentation.

## Available icons

`include icons/packages-intro`

If you want to use icon packages, as shown in example above, see [icon packages documentation](../../icons/icons.md) for more information.

### Icon packages {#modules}

Format for icon data packages:

- ES package: `[npm]@iconify-icons/{prefix}`
- CommonJS package: `[npm]@iconify/icons-{prefix}` (not needed for Ember)

where `[str]{prefix}` is icon set prefix.

In Ember components you should always use ES packages. CommonJS packages are for use with Node.js and outdated frameworks that do not support ES modules.

See [individual icon packages documentation](../../icons/icons.md).

#### Usage in Ember

In Ember components if you are using single package icons, you can either assign icon name to icon using `[func]addIcon()` or you can reference icon as object.

To reference icon as object, you need to import it in component and set it as property of component class:

```js
import Component from '@glimmer/component';
import presentationPlay from '@iconify-icons/mdi-light/presentation-play';

export default class IconDemoComponent extends Component {
	iconData = presentationPlay;
}
```

Then you can use it in template:

```hbs
<IconifyIcon @icon={{iconData}} />
```
