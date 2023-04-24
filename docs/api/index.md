```yaml
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '70 icon sets'
    value: '${counters.sets} icon sets'
  - code: '70 open source'
    value: '${counters.sets} open source'
```

# Iconify API

Iconify API is an open source hosted (or self-hosted) service for developers. What is Iconify API for?

- API provides icon data, which made it possible to create [Iconify icon components](../icon-components/index.md) that load icons demand.
- API [generates SVG](./svg.md), which developers can link to in HTML or stylesheet.
- API [generates CSS](./css.md) to render icons as background or mask images.
- API has a search engine for hosted icons, which can be used by icon pickers. Currently used by [Iconify plug-ins](../design/index.md) for various UI design tools.

API can be used to offer hundreds of thousands of icons in website builders or theme customisers. Host your own API, use API's search engine in custom icon picker to allow users select icons, use icon components in UI to render icons.

## Hosting API

You can host your own Iconify API service. [API script is open source](https://github.com/iconify/api).

By hosting Iconify API yourself you:

- Have full control over servers instead of relying on third party service.
- Can choose which icon sets to host or host your own icon sets.

See [hosting Iconify API](./hosting.md) for more details.

## Public API

Iconify project offers public API servers, which host over 60k icons from more than 70 open source icon sets.

To improve loading times, API is hosted on multiple servers in different parts of the world. Icons are usually loaded within fraction of a second.

Public API is available at `[url]https://api.iconify.design`.

It is a public service, servers are free to use, but please do keep in mind that running those servers is not free. If you are using public API or API software, [please consider supporting Iconify](https://iconify.design/sponsors/) to help out with infrastructure, development and maintenance costs.

### Redundancy

Sometimes there are problems with internet connections. It happens. Maybe server has issues, maybe visitor's ISP has issues.

In case main API host cannot be reached, Iconify public API has backup host names:

- `[url]https://api.simplesvg.com`
- `[url]https://api.unisvg.com`

Each of backup host names points to half of API servers. For example, in western Europe there are currently 2 servers: in Frankfurt and in London. Main host points to both, one of backup hosts points to server in Frankfurt, another backup host points to server in London. If server in Frankfurt goes down, users that are using that server can be redirected to server in London using one of backup host names.

Redundancy built in Iconify icon components accounts for that. It tries to connect to main host first, then, if there was no response in reasonable time (timeout is 0.75 seconds), it attempts to connect to one of backup hosts, then to another backup host. Small delay caused by check only affects first query, all further API queries are sent to host that responded.

See [building redundant API](./cdn.md) for more details.

## Queries

Iconify API can be used to render SVG, to retrieve icon data, to browse and search icons.

For full list of supported queries, their parameters and API responses see [Iconify API queries documentation](./queries.md).

## API providers

Iconify icon components can retrieve icons from multiple API servers.

This allows you to run your own API to serve only custom icons, while using public Iconify API to get data for open source icon sets.

See [Iconify API providers](./providers.md) for details.
