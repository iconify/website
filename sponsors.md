<script setup>
const logos = import.meta.glob('./public/around-logo.svg', { as: 'raw', eager: true })
console.log(logos)
const around = logos['./public/around-logo.svg']
console.log(around)
</script>

# Supporting Iconify
Iconify is a very complex project that takes a lot of effort to develop and maintain.

The biggest expense that can be quantified is API. API makes it possible to search icons, browse icons, and serve icon data to visitors that use icon components. It requires maintaining multiple servers that run Iconify API script and get a lot of ever growing traffic.

Then there is development time. Iconify has become a full time project, which requires endless development and maintenance.

## How can you support Iconify?

If you are using Iconify in your projects, please consider supporting the project.

There are several ways to help:
- [GitHub sponsors](https://github.com/sponsors/cyberalien).
- [You can help out a bit via PayPal](https://paypal.me/cyberalien).

If you represent a company and are willing to help or interested in sponsoring Iconify, Iconify OÜ can provide invoices and other paperwork you might want. See contact information below.

## Around.co support!

<div class="inline-block">
    <a href="https://around.co/?utm_source=iconify&amp;utm_medium=partnership" target="_blank" rel="noreferrer">
        <span class="block i-iconify:around w-1em h-51px"></span>
    </a>
</div>

<p style="font-size: 51px; line-height: 1em">
    <a href="https://around.co/?utm_source=iconify&amp;utm_medium=partnership" target="_blank" rel="noreferrer">
        <iconify-icon :icon="aroundLogo"></iconify-icon>
    </a>
</p>

Thanks to [Around](https://around.co/?utm_source=iconify&utm_medium=partnership) for sponsoring Iconify plugin for Figma!

Around is an excellent collaboration tool designed for developers. [Check them out](https://around.co/?utm_source=iconify&utm_medium=partnership)!
