```yaml
title: Iconify API Providers
types:
  APIConfig: ./providers.md#api-config
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '@iconify/iconify@2'
    value: '${svg-framework.import}'
  - code: '*$/;' # get rid of auto-formatting for regexp
    value: '*$/'
  - code: 'https://github.com/iconify/iconify/issues'
    value: '${links.issues}'
  - code: 'https://github.com/iconify/iconify/sponsors'
    value: '${links.sponsor}'
```

# Iconify API providers

If you are publishing icons, you can host your own Iconify API server that includes only your icons and give access to it to other users. Iconify icon components can retrieve icon data from multiple independent Iconify API servers.

How is it done?

<namespaces-animation></namespaces-animation>

## Provider in icon name

Icon names in Iconify icon components have 3 parts:

<namespaces-name></namespaces-name>

All parts are separated by `[str]:`, provider is optional and can be skipped if empty.

Examples:

- `[icon]@my-icons:line-24:home`: icon is retrieved from provider `[str]my-icons`. Icon name for that provider is `[icon]line-24:home`.
- `[icon]mdi-light:home`: icon does not have provider, so provider is empty. Empty value is used for public Iconify API.

Provider naming rules are the same as for prefix and name, but with exception that it can be empty:

```txt
/^[a-z0-9]+(-[a-z0-9]+)*$/;
```

That regular expression means name must start with character or number, followed by mix of characters, numbers and hyphen. Other characters are not allowed.

## Adding API provider

All icon components have function `[func]addAPIProvider()`. For SVG framework it is `[func]Iconify.addAPIProvider()`, for other components you need to import it from component.

Example for [React component](../icon-components/react/index.md):

```js
import { addAPIProvider } from '@iconify/react';

addAPIProvider('local', {
	// Array of host names.
	// Mutliple hosts allow redundancy: if one host is down, component will query another host.
	resources: ['http://localhost:3000'],
});
```

Function has 2 parameters:

- provider, `[type]string`. Provider name. You can also overwrite configuration for default provider by using empty string.
- config, `[type]APIConfig`. API configuration.

For more details see [addAPIProvider documentation from SVG framework](../icon-components/svg-framework/add-api-provider.md).

### IconifyProviders

Sometimes using function `[func]addAPIProvider()` is not simple. For example, if you are using SVG framework that is placed at the end of file before `[tag]</body>`.

There is alternative solution: assigning API providers to global variable `[var]IconifyProviders` before loading SVG framework. When SVG framework loads, it checks if variable exists and automatically imports all providers from it.

Format is simple: it is an object, where key is provider name, value is configuration. Example, which does the same as example above:

```html
<script>
	IconifyProviders = {
		local: {
			resources: ['http://localhost:3000'],
		},
	};
</script>
<script src="https://code.iconify.design/2/2.0.0/iconify.min.js"></script>
```

Components also support it, but components are usually bundled, so you should be able to use `[func]addAPIProvider()` instead of polluting global variables.

## Using API provider

After you add configuration for API provider, which is one simple function call, you can use icons from that API provider.

All you have to do is add provider to icon name. Provider in icon name must match first parameter to `[func]addAPIProvider()`:

```html
<span class="iconify" data-icon="@icons8:ios-glyphs:color-dropper"></span>
```

```yaml
src: icon-components/react-with-api/provider.jsx
```

## Authentication

Currently Iconify does not offer authentication options.

If you want to use API providers functionality to host premium icon sets or restrict access, you should add your own authentication logic to both API and clients. Doing that might be tricky due to lack of documentation for internal code, if you need any help, [open an issue at Iconify GitHub repository](https://github.com/iconify/iconify/issues).

It is on a roadmap for premium edition of Iconify API software, which should make hosting premium icon sets very easy. However, that functionality is far away due to lack of development resources. You can help by [sponsoring Iconify on GitHub](https://github.com/iconify/iconify/sponsors) (click "Sponsor" button).

## API Config

Type `[type]APIConfig` passed to `[func]addAPIProvider()`, is an object.

Properties:

- `[prop]resources`, `[type]string[]`. List of host names, required. Must start with `[str]https://` or `[str]http://`, should not contain path.
- `[prop]path`, `[type]string`. Path to root directory. Default value is `[str]/`.
- `[prop]rotate`, `[type]number`. Timeout before the next host is used, in milliseconds. Default value is `[num]750`.
- `[prop]timeout`, `[type]number`. Timeout before the API query is considered failed, in milliseconds. Default value is `[num]5000`.

Examples:

```js
import { addAPIProvider } from '@iconify/svelte';

// Override default API provider with Iconify API hosted at 'https://iconify.my-project.com'
addAPIProvider('', {
	resources: ['https://iconify.my-project.com'],
});
```

```html
<script>
	// Define global variable
	IconifyProviders = {
		// Empty prefix: overwrite default API provider configuration
		'': {
			// Use custom API first, use Iconify public API as backup
			resources: [
				'https://iconify.my-project.com',
				'https://api.iconify.design',
			],
			// Wait for 1 second before switching API hosts
			rotate: 1000,
		},
	};
</script>
<script src="https://code.iconify.design/2/2.0.0/iconify.min.js"></script>
```

## Provider name

Provider name is specific to your code. It is used only to associate icon with API configuration. Actual API server has no effect on what you call provider.

That means you can change it to whatever you want. Make sure you are using the same provider id in all your code.
