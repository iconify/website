```yaml
title: Solving SVG Animation Issues
```

# Solving SVG animation issues

There are various ways to animate icons:

- CSS animations using keyframes.
- JavaScript animations. There are several libraries available to do that.
- SVG animations.

This article is about the last method: animating icons using [SVG animations level 2 spec](https://svgwg.org/specs/animations/).

## SMIL?

No, it is not the old deprecated SMIL animations.

It is a modern spec, though it is based on SMIL. Currenly it is supported by all modern browsers.

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

## Timing

Unfortunately, SVG animations spec has one major downside: animation timing is very tricky to work with.

What exactly does that mean?

There are 2 ways to render SVGs:

- Inline icons using `[tag]svg`.
- External resources: SVG as URL or background image.

Both have different problems with animation timing.

### Inline SVG

When using inline `[tag]svg`, animations cannot start until document is ready.

It might seem like a small thing, but animations not rendering quickly enough can cause bad user experience.

This issue can be caused by small things, such as statistics script failing to load or ad code loading slowly. If at least one server that page is loading resources from is unreachable, it might break all animated SVGs on page. Async and defer attributes do not help. Issue can even be caused by script in an iframe.

#### Solution? {#solution-svg}

There is none.

### SVG as URL

When using icon as URL, you cannot control animation timing at all.

Animation always starts the first time icon is rendered. There is absolutely no way to control that.

#### Solution? {#solution-css}

The only solution is to generate unique URL for icon each time you need to restart animation.

The easiest way to achieve it is to add a basic HTML comment to icon content, like this:

```css
.test-icon {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M3 12h17.5'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.2s' values='20;0' /%3E%3C/path%3E%3Cpath stroke-dasharray='12' stroke-dashoffset='12' d='M21 12l-7 7M21 12l-7 -7'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.2s' dur='0.2s' values='12;0' /%3E%3C/path%3E%3C/g%3E%3C!-- 1234567890 --%3E%3C/svg%3E");
  width: 1em;
  height: 1em;
  background-color: currentcolor;
  mask-image: var(--svg);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}
```

Notice `[str]%3C!-- 1234567890 --%3E` near end of URL. This is a simple comment with a number to break browser's cache.

Unfortunately, this solution requires JavaScript. It can be used as inline CSS, it cannot be used in CSS file.

## Iconify web component

[Iconify icon web component](/docs/iconify-icon/index.md) renders animated icons as background or mask images and implements randomised URL workaround.

Additionally, it renders icons only when icon is visible. This means CPU is not wasted on animating invisible icons.

## Conclusion

SVG animations spec is promising, but it is hard to use.

CSS animations are a better choice, but at the time of writing this, CSS animations are not fully supported yet by all major browsers (see update below). More specifically, only basic animations like `[prop]stroke-dashoffset` work, animating other attributes is not supported (see update below). This makes animating icons in CSS impossible beyond very basic animations.

### Update

Update for CSS animations: April 2025.

In 2024 all major browsers added support for animating majority of SVG attributes in CSS.

The only exception is `[prop]d` attribute in path, which is actually the most important attribute. Safari 18.4 does not support animating or changing `[prop]d` in CSS, but it is supported in Safari TP, so hopefully support will land in Safari 18.5.
