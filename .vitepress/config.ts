import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types'
import { withPwa } from '@vite-pwa/vitepress'
import { pwa } from './pwa'
import { description, ogImage, ogUrl, title } from './constants'

const About: DefaultTheme.NavItemWithLink[] = [
  { text: 'About Iconify', link: '/about/' },
  { text: 'Support', link: '/support/' },
  { text: 'History', link: '/about/history' },
]

const Sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'News',
    link: '/news/',
  },
  {
    text: 'Browse Icons',
    link: '/icons-set/',
  },
  {
    text: 'Sponsor Iconify',
    link: '/sponsors',
  },
  {
    text: 'About Iconify',
    link: '/about/',
  },
  {
    text: 'Iconify Support',
    link: '/support/',
  },
  {
    text: 'History',
    link: '/about/history',
  },
  {
    text: 'Privacy',
    link: '/privacy',
  },
]

const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'News',
    link: '/news/',
  },
  {
    text: 'Browse Icons',
    link: '/icon-sets/',
  },
  {
    text: 'Sponsor',
    link: '/sponsors',
  },
  {
    text: 'About',
    items: About,
    activeMatch: '^/(about|support)/',
  },
]

export default withPwa(defineConfig({
  lang: 'en-US',
  title,
  titleTemplate: title,
  description,
  outDir: './dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/png', sizes: 'any' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
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
  cleanUrls: true,
  ignoreDeadLinks: [
    /^\/docs\/icon-bundles/,
    /^\/interactive/,
    /:\/\/localhost/,
  ],

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
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
    sidebar: {
      '/guide/': Sidebar,
      '/news/': Sidebar,
      '/icon-sets/': Sidebar,
      '/docs/': Sidebar,
      '/sponsors': Sidebar,
      '/support/': Sidebar,
      '/about/': Sidebar,
      '/privacy': Sidebar,
    },
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
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-PRESENT Iconify OÜ',
    },
  },
  pwa,
}))
