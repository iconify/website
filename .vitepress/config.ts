import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types'
import { withPwa } from '@vite-pwa/vitepress'
import { pwa } from './pwa'
import { description, ogImage, ogUrl, title } from './constants'

const Documentation: DefaultTheme.NavItemWithLink[] = [
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'Iconify API', link: '/docs/api/' },
  { text: 'Articles', link: '/docs/articles/' },
  { text: 'Icons on demand', link: '/docs/icon-components/' },
  { text: 'Iconify Icon Web Component', link: '/docs/iconify-icon/' },
  { text: 'Icons', link: '/docs/icons/' },
  { text: 'Tools for Developers', link: '/docs/tools/' },
  { text: 'Iconify Types', link: '/docs/types/' },
  { text: 'How to use icons', link: '/docs/usage/' },
]

const SidebarDocumentation: DefaultTheme.SidebarItem[] = [
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'Iconify API', link: '/docs/api/' },
  { text: 'Articles', link: '/docs/articles/' },
  { text: 'Icons on demand', link: '/docs/icon-components/' },
  { text: 'Iconify Icon Web Component', link: '/docs/iconify-icon/' },
  { text: 'Icons', link: '/docs/icons/' },
  { text: 'Tools for Developers', link: '/docs/tools/' },
  { text: 'Iconify Types', link: '/docs/types/' },
  { text: 'How to use icons', link: '/docs/usage/' },
]

const About: DefaultTheme.NavItemWithLink[] = [
  { text: 'About Iconify', link: '/about/' },
  { text: 'Support', link: '/support/' },
  { text: 'History', link: '/about/history' },
]

const Sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/guide',
  },
  {
    text: 'News',
    link: '/news/',
  },
  {
    text: 'Documentation',
    items: Documentation,
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
    text: 'Icons',
    link: 'https://icon-sets.iconify.design/',
  },
  {
    text: 'Docs',
    items: Documentation,
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
  srcExclude: ['news/*/*.md'],
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
      '/guide': Sidebar,
      '/news/': Sidebar,
      '/icon-sets/': Sidebar,
      '/docs/': SidebarDocumentation,
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
      { icon: 'youtube', link: 'https://www.youtube.com/@webdevstuff' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-PRESENT Iconify OÜ',
    },
  },
  pwa,
}))
