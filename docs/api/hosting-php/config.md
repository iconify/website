```yaml
title: 'Iconify API Configuration: PHP'
navigation: ./index.md
standalone: true
```

# Iconify API configuration

This tutorial is a part of [Iconify API installation instructions](./index.md) for PHP. This part of tutorial explains API configuration options.

Configuration is stored in file `[file]config.php`. It is used only for customized values, so you do not need to store entire configuration.

Default configuration is stored in `[file]config-default.php`.

## Main options

### region and env-region

Region is used as server identification. If you are running multiple Iconify API instances, by setting different `[prop]region` values you can check which server you are connected to.

How to check region? Open `[url]/version` end point in browser: `[url]https://api.iconify.design/version`. That page will show you API version, language (Node or PHP) and region.

Additionally, region can be set using environment variable `[str]region`.

### custom-icons-dir

Directory where custom icon sets are stored.

Icon sets must be stored in [Iconify JSON format](../../types/iconify-json.md).

Filename must match prefix, for example `[icon]awesome-icons:home` should be stored in `[file]awesome-icons.json`.

Default directory name is `[str]json` relative to root directory.

### serve-default-icons

If disabled, API will not load the default Iconify icon sets.

### index-page

URL to redirect browser to when browsing `[url]/`. Redirection is permanent.

### cache-dir

Directory for caching files. This cache is used to speed up loading icon sets.

Cache directory must be writable by PHP process!

Example:

```php
<?php

$config = [
    'cache-dir' => __DIR__ . '/cache'
];

?>
```

## Browser cache

Cache configuration is stored in `[prop]cache` array.

Array properties:

- `[prop]timeout`, `[type]number`. Cache timeout in seconds.
- `[prop]min-refresh`, `[type]number`. Minimum page refresh timeout. Usually the same as `[prop]timeout` value.
- `[prop]private`, `[type]boolean`. Set to `[bool]true` if page cache should be treated as private.

Example:

```php
<?php

$config = [
    'cache' => [
        'timeout' => 604800,
        'min-refresh' => 604800,
        'private' => false
    ]
];

?>
```

## Synchronizing icon sets with Git {#sync}

API can pull collections from Git service. This can be used to push collections to server whenever it is updated without manual work.

There are two collections available: `[str]iconify` and `[str]custom`.

All configuration options are in `[prop]sync` object.

To synchronize repository send GET request to `[url]/sync?repo=iconify&key=your-sync-key` Replace `[prop]repo` with `[str]custom` to synchronize custom repository and `[prop]key` with value of `[prop]sync.secret`.

Server will respond identically with `[str]ok` message after small delay regardless of status to prevent visitors from trying to guess your secret key.

Sync function is meant to be used with GitHub web hooks function. To avoid synchronizing icon sets too often, synchronization is delayed by `[num]60` seconds (configure `[prop]sync.sync-delay` option to change it). This way when there are multiple commits submitted within a minute, synchronization is done only once 60 seconds after the first commit.

Sync object properties:

- `[prop]secret`, `[type]string`. Secret key. This is a required option.
- `[prop]versions`, `[type]string`. Location of `[file]versions.json` file that stores information about the latest synchronized repositories.
- `[prop]storage`, `[type]string`. Location of directory where repositories will be stored.
- `[prop]git`, `[type]string`. Git command. You can change it if you need to customize command that is executed to clone repository. `[str]{repo}` will be replaced with repository URL, `[str]{target}` will be replaced with target directory.
- `[prop]iconify`, `[type]string`. URL of Iconify repository.
- `[prop]custom`, `[type]string`. URL of the custom repository.
- `[prop]custom-dir`, `[type]string`. Location of JSON files in custom repository, relative to root directory of repository.

Never change `[prop]sync` configuration in `[file]config-default.php`! Change it only in `[file]config.php`. Otherwise, it might be committed by mistake to a public repository, allowing everyone to see your secret words.

Example:

```php
<?php

$config = [
    'sync' => [
        'custom' => 'https://github.com/cyberalien/animated-icons.git',
        'custom-dir' => 'final',
        'secret' => 'test' // Do not store this in config.php !!!
    ]
];

?>
```

### custom-dir

Property `[prop]sync.custom-dir` points to the location of JSON files in custom repository, relative to root directory of repository.

For example, if JSON files are located in directory `[str]json` in your repository (like they are in Iconify repository), set `[prop]sync.custom-dir` value to `[str]json`.
