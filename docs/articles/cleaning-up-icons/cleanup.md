```yaml
title: Cleaning up SVG code
functions:
  cleanupSVG: ../../tools/tools2/icon/cleanup.md
```

# Cleaning up SVG code

This article is part of [SVG clean up article](./index.md).

When a designer exports icon from an editor, often SVG contains a lot of extra code that is not needed to display an icon.

## Bad icon example {#example}

The following SVG was generated with popular Inkscape software:

```yaml
src: articles/el-cloud.svg
```

That code contains a lot of useless junk. If it is not used to display an icon, it is useless.

This is what is left of it after clean up:

```yaml
src: articles/el-cloud.cleanup.svg
```

Icon is not yet finalised. It still requires optimisation.

If you think the code above contains just a little bit of useless tags, so it is not a big deal, it was a short example. There are icons in some icon sets with tens of kilobytes of junk data.

## Process

Clean up process does not optimise the icon. It only does the following:

- Removes useless code.
- Converts style to attributes.
- [Validates icon](./validate.md).

It is done with the `[func]cleanupSVG()` function from [Iconify Tools](../../tools/tools2/index.md).

[Optimisation is done later](./optimise.md), after [parsing palette](./palette.md).
