```yaml
title: cleanUpInnerHTML() in Iconify Utils
```

# cleanUpInnerHTML()

This function is part of [Iconify Utils package](./index.md).

Function allows assigning a string to `[prop]innerHTML` property of a DOM element in documents that use strict security policy `[str]require-trusted-types-for 'script';`.

This is a very basic function; it does not do any actual content clean up or validation.

It is designed to be used with Iconify icon components that render SVG, which has already been validated and cleaned up.

## Usage

Instead of this:

```js
node.innerHTML = '<p>Test</p>';
```

use this:

```js
import { cleanUpInnerHTML } from '@iconify/utils/lib/svg/inner-html';

node.innerHTML = cleanUpInnerHTML('<p>Test</p>');
```

If a browser supports security policy, it will return a cleaned-up string, without actually modifying anything.

If a browser does not support security policy, it will return string as is.

This is a simple workaround for an absolutely useless security policy.

## About require-trusted-types-for security policy

Security policy requires libraries to clean up HTML before assigning it to `[prop]innerHTML` property of a DOM element.

To add that policy to your document, all you have to do is add the following code to page header:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="require-trusted-types-for 'script';"
/>
```

However, be aware that policy does not provide any actual security and is pretty much useless!

The process of cleaning up HTML is not regulated in any way, it is up to a library to decide how to clean up HTML.
This means libraries can just emulate clean up without doing any actual clean up.
And that is exactly what this function does.

Your website security should not rely on such useless "security" policies.
