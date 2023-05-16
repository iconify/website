# Hosting Iconify API

This documentation is for the Node.js version of [Iconify API](../index.md).

To install API, first clone or download Iconify API from GitHub: [https://github.com/iconify/api](https://github.com/iconify/api).

## How to use it

First, you need to install NPM dependencies and run build script:

```sh
npm install
npm run build
```

Then you can start server:

```sh
npm run start
```

By default, server will:

- Automatically load the latest icons from [`[npm]@iconify/json`](/docs/icons/all.md).
- Serve data on port `[num]3000`.

You can customise API to:

- Serve custom icon sets, loaded from various sources.
- Run on a different port.
- Disable search engine if you do not need it, reducing memory usage.

## Port and HTTPS

It is recommended that you do not run API on port `[num]80`.
Server can handle pretty much anything, but it is still not as good as a dedicated solution such as nginx.

Run API on obscure port, hidden from the outside world with firewall rules, use nginx as reverse proxy.

HTTPS is not supported.
It is a very resource intensive process, better handled by a dedicated solution such as nginx.
Use nginx to run as HTTP and HTTPS server,
forward queries to API HTTP server on hidden port such as default port `[num]3000`.

## Configuration

There are several ways to change configuration:

- Editing files in `[file]src/config/`, then rebuilding script. This is required for some advanced options, such as using API with custom icons.
- Using environment variables, such as `[bash]PORT=3100 npm run start`.
- Using `[file].env` file to store environment variables.

See [Iconify API configuration](./config.md) for details.

## Starting server

To start server, run

```sh
npm run start
```

### PM2

To make sure API runs without interruption, use [pm2](https://github.com/Unitech/PM2/) or similar Node.js process manager to run application.

It will automatically restart API if something goes wrong and will automatically start API if the server is restarted.
Sometimes host server might restart for whatever reason, this will make sure the API is always running.
