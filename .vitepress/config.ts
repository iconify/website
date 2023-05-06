import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { pwa } from './pwa'
import { mdConfig } from './md'
import { description, ogImage, ogUrl, title } from './constants'
import { GlobalSidebar, Nav } from './navigation'
import { buildEnd, preloadLinks, transformHtml } from './sitemap'

export default withPwa(defineConfig({
  lang: 'en-US',
  title,
  titleTemplate: title,
  description,
  outDir: './dist',
  srcExclude: ['news/*/*.md', 'partials/**', 'patches/**'],
  head: [
    ...preloadLinks,
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/png', sizes: 'any' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'author', content: 'Iconify OÜ' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: title }],
    ['meta', { name: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:site', content: '@slava_trushkin' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
  ],
  lastUpdated: true,
  cleanUrls: false,
  ignoreDeadLinks: [
    /^\/docs\/icon-bundles/,
    /:\/\/localhost/,
  ],

  markdown: {
    config: mdConfig,
  },

  themeConfig: {
    logo: '/assets/images/iconify-logo.svg',
    nav: Nav,
    search: {
      provider: 'local',
    },
    carbonAds: {
      code: 'CESI4K3W',
      placement: 'iconifydesign',
    },
    sidebar: GlobalSidebar,
    editLink: {
      pattern: 'https://github.com/userquin/iconify-website/edit/master/:path',
      text: 'Suggest changes to this page',
    },
    socialLinks: [
      { icon: 'discord', link: 'https://iconify.design/discord' },
      { icon: 'twitter', link: 'https://twitter.com/slava_trushkin' },
      { icon: 'mastodon', link: 'https://fosstodon.org/@cyberalien' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/trushkin/' },
      { icon: 'github', link: 'https://github.com/iconify' },
      { icon: 'youtube', link: 'https://www.youtube.com/@webdevstuff' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-PRESENT Iconify OÜ',
    },
  },
  transformHtml,
  buildEnd,
  pwa,
}))
