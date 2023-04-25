If you want to use `[func]require()`, replace first line of bundle with this:

```js
const { addCollection } = require('@iconify/react');
```

and use `[func]require()` to load bundle:

```js
require('./bundle.js');
```
