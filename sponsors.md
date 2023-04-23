<script setup>
const logos = import.meta.glob('./public/around-logo.svg', { as: 'raw', eager: true })
const around = logos['./public/around-logo.svg']
</script>

# Supporting Iconify
Iconify is a very complex project that takes a lot of effort to develop and maintain.

The biggest expense that can be quantified is API. API makes it possible to search icons, browse icons, and serve icon data to visitors that use icon components. It requires maintaining multiple servers that run Iconify API script and get a lot of ever growing traffic.

Then there is development time. Iconify has become a full time project, which requires endless development and maintenance.

## How can you support Iconify?

If you are using Iconify in your projects, please consider supporting the project.

There are several ways to help:
<ul>
    <li flex="~ row gap-x-8px items-center">
        <span class="inline-block i-logos:github-icon?mask w-1.2em h-1.2em"></span>
        <a href="https://github.com/sponsors/cyberalien" target="_blank" rel="noreferrer">GitHub sponsors</a>
    </li>
    <li flex="~ row gap-x-8px items-center">
        <span class="inline-block i-entypo-social:paypal w-1.2em h-1.2em"></span>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/slava_trushkin">You can help out a bit via PayPal.</a>
    </li>
</ul>

If you represent a company and are willing to help or interested in sponsoring Iconify, Iconify OÜ can provide invoices and other paperwork you might want. See contact information below.

## Around.co support!

<div class="w-6.25em h-1em">
    <a href="https://around.co/?utm_source=iconify&amp;utm_medium=partnership" 
       target="_blank" rel="noreferrer" class="font-size-51px lh-1em " v-html="around" />
</div>

Thanks to [Around](https://around.co/?utm_source=iconify&utm_medium=partnership) for sponsoring Iconify plugin for Figma!

Around is an excellent collaboration tool designed for developers. [Check them out](https://around.co/?utm_source=iconify&utm_medium=partnership)!

## GitHub sponsors

<div grid="~ cols-1" w-full text-center mt-10>
    <div class="flex flex-col">
      <a href="https://github.com/sponsors/cyberalien" target="_blank" rel="noopener noreferrer">
        <img
          crossorigin="anonymous"
          inline-block
          width="800" height="288"
          class="resizable-img"
          loading="lazy"
          src="https://cyberalien.github.io/static/sponsors.svg"
          alt="Vjacheslav Trushkin's sponsors"
        >
      </a>
    </div>
</div>

## Contact information

Iconify OÜ is a registered company in Estonia, registration number 14973677.
<ul>
    <li flex="~ row gap-x-8px items-center">
        <span class="inline-block i-logos:twitter w-1.2em h-1.2em"></span>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/trushkin/">Linked.in profile.</a>
    </li>
    <li flex="~ row gap-x-8px items-center">
        <span class="inline-block i-logos:linkedin-icon"></span>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/slava_trushkin">Twitter.</a>
    </li>
    <li flex="~ row gap-x-8px items-center">
        <span class="inline-block i-logos:mastodon-icon"></span>
        <a target="_blank" rel="noreferrer" href="https://fosstodon.org/@cyberalien">Fosstodon (Mastodon for open source software).</a>
    </li>
    <li flex="~ row gap-x-8px items-center">
        <span class="inline-block i-logos:whatsapp-icon"></span>+372-58141572.
    </li>
</ul>
