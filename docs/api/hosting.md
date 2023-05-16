# Hosting Iconify API

This article explains how to host Iconify on your server, so your website does not rely on Iconify public API servers.

[Iconify API](./index.md) software is available as Node.js script.

## Django Iconify

In addition to Iconify API mentioned above, there is a community created alternative for Django users: [django-iconify](https://pypi.org/project/django-iconify/).

See [django-iconify project page](https://pypi.org/project/django-iconify/) for configuration options and usage.

## Source code

Everything you need is available at [Iconify GitHub repositories](https://github.com/iconify):

- [Iconify API](https://github.com/iconify/api)
- [Open source icon sets](https://github.com/iconify/icon-sets)

## Node.js API {#node}

See [Iconify API: Node.js](./hosting-js/index.md) for installation and configuration instructions.

## API network

Iconify public API is hosted on multiple servers that form custom CDN. They are located in different parts of the world, and visitors are always redirected to the closest server.

Host does CDN help? By connecting visitors to the closest server, latency is greatly reduced:

- Visitors from US are connected to one of the servers located on different sides of the US.
- Visitors from Europe are connected to server in the UK or server in Germany.
- For visitors from Asia, there are servers in Singapore and Japan.
- For visitors from Oceania, there is a server in Australia.

Additional servers may be added in other regions when needed.

How else does it help? Redundancy. Downtime happens. If one server has issues, you can quickly disable it and visitors will be routed to a different server. There are tools to automate it, such as Route 53 health checks.

Would you like to set up your own CDN for Iconify API? See [setting up custom CDN tutorial](./cdn.md).

For added security, Iconify public API also CloudFlare service. However, that does not change anything. Instead of connecting visitor to the closest server, CDN is used to connect CloudFlare edge server to the closest API. Iconify API still greatly benefits from latency reduction offered by a custom CDN.
