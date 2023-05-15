```yaml
title: Reverse Proxy for Iconify API
```

# Reverse proxy for Iconify API

This tutorial is a part of [Iconify API installation instructions](./index.md).

It explains how to configure reverse proxy for hosting Node.js version of [Iconify API](../index.md) in a custom hosting environment.

## Why is it needed?

What is reverse proxy and why is it needed?

Running Node.js applications on port `[num]3000` without reverse proxy is fine for localhost development,
but usually it is not fine for production.

In a production environment, you want stability and HTTPS support.
That should be delegated to a reverse proxy.
Reverse proxy allows you to add HTTPS support, add security features such as rate limiting.

Reverse proxy handles HTTP and HTTPS requests, forwards them to Node.js application and returns response to customer.
It is useful if you want to:

- Run API on a different port, so you can host multiple websites on the same server instead of only hosting API.
- Handle HTTPS requests. Web server will handle all SSL stuff.
- Dealing with bad customers. You can use web server rules to block misbehaving customers and bots.
- Using API on subdirectory rather than custom sub-domain.

### CloudFlare

You can avoid this by using service like CloudFlare. It handles all HTTPS requests and deals with security stuff.

If you are using such service, you can run API on port 80 and forget about reverse proxy.

## Configuration

Before configuring reverse proxy, you need to make sure Iconify API runs on a port hidden from the outside world.

Default port is `[num]3000`. See [API configuration](./config.md) for details.

### Apache 2.4 {#apache}

This section explains how to create a reverse proxy with Apache 2.4.

In `[file]httpd.conf` you need to uncomment these 2 lines to enable `[prop]mod_proxy`:

```apache
LoadModule proxy_module libexec/apache2/mod_proxy.so
LoadModule proxy_http_module libexec/apache2/mod_proxy_http.so
```

Then you can add `[prop]mod_proxy` to virtual host like this:

```apache
<VirtualHost *>
    ServerName api.yourdomain.com
    ProxyPass "/" "http://localhost:3000/"
    ProxyPassReverse "/" "http://localhost:3000/"
</VirtualHost>
```

This configuration will allow you to access API at `[url]http://api.yourdomain.com/`.

Here is alternative solution that you can add to your existing `[prop]VirtualHost` directive that allows you to run API on subdirectory:

```apache
<VirtualHost *>
    ServerName yourdomain.com
    ServerAdmin noreply@sourceforge.net
    DocumentRoot "/home/iconify/htdocs"
    ProxyPass "/api/" "http://localhost:3000/"
    ProxyPassReverse "/api/" "http://localhost:3000/"
</VirtualHost>
```

This solution will allow you to access API at `[url]http://yourdomain.com/api/`.

### NGINX

This section explains how to create a reverse proxy with NGINX.

Open `[file]nginx.conf`, find section with your domain. It is under `[prop]http` -> `[prop]server` -> `[prop]location`:

```nginx
http {
    # some stuff here
    server {
        listen 80;
        server_name api.yourdomain.com;

        # some stuff here
        location / {
            root   html;
            index  index.html index.htm;
        }
        # some stuff here
    }
    # some stuff here
}
```

Replace contents of `[prop]location` with this:

```nginx
http {
    # some stuff here
    server {
        listen 80;
        server_name api.yourdomain.com;

        # some stuff here
        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_buffering on;
            proxy_buffers 16 1024k;
        }
        # some stuff here
    }
    # some stuff here
}
```

You will need to do this change twice: once for HTTP server, once for HTTPS server.
In your `[file]nginx.conf` look for second `[prop]server` section with SSL settings
that is configured to listen on port `[num]443` and apply exactly the same changes.

This configuration will allow you to access API at `[url]http://api.yourdomain.com/`.

If you want to host API in subdirectory, instead of editing the default location block, add custom location:

```nginx
http {
    # some stuff here
    server {
        listen 80;
        server_name yourdomain.com;

        # some stuff here
        location / {
            # some stuff here
        }
        location /api/ {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_buffering on;
            proxy_buffers 16 1024k;
        }
        # some stuff here
    }
    # some stuff here
}
```

This solution will allow you to access API at `[url]http://yourdomain.com/api/`.

#### Resolving POST errors in NGINX {#post-nginx}

If you are using GitHub web hooks to synchronize icon sets, you might run into error `[num]500`.
It is very likely to happen if you have fresh NGINX installation.

That error is likely to be caused by NGINX having wrong permissions. Run this to fix it:

```bash
sudo chmod +x /var/lib/nginx -R
```
