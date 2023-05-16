API providers allow using icons from multiple API servers in the same document. For example, you can use default Iconify icons and custom icons from IconScout or Icons8 or custom API.

<namespaces-animation></namespaces-animation>

To support providers, the syntax for icon names has been extended. Icon names in Iconify icon components have 3 parts:

<namespaces-name></namespaces-name>

All parts are separated by `[str]:`, provider is optional and can be skipped if empty.

Examples:

- `[icon]@my-icons:line-24:home`: icon is retrieved from provider `[str]my-icons`. Icon name for that provider is `[icon]line-24:home`.
- `[icon]mdi-light:home`: icon does not have provider, so provider is empty. Empty value is used for public Iconify API.
