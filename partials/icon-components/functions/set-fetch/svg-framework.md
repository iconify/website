1. Install `[npm]cross-fetch` (if you are using CommonJS) or `[npm]node-fetch` (if you are using modules) as dependency.
2. Use internal `[func]setFetch()` function to set third party Fetch API before using any SVG framework functions.

```js
import Iconify from '@iconify/iconify';
import fetch from 'cross-fetch';
//  import fetch from 'node-fetch';

// Set Fetch API before doing anything
Iconify._api.setFetch(fetch);
```
