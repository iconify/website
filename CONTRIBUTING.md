# Contributing Guide

Hi! We are really excited that you are interested in contributing to `@iconify/website`. Before submitting your contribution, please make sure to take a moment and read through the following guide.

Refer also to https://github.com/antfu/contribute.

## Set up your local development environment

The `@iconify/website` repo is using pnpm. The package manager used to install and link dependencies must be [pnpm](https://pnpm.io/).

To develop and test the `@iconify/website` package:

1. Fork the `@iconify/website` repository to your own GitHub account and then clone it to your local device.

2. Ensure using the latest Node.js (16.x)

3. `@iconify/website` uses pnpm v8. If you are working on multiple projects with different versions of pnpm, it's recommend to enable [Corepack](https://github.com/nodejs/corepack) by running `corepack enable`.

4. Check out a branch where you can work and commit your changes:
```shell
git checkout -b my-new-branch
```

5. Run `pnpm install` in `@iconify/website`'s root folder

6. Run `nr build` in `@iconify/website`'s root folder.

## Testing changes

`@iconify/website` uses `Vitepress`.

Once you made the changes to the documentation, you can test them running `nr dev` from the root folder.

To check the website build, just run `nr preview` from the root folder.
