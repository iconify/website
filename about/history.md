# History of Iconify

Iconify started as an experiment in 2016, developed in free time.

Only in 2020 it turned from side project into full time project, currently it is a very active and quickly growing project.

## Early experiments

In 2016 I was working on customisable themes for forum software and was very unhappy with icon fonts, so I have started experimenting with different methods of using icons in projects.

Icon fonts are ugly, hard to customise and once you choose an icon font, you are stuck with icons available in it. Using multiple icon fonts is not an option because it massively increases page loading times. I wanted to find a different solution, but there was none available.

## Proof of concept

In 2018, after a couple of years of experimenting with icons in free time, I came up with a solution: SVG framework that dynamically loads icon data from API.

Finally, I could offer my users a huge choice of icons, but without downsides of embedding multiple icon fonts. Unlike fonts, it downloaded data only for icons used on page, rendered pixel perfect SVG.

Initially, the project was called SimpleSVG.

In late 2018 I renamed the project to Iconify.

## Sketch and Figma plugins

In addition to a solution for embedding icons, I needed a solution for browsing available icons. Whole project was created to offer a huge choice of icons in the forum theme customiser, so an icon finder component was needed, which would allow users to select icons when customising the theme.

When working on a solution for icon finder, I have decided to test it as a plugin for Sketch. Icon finder wasn't good, but integration was very successful.

Then Figma Plus was released, which was a third party plugin system for Figma when Figma did not support plugins. I have immediately ported the Sketch plugin to Figma Plus. Few months later Figma developers released an official plugin system and I have ported the Figma Plus plugin to Figma.

## Startup

Slowly work on Iconify took over, I did not have time to work on forum software.

Iconify was not a simple solution, it had multiple parts that required a lot of time to develop, maintain and improve: SVG framework, maintaining API software and servers, maintaining icon sets and tools for parsing icons, developing icon finder, maintaining plugins for Sketch and Figma.

In 2020, I was invited to AWS Startup Day in Helsinki. At the event I talked to several successful startup owners, learned a lot about startups, it was an amazing experience.

After the AWS Startup event, I have decided to try to turn Iconify into a startup. I have officially registered a company in Estonia. At that time multiple parts of the project were still in development and the project was far from being ready.

### Original goals

Originally, Iconify had the following goals:

-   Offer an easy to use SVG framework for developers.
-   Maintain a repository of open source icon sets for open source developers.
-   Offer tools for working with custom and premium icon sets.
-   Create the icon finder, which can be easily integrated into various theme customisers.

I was planning to monetize Iconify by:

-   Offering premium icon sets.
-   Offering custom solutions for businesses, which included custom API, custom version of SVG framework and custom icon finder component.

### Slowing down

My original plan was to finish developing it by the end of 2020. However, later things have changed. World went into chaos, several meetings with potential investors I planned for 2020 all were cancelled due to travel restrictions.

So I have decided to take it slowly.

Instead of rushing development, I have decided to take time improving existing code. There was a lot to improve: project required [better documentation](/docs/index.md), [new tools](/docs/tools/index.md), better website. Code in all parts of the project was initially written in JavaScript, but could use a full rewrite with TypeScript and ES modules support. My plan was to work on the project without rushing it, so the end product would have high quality code.

This was a good idea. Now, there are several third party icon components, which would be hard to create without proper documentation and tools. Project code is modern, ready for future.

### Icon components

Originally, Iconify was focused on the [SVG framework](/docs/icon-components/svg-framework/index.md), which was a good idea, but developers were asking for different solutions.

In addition to the SVG framework, in 2021 I published [native icon components for multiple frameworks](/docs/icon-components/components/index.md) (React, Svelte, Vue) that had load on demand functionality, similar to the SVG framework.

### Web component

In mid 2022, new [web component](/docs/iconify-icon/index.md) was created, which is an even better solution than SVG framework.

When project was in development, web components were not usable because browsers did not support them, so SVG framework and components native to UI frameworks were the best solutions. Internet Explorer did not support shadow DOM until the very end. But today all modern browsers support web components. Internet Explorer, last browser to cause problems, moved to Chromium.

Web component will eventually replace all other icon components.

### Third party components

In addition to components mentioned above, there are now several third party components, developed by various authors.

It became possible [with creation of detailed documentation](/docs/index.md) and [tools to work with icon data](/docs/tools/index.md) in late 2021.

## Open source

In mid 2022 plans changed, thanks to people showing interest in sponsoring open source development.

New plan is to:

-   Open source everything, encourage developers to create their own open source solutions that use Iconify.
-   Rely on sponsors to finance development.

If you are using Iconify in your projects, [please consider sponsoring Iconify development](/sponsors/index.md).
