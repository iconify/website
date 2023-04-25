API provider parameter can be used to specify that icon set belongs to specific API provider.

It can also be used to load custom icons asynchronously without triggering API queries. Each API provider has its own API endpoint, so if you are using custom API provider that component doesn't have configuration for (currently by default component has no API providers configured), component will not attempt to load missing icons from an unknown API provider.
