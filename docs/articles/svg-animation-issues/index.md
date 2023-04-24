```yaml
title: Solving SVG Animation Issues
```

# Solving SVG animation issues

There are various ways to animate icons:

- CSS animations using keyframes.
- JavaScript animations. There are several libraries available to do that.
- SVG animations.

This article is about the last method: animating icons using [SVG animations level 2 spec](https://svgwg.org/specs/animations/).

No, it is not deprecated SMIL animations. It is a modern spec, though it is based on SMIL. Currenly it is supported by all modern browsers.

## Sample

So what do SVG animations look like?

```yaml
src: articles/animations/image-twotone.svg
demo: true
demoFirst: false
class: restart-animation
```

This example uses `[tag]animate` tag to change attributes of parent elements over time. It changes `[prop]stroke-dashoffset` to animate stroke, so it looks like icon is being drawn and `[attr]fill-opacity` to fade in filled elements.

No CSS, no JavaScript, no external dependencies.

See [`[tag]animate` documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) and [SVG animations level 2 spec](https://svgwg.org/specs/animations/) for more examples, other related tags, attributes.

## Issues

Unfortunately, using animations is not that simple.

First of all, there are two ways to render SVGs:

- Inline icons using `[tag]svg`.
- External resources: SVG as URL or background image.

When using inline `[tag]svg`, animations cannot start until document is ready. It might seem like a small thing, but animations not rendering quickly enough can cause bad user experience. This issue can be caused by small things, such as statistics script failing to load or ad code loading slowly. If at least one server that page is loading resources from is unreachable, it might break all animated SVGs on page. Async and defer attributes do not help. Issue can even be caused by script in an iframe.

When using icon as URL, there is another issue: browser cache. If image is cached, some browsers do not restart animation.

### Animation delay demo {#delay-demo}

Below is an `[tag]iframe` that shows icon rendering issue. It contains animated icon, rendered as `[tag]svg` and as background image. Both icons render instantly, but animation in `[tag]svg` does not start for few seconds because document is still loading.

`include icon-components/frames/delay-demo-2up`

To make things worse, this demo, which is in `[tag]iframe`, affects the main document. Logo on this page is rendered as `[tag]svg` and it contains animations. Refresh this page to see how slow script in a frame prevents SVG animations in unrelated icons in the main document.

### Background bug demo {#bg-demo}

Below is an `[tag]iframe` that shows background bug.

Image is rendered as URL. If URL is already in browser cache, Chrome does not restart animation. That means consequent renders of the same animated icons can bug out.

Move mouse over demo to restart animation to see bug.

`include icon-components/frames/delay-demo-freeze-2up`

## Is there a solution? {#solution}

Solution to timing issue with inline `[tag]svg` is to use background image or mask.

Cache issue with background images can be solved by adding random content to icon, such as HTML comment with current time stamp before `[tag]</svg>`.

Below is an `[tag]iframe` that shows solution in action. It includes slowly loading script, which would break animation in inline `[tag]svg`, but does not break background images. Random content is dynamically added to solve Chrome cache issue.

Icon is rendered as mask, so icon could use `[prop]currentColor`, though background works too if you need to keep icon's palette.

`include icon-components/frames/delay-demo-icon-2up`
