When an icon is rendered in text, by default it is aligned at baseline, as any other images.

Emojis and icon fonts are rendered slightly below baseline, like any text.

If you want to render icon in text, you probably want to add `[prop]vertical-align` to each icon to render it slightly below baseline, to make it fit in text, similar to emojis and icon fonts:

`include icon-components/vertical-align-demo`
