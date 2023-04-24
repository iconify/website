```yaml
title: HTTP Headers in Iconify API
```

# HTTP headers in API

This tutorial is a part of [Iconify API installation instructions](./index.md) for Node.js. This part of tutorial explains how to change HTTP headers that API server sends to visitors.

By default, server sends the following HTTP headers:

- Various CORS headers, allowing access from anywhere.
- Cache headers to cache responses for 604800 seconds (7 days).

To change headers, edit `[prop]httpHeaders` variable in `[file]src/config/app.ts`, then rebuild script:

If you prefer to use reverse proxy to send all extra headers, remove all unnecessary headers in file mentioned above and change configuration in reverse proxy.

## Configuring CORS in Apache {#cors-apache}

If you are using Apache as reverse proxy, you can disable CORS in API and enable it in Apache.

To enable CORS in Apache, add this to Apache configuration:

```apache
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, OPTIONS"
Header always set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding"
Header always set Access-Control-Max-Age "86400"
Header always set Cross-Origin-Resource-Policy "cross-origin"
```

## Configuring CORS in NGINX {#cors-nginx}

If you are using NGINX as reverse proxy, you can disable CORS in API and enable it in NGINX.

To enable CORS in NGINX, add this to NGINX configuration under `[prop]http` -> `[prop]server` -> `[prop]location`:

```nginx
if ($request_method = 'POST') {
   add_header 'Access-Control-Allow-Origin' '*';
   add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
   add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
   add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
   add_header 'Cross-Origin-Resource-Policy' 'cross-origin';
}
if ($request_method = 'GET') {
   add_header 'Access-Control-Allow-Origin' '*';
   add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
   add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
   add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
   add_header 'Cross-Origin-Resource-Policy' 'cross-origin';
}
```
