```yaml
title: Rendering Modes in Iconify Icon Web Component
```

# Rendering modes

This tutorial is part of [Iconify Icon web component tutorial](./index.md).

Web component supports several icon rendering modes.

## Modes

There are 4 modes supported by web component:

- `[str]svg`: renders `[tag]svg` element.
- `[str]style`: uses either `[str]bg` or `[str]mask` mode, depending on icon palette.
- `[str]bg`: renders `[tag]span` element with icon as background image. Usable only for icons that have palette.
- `[str]mask`: renders `[tag]span` element with icon as mask image. Usable only for icons that do not have palette.

Demo showing 2 icons (one monotone, one with palette) rendered with 4 modes:

`include icon-components/modes-demo`

### Code samples

What do these modes actually look like in DOM?

Examples for `[icon]mdi:home` (used in modes demo above) icon:

```yaml
title: 'svg mode:'
src: icon-components/common/modes-svg.html
extra:
  - src: icon-components/common/modes-bg.html
    title: 'bg mode:'
  - src: icon-components/common/modes-mask.html
    title: 'mask mode:'
```

## Why not just render SVG? {#why}

You are probably wondering, why is it even needed? Isn't `[tag]svg` enough?

Rendering icon as `[tag]svg` works for most icons, but it does not always work for icons that use SVG animations.

SVG animations cannot start until document is ready. It might seem like a small thing, but animations not rendering quickly enough can cause bad user experience. This issue can be caused by small things, such as statistics script failing to load or ad code loading slowly. If at least one server that page is loading resources from is unreachable, it might break all animated SVGs on page. Async and defer attributes do not help. Issue can even be caused by script in an iframe.

### Animation delay demo {#delay-demo}

Below is an `[tag]iframe` that shows icon rendering issue. It contains animated icon, rendered as `[tag]svg` and as background image. Both icons render instantly, but animation in `[tag]svg` does not start for few seconds because document is still loading.

`include icon-components/frames/delay-demo-1up`

To make things worse, this demo, which is in `[tag]iframe`, affects the main document. Logo on this page is rendered as `[tag]svg` and it contains animations. Refresh this page to see how slow script in a frame prevents SVG animations in unrelated icons in the main document.

## Backgrounds and masks

Background images cannot use `[prop]currentColor`, but they do keep icon's palette, so icons with palette can be rendered as background image.

But what to do if icon uses `[prop]currentColor`? Solution is to use icon as mask and set background color to `[prop]currentColor`.

Combination of background and mask images make it possible to use almost all SVGs as URLs. The only icons that cannot be rendered correctly are icons that mix `[prop]currentColor` and hardcoded palette.

See [Icons in Pure CSS article by Anthony Fu](https://antfu.me/posts/icons-in-pure-css) that explains it in more details.

### SVG animations

When icon has animations, animations start immediately if it is rendered as mask or background, solving animation delay issue mentioned few sections above.

However, there is another issue: browser cache in Chrome. Image is rendered as URL. If URL is already in browser cache, Chrome does not restart animation. That means consequent renders of the same animated icons can bug out.

`include icon-components/frames/delay-demo-freeze-1up`

So there are issues with SVG animations when used as background or mask too. Web component solves it by adding random commented out content to icon, which causes it to bypass browser cache.

`include icon-components/frames/delay-demo-icon-1up`

## Which mode to use? {#choices}

Web component will automatically use best mode:

- If icon has SVG animations, `[str]style` to render animations immediately.
- Otherwise `[str]svg`, which renders slightly faster in most browsers.
