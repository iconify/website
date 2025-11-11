import { defineConfig } from "vitepress";
import { mdConfig } from "./md";
import { copyright, description, ogImage, ogUrl, title } from "./constants";
import { buildFeed, feedLinks } from "./feed";
import { GlobalSidebar, Nav } from "./nav";
import {
  buildSitemap,
  editPageLinkPattern,
  preconnectLinks,
  socialLinks,
  transformHtml,
} from "./sitemap";

// import { isCI, isDevelopment } from 'std-env'

const enablePWA = false; // isCI || !isDevelopment || process.env.SW_DEV === 'true'

export default defineConfig({
  lang: "en-US",
  title,
  titleTemplate: title,
  description,
  outDir: "./dist",
  srcExclude: [
    "news/*/*.md",
    "partials/**",
    "patches/**",
    "README.md",
    "CONTRIBUTING.md",
    "TODO.md",
  ],
  vite: {
    define: {
      PWA: enablePWA,
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) =>
          tag === "iconify-icon" || tag === "lite-youtube",
      },
    },
  },
  head: [
    ...feedLinks,
    ...preconnectLinks,
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "any" }],
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "author", content: "Iconify OÜ" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: title }],
    ["meta", { name: "og:description", content: description }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: ogImage }],
    ["meta", { name: "twitter:site", content: "@cyberalien_dev" }],
    ["meta", { name: "twitter:url", content: ogUrl }],
    ["link", { rel: "stylesheet", href: "/assets/yt/lite-yt-embed.css" }],
    ["script", { src: "/assets/yt/lite-yt-embed.js" }],
  ],
  lastUpdated: true,
  cleanUrls: false,
  ignoreDeadLinks: [/^\/docs\/icon-bundles/, /:\/\/localhost/],

  markdown: {
    config: mdConfig,
  },

  themeConfig: {
    logo: "/assets/images/iconify-logo.svg",
    nav: Nav,
    search: {
      provider: "local",
    },
    carbonAds: {
      code: "CESI4K3W",
      placement: "iconifydesign",
    },
    sidebar: GlobalSidebar,
    editLink: {
      pattern: editPageLinkPattern,
      text: "Suggest changes to this page",
    },
    socialLinks,
    footer: {
      message: "Released under the Apache 2.0 License.",
      copyright,
    },
  },
  transformHtml,
  buildEnd: async (siteConfig) => {
    await Promise.all([buildSitemap(siteConfig), buildFeed(siteConfig)]);
  },
  transformHead: async (context) => {
    const { head, page } = context;

    // Replace image
    const ogImageMatch = "/assets/og/iconify.png";
    let newOGImage = ogImageMatch;
    if (page.startsWith("docs/design/figma/"))
      newOGImage = ogImageMatch.replace("/iconify.png", "/figma4.png");
    else return head;

    // Update head
    const source = JSON.stringify(head);
    const modified = source.split(ogImageMatch).join(newOGImage);

    if (source === modified) throw new Error("Failed to replace ogImage");

    return JSON.parse(modified);
  },
});
