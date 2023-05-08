# Iconify Website

This repository contains source code for Iconify website, built with Vitepress.

It is currently work in progress, not deployed yet on main website.

Preview is available at https://preview.iconify.design/

## Build process

Read out [contributing guidelines](./CONTRIBUTING.md) before making any changes.

To build website, first install dependencies:

```bash
pnpm install
```

Then you can build website:

```bash
nr build
```

Build process will put all HTML files in directory `dist`.

Do not commit changes that aren't ready for production. To build production code, run this:

```bash
nr build
```

If you want to preview website without building, run this:

```bash
nr dev
```

## Sources

Source files are written in Markdown and are stored in the following directories:
- `about`
- `docs`
- `getting-started`
- `news`
- `privacy`
- `sponsors`
- `support`

Main entry file for each directory is `index.md`.

Documentation uses slightly modified Markdown syntax, see "Markdown" section below.

## Assets

Assets are stored in directory `public`.

Stylesheet is compiled using SASS compiler, JavaScript files from `public/assets/js` are bundled, icons from `public/assets/svg` are also bundled with JavaScript and are embedded in HTML using Iconify SVG Framework.

## Git conflicts

If you have forked this repository, made some changes and built HTML files, Git repository will include compiled HTML files. Repository is hosted on GitHub Pages, therefore it must include HTML files that GitHub Pages can serve.

If you have made modifications to your fork, then tried to merge it with the latest version of original repository, you might have Git merge conflicts in `docs`. Do not bother with resolving them, just resolve all conflicts (if there are any) in previous directories and run `nr build` to overwrite everything in `docs`.

## Markdown

Documentation uses extended Markdown syntax.

### Headings

First big change is in headings. Every Markdown file must have a heading, which is written in YAML.

Heading properties:

- title. Page title that is used in `<title>` tag in HTML. This is a mandatory property.
- wip. You can mark page as "work in progress" by adding `wip: true` to heading.
- standalone. This is used for documents that are not listed in navigation. It marks document as standalone, so build process knows it should not be in navigation and won't throw an error.
- replacements. This is used to dynamically replace strings in output. For example, to make sure latest version of project is always the same in all documents without updating every document. See "Replacements" section below.
- types. Links to types that are used in documents. Key is type, value is a relative link.

### Inline code

Each inline code entry must have a type. This is used to apply different syntax highlight to inline code, add links to types.

Type is placed at the beginning of inline code in brackets: `[type]inline code`.

Available types:

- attr: used for HTML attributes, with or without values: `[attr]data-inline`, `[attr]foo="bar"`.
- key, prop: used for keys and object properties. Usually used when describing types: `[prop]hFlip`.
- var: variable name: `[var]Iconify`.
- tag: HTML tag: `[tag]svg`. Syntax highlighter will add "<" and ">" to tag.
- type: variable type: `[type]IconifyIcon`. If heading in document has "types" section with relative link to type documentation, syntax highlighter will wrap type in a link.
- class: used for class names: `[class]Collection`, `[class]Promise`.
- func: used for function names: `[func]addIcon`, `[func]addCollection()`.
- npm, packagist: used for names of NPM and Packagist packages: `[npm]@iconify/react`.
- icon: used for icon names: `[icon]mdi:home`.
- str, bool, num, object, null: used for values: `[str]Hello World`, `[bool]true`, `[num]12345`.
- js, bash, json, php, css, html: used to highlight syntax for any of those languages: `[js]console.log('Success!');`
- url: URL or domain name: `[url]github.com`, `[url]https://github.com/iconify`.
- file: filename: `[file]src/themes.ts`.

### External code

Instead of writing code in Markdown files, many documents use external code.

Most of the external code files are stored in `documents/code`. Stylesheets used in `css` property, could also be located in `assets/styles/samples`.

External code is written as YAML code block with various properties. The only mandatory property is "src", other properties are optional.

Examples:

```yaml
src: iconify1/size-demo.html
title: 'HTML:'
css: iconify1/size-demo.scss
cssTitle: 'Stylesheet:'
demo: true
demoTitle: 'Demo:'
class: iconify1-size-demo
```

This will display 2 chunks of code + demonstration.

```yaml
src: types/alias-raw.json
title: 'IconifyAlias:'
extra:
  - src: types/alias-json.json
    title: 'IconifyJSON:'
  - src: types/alias-merged.json
    title: 'Merged "arrow-right" icon as IconifyIcon:'
```

This will display 3 chunks of code in one contained block. Property "src" points to filename, property "title" adds caption above code block.

Code block properties:

- src: source for main code file.
- title: title for main code file. Displayed above code block.
- hint: hint for main code file. Displayed below code block.

Properties for stylesheet:

- css: source for stylesheet.
- cssTitle: title for stylesheet.
- cssHint: hint for stylesheet.

Stylesheet code is displayed below main code, but in the same container. File can be located in `documents/code/` or in `assets/styles/samples/`.

Properties for demo:

- demo: boolean. If true, demo will be shown.
- demoTitle: title for demo.
- demoHint: hint for demo.
- class: class to wrap demo. See `assets/style/_samples.scss`.

Demo block will render raw HTML code from source. It will be rendered below main code and optional stylesheet.

Sometimes demo code might be different from raw code. For example, when using samples for Iconify SVG Framework version 1 that work differently in new version. Website uses the latest version of Iconify SVG Framework, so code samples might not display correctly. To avoid that, create second sample file with ".demo" before filename. That file will be rendered instead of original source file. See documentation for Iconify SVG Framework version 1 for examples.

Extra chunks of code:

- extra: array of extra code chunks. Each chunk has the same 3 properties as original code: `src`, `title` and `hint`.

Extra chunks of code are often used to display several code samples that should be placed in the same container.

### Partials

To avoid repeating same text over and over again, parser supports partial documents.

Partial documents can be in Markdown and in HTML format, they are located in `documents/partial`.

Partial files are included in documents using inline code that starts with "include": `include notices/iconify1`. See Iconify SVG Framework 1 documentation for examples.

Partial files cannot have headings to avoid breaking hierarchy in pages. If you need to use a heading to split document, create several partial documents.

## Replacements

Text replacements are used in documentation to re-use common data, such as version numbers and counters without updating every document.

Replacements are applied to document and to external code included in that document.

Example of replacements in heading:

```yaml
replacements:
  - code: '/1/1.0.3/'
    value: '/${iconify1.version.major}/${iconify1.version.full}/'
```

This will replace all entries of `/1/1.0.3/` with the current data. Syntax `${iconify1.version.major}` is used for variables. Variables are stored in `replacements.json` in root directory.

## Links

All links in documentation must be relative to current page. Link to Markdown files, not to HTML files.

Links to images are absolute, relative to "assets/images" directory. For example "/foo/bar.png" will be changed to "assets/images/foo/bar.png" and then changed to relative link for current page.

Partial files can include absolute links. Logic is similar to images: links are relative to root directory used for pages: "documents/pages".

There is no auto-linking for URLs. If you want to turn text into a link, create a link. For example, https://github.com/iconify/ will not change to link (though most Markdown parsers do auto-link it, so you are probably seeing a link when reading this).

## HTML templates

Templates for HTML files are located in directory `assets`. See `assets/page.html` and `assets/redirect.html`.

Templates contain several variables that are replaced during compilation. Do not edit those files with WYSIWYG editors!

## Licence

Iconify documentation is dual-licensed under Apache 2.0 licence. You can use this repository to build custom documentation for your project.

`SPDX-License-Identifier: Apache-2.0`

© 2020-PRESENT Iconify OÜ
