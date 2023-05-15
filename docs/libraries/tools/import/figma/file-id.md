```yaml
title: 'Importing SVG from Figma: Getting file ID'
functions:
  importFromFigma: ./index.md
```

# How to get Figma document ID

This article is part of `[func]importFromFigma()` documentation.

How to get Figma file ID:

1. Open file in Figma.
2. Click the "Share" button in the top right corner.
3. Click "Copy link".

![How to get file ID in Figma](https://docs.iconify.design/assets/images/tools/figma_id.png)

In your clipboard you will have a link to Figma file, which looks like this:

```txt
https://www.figma.com/file/9lvc7JGhqpNnpF3OK9kjnG/Quill-Iconset-(Community)?node-id=0%3A1
```

File ID is between `[str]/file/` and next `[str]/`. In example above, file ID is `[str]9lvc7JGhqpNnpF3OK9kjnG`.

## Community files

Community files contain `[str]/community/` in the file link:

```txt
https://www.figma.com/community/file/1034432054377533052/Quill-Iconset
```

It cannot be used to get file ID.

You need to get ID from actual file. If someone else published file to community, you need to clone it, then follow steps above to get file ID.
