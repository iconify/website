```yaml
title: Collection class in Iconify JSON Tools
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyJSON: '../../types/iconify-json.md'
```

# Collection class in Iconify JSON Tools

`include notices/json-tools`

Iconify JSON Tools is a lightweight library for working with icon sets in Iconify JSON format. See [Iconify JSON Tools documentation](./index.md).

Collection class represents an icon set.

To include it use this code:

```yaml
src: tools/json/collection.js
title: Node.js
extra:
  - src: tools/json/collection.php
    title: PHP
```

What can Collection class do?

- Read and write JSON collections.
- Add, remove, list icons in an icon set.
- Retrieve icon data.
- Create icon bundles for Iconify icon sets.

## Initializing Collection instance

There are two ways to create an instance: with icon set prefix and without icon set prefix.

You can skip icon set prefix in the constructor if you are going to load data from a JSON file because JSON files contain icon set prefix.

```yaml
src: tools/json/new-collection.js
title: Node.js
extra:
  - src: tools/json/new-collection.php
    title: PHP
```

```yaml
src: tools/json/new-collection2.js
title: Node.js
extra:
  - src: tools/json/new-collection2.php
    title: PHP
```

## Loading JSON data {#loading}

There are several functions to load an icon set from JSON file:

- `[func]loadFromFile()` loads collection synchronously.
- `[func]loadFromFileAsync()` loads collection asynchronously (not available in PHP version).
- `[func]loadJSON()` loads JSON data from string or object.
- `[func]loadIconifyCollection()` loads Iconify collection from `[npm]@iconify/json` NPM repository (Node.js) or `[packagist]iconify/json` Packagist repository (PHP).

### loadFromFile() {#load-from-file}

This function loads an icon set from a JSON file.

Function parameters:

- `[attr]file`, `[type]string` file to load data from.
- `[attr]defaultPrefix`, `[type]string` optional default prefix in case if JSON file does not have it.
- (PHP only) `[attr]cacheFile`, `[type]string` cache file for a parsed icon set. Use this to speed up loading.

Function returns `[type]boolean` value: `[bool]true` on success, `[bool]false` on failure.

```yaml
src: tools/json/load-from-file.js
title: Node.js
extra:
  - src: tools/json/load-from-file.php
    title: PHP
  - src: tools/json/load-from-file-cached.php
    title: PHP with cache
    hint: Cache should be located in writable directory.
```

### loadFromFileAsync() {#load-from-file-async}

This function is similar to `[func]loadFromFile()`, but it returns `[class]Promise` and loads file asynchronously.

This function is not available in PHP version of this library.

```yaml
src: tools/json/load-from-file-async.js
title: Node.js
```

### loadJSON() {#load-json}

This function loads an icon set from a `[type]string` or an `[type]object` (`[type]array` for PHP).

Function parameters:

- `[attr]data`, `[type]IconifyJSON` or `[type]string` JSON string or object.
- `[attr]prefix`, `[type]string` optional prefix if JSON file doesn't include one.

Function returns `[type]boolean` value: `[bool]true` on success, `[bool]false` on failure.

```yaml
src: tools/json/load-json.js
title: Node.js
extra:
  - src: tools/json/load-json.php
    title: PHP
```

### loadIconifyCollection() {#load-iconify}

This function loads Iconify icon set from [@iconify/json](https://github.com/iconify/icon-sets) repository.

Function parameters:

- `[attr]name`, `[type]string` name of the icon set.
- `[attr]dir`, `[type]string` optional root directory of Iconify icon set. Use this option if you want to load Iconify icon set from a custom directory instead of the `[npm]@iconify/json` repository.

Function returns `[type]boolean` value: `[bool]true` on success, `[bool]false` on failure.

```yaml
src: tools/json/load-iconify.js
title: Node.js
extra:
  - src: tools/json/load-iconify.php
    title: PHP
```

Unless you are using second parameter to point to a custom directory where icon sets are located, make sure that `[npm]@iconify/json` is installed before using this function. To install it, run this:

```yaml
src: tools/json/install-json-js.sh
title: Node.js
extra:
  - src: tools/json/install-json-php.sh
    title: PHP
```

## Caching icon sets

This section applies only to PHP version of library.

PHP loads icon sets on every page load, so it makes sense not to parse the same data many times. This is why PHP version of the library has caching functions.

### loadFromCache() {#load-from-cache}

This function loads icon set from the cache.

Function parameters:

- `[attr]$filename`, `[type]string` cached filename.
- `[attr]$time`, `[type]number` time stamp (retrieved with `[func]filemtime()` function) of the original JSON file. This parameter is used to invalidate cache if JSON file has been updated since the last time cache was saved.

Function returns `[type]boolean` value: `[bool]true` on success, `[bool]false` on failure.

```yaml
src: tools/json/load-from-cache.php
title: PHP
```

### saveCache() {#save-cache}

Stores icon set data in the cache.

This function does not return anything.

For a usable example, see `[func]loadFromCache()` example above.

## Getting icon data {#icon-data}

Several functions can be used to retrieve icon data from an icon set:

- `[func]getIconData()` returns full data for one icon. It can be used to generate SVG (see [SVG class documentation](./svg.md)) or for Iconify components.
- `[func]getIcons()` returns JSON data for icons, which can be used to import to another JSON collection or can be added to Iconify SVG framework using `[func]Iconify.addCollection()`.
- `[func]scriptify()` returns JavaScript bundle file that can be used to load icons in browser with Iconify SVG Framework.

### getIconData() {#get-icon-data}

This function returns JSON data for one icon. It returns full data that can be used to generate SVG.

Function parameters:

- `[attr]name`, `[type]string` icon name.
- `[attr]normalize`, `[type]boolean` optional parameter. If `[bool]false`, result will not include optional fields. If `[bool]true` (default value), result will include optional data. Set to `[bool]false` if you are exporting data to use in Iconify components, such as Iconify for React, set to `[bool]true` if you are exporting data to create [SVG class instance](./svg.md).

Function returns `[type]IconifyIcon` object.

```yaml
src: tools/json/get-icon-data.js
title: Node.js
extra:
  - src: tools/json/get-icon-data.php
    title: PHP
```

### getIcons() {#get-icons}

This function returns JSON data for selected icons. If used without parameters, it returns JSON data for an entire icon set.

Function parameters:

- `[attr]icons`, `[type]string[]` array of icon names.

Function returns `[type]IconifyJSON` object.

```yaml
src: tools/json/get-icons.js
title: Node.js
extra:
  - src: tools/json/get-icons.php
    title: PHP
```

This function can also be used to copy collection.

```yaml
src: tools/json/get-icons2.js
title: Node.js
extra:
  - src: tools/json/get-icons2.php
    title: PHP
```

Using `[func]getIcons()` without parameters is the same as accessing `[js]collection.items` object in Node.js or `[php]$collection->items` array in PHP.

Warning: In Node.js if you use `[func]getIcons()` without parameters, editing result object will affect data stored in collection instance. `[func]getIcons()` does not make a copy of the object if you request an entire collection. This does not apply to PHP version of this library.

To make a proper copy of collection in Node.js, you should serialize and unserialize data:

```yaml
src: tools/json/get-icons3.js
title: Node.js
hint: This does not apply to PHP version.
```

### scriptify() {#scriptify}

This is similar to `[func]getIcons()`, but it generates a JavaScript file instead of JSON data and uses different parameters.

Function parameters:

- `[prop]options` options object.

Options object properties:

- `[prop]icons`, `[type]string[]` an array of icons to retrieve. If not set or `[object]null`, all icons will be retrieved.
- `[prop]optimize`, `[type]boolean`. If set to `[bool]true`, JSON data will be optimized to make output smaller.
- `[prop]pretty`, `[type]boolean`. If set to `[bool]true`, JSON data will include white spaces that make output easy to read.
- `[prop]callback`, `[type]string`. JavaScript callback to wrap JSON data in. The default value is `[str]Iconify.addCollection` for use with Iconify SVG Framework.

Code to create a bundle with selected icons from one collection (repeat same code for different collections to make bundle of all icons used on website):

```yaml
src: tools/json/scriptify.js
title: Node.js
extra:
  - src: tools/json/scriptify.php
    title: PHP
```

## Manipulating icons {#manipulation}

There are several functions for manipulating icons:

- `[func]addIcon()` adds a new icon.
- `[func]addAlias()` adds an alias for an existing icon.
- `[func]setDefaultValue()` sets default value for an icon property.
- `[func]removeIcon()` removes an icon or an alias.
- `[func]iconExists()` checks if an icon or an alias exists.
- `[func]listIcons()` lists all icons.

### addIcon() {#add-icon}

This function adds a new icon to the icon set.

Function parameters:

- `[prop]name`, `[type]string` icon name.
- `[prop]data`, `[type]IconifyIcon` icon data.

Function returns:

Function returns `[type]boolean` value: `[bool]true` on success, `[bool]false` on failure. Failure is possible if an icon is missing `[prop]body` property of if the icon set has no `[prop]prefix`.

```yaml
src: tools/json/add-icon.js
title: Node.js
extra:
  - src: tools/json/add-icon.php
    title: PHP
```

### addAlias {#add-alias}

This function adds an alias for an existing icon.

Function parameters:

- `[prop]name`, `[type]string` icon name.
- `[prop]parent`, `[type]string` parent icon name.
- `[prop]data`, `[type]IconifyIcon` icon data.

Function returns `[type]boolean` value: `[bool]true` on success, `[bool]false` on failure. Failure is possible if the parent icon is missing.

```yaml
src: tools/json/add-alias.js
title: Node.js
extra:
  - src: tools/json/add-alias.php
    title: PHP
```

### setDefaultIconValue() {#set-default-icon-value}

Set default value for a property for all icons.

Function parameters:

- `[prop]key`, `[type]string` property name.
- `[prop]value` property value.

```yaml
src: tools/json/set-default-value.js
title: Node.js
extra:
  - src: tools/json/set-default-value.php
    title: PHP
```

This function is used to set a property for all icons that are missing that property. It affects icons added before and after `[func]setDefaultIconValue()` call.

For example, if an icon set has only 24x24 icons, you can set default `[prop]width` and `[prop]height` to 24 and add icons without `[prop]width` and `[prop]height`:

```yaml
src: tools/json/set-default-value2.js
title: Node.js
extra:
  - src: tools/json/set-default-value2.php
    title: PHP
```

### removeIcon() {#remove-icon}

Removes an icon or an alias from the icon set.

Function parameters:

- `[prop]name`, `[type]string` icon name.
- `[prop]checkAliases`, `[type]boolean`, optional. If `[bool]true`, the icon set will be checked for aliases that use the removed icon as parent icon and those aliases will be removed too. Set to `[bool]false` if you know for sure there are no aliases referencing this icon, otherwise set to `[bool]true`.

```yaml
src: tools/json/remove-icon.js
title: Node.js
extra:
  - src: tools/json/remove-icon.php
    title: PHP
```

### iconExists() {#icon-exists}

Checks if an icon or an alias exists.

Function parameters:

- `[prop]name`, `[type]string` icon name.

Function returns `[type]boolean` value: `[bool]true` if icon exists, `[bool]false` if not.

```yaml
src: tools/json/icon-exists.js
title: Node.js
extra:
  - src: tools/json/icon-exists.php
    title: PHP
```

### listIcons() {#list-icons}

Lists all icons in an icon set.

Function parameters:

- `[prop]includeAliases`, `[type]boolean`. Value is `[bool]true` if function should list all icon aliases, `[bool]false` if not. The default value is `[bool]false`.

Function returns `[type]string[]` array of icon names.

```yaml
src: tools/json/list-icons.js
title: Node.js
extra:
  - src: tools/json/list-icons.php
    title: PHP
```

## Other functions and properties

There are several functions and properties that do not fall in mentioned above sections:

### items

This is a property, not a function. You can use it to have access to raw JSON data, making it easy to modify internal data.

Due to differences between PHP and Node.js, in Node.js version `[prop]items` value is the same as using `[func]getIcons()` without parameters.

### prefix() {#prefix}

Returns the icon set prefix, `[bool]false` if the icon set has no prefix.

```yaml
src: tools/json/get-prefix.js
title: Node.js
extra:
  - src: tools/json/get-prefix.php
    title: PHP
```

### findIconifyCollection() {#find-iconify-collection}

This is a static function locates Iconify icon set from [@iconify/json](https://github.com/iconify/icon-sets) repository.

Function parameters:

- `[attr]name`, `[type]string` name of the icon set.
- `[attr]dir`, `[type]string` optional root directory of Iconify icon set. Use this option if you want to load Iconify icon set from a custom directory instead of the `[npm]@iconify/json` repository.

Function returns `[type]string` value: location of JSON file. On error function will throw an exception.

```yaml
src: tools/json/find-collection.js
title: Node.js
extra:
  - src: tools/json/find-collection.php
    title: PHP
```

### optimize() {#optimize}

Optimize is a static function that optimizes JSON data. It modifies the object passed in the first parameter.

Function parameters:

- `[attr]data`, `[type]IconifyJSON` raw data.
- `[attr]props`, `[type]string[]` optional list of properties to optimize. Ignore this parameter unless you need to optimize a custom property.

This function modifies variable passed as first parameter.

```yaml
src: tools/json/optimize.js
title: Node.js
extra:
  - src: tools/json/optimize.php
    title: PHP
```

### deOptimize() {#de-optimize}

Opposite of the previous function. It converts optimized JSON data into full JSON data, making it easy to retrieve data for each icon.

Function parameters:

- `[attr]data`, `[type]IconifyJSON` raw data.

This function modifies variable passed as first parameter.

```yaml
src: tools/json/de-optimize.js
title: Node.js
extra:
  - src: tools/json/de-optimize.php
    title: PHP
```
