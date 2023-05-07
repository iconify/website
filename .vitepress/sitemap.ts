import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'
import type { DefaultTheme, HeadConfig, SiteConfig, TransformContext } from 'vitepress/dist/node'
import { SitemapStream } from 'sitemap'
import { isCI } from 'std-env'
import { ogUrl } from './constants'

export const preconnectLinks: HeadConfig[] = [
  ['link', { rel: 'preconnect', href: 'https://srv.carbonads.net' }],
  ['link', { rel: 'preconnect', href: 'https://cdn.carbonads.net' }],
]

export const editPageLinkPattern = 'https://github.com/userquin/iconify-website/edit/master/:path'

export const socialLinks: DefaultTheme.SocialLink[] = [
  { icon: 'discord', link: 'https://iconify.design/discord' },
  { icon: 'twitter', link: 'https://twitter.com/slava_trushkin' },
  { icon: 'mastodon', link: 'https://fosstodon.org/@cyberalien' },
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/trushkin/' },
  { icon: 'github', link: 'https://github.com/iconify' },
  { icon: 'youtube', link: 'https://www.youtube.com/@webdevstuff' },
]

interface SitemapEntry {
  url: string
  lastmod?: number
}

const cyberalienGithub = 'https://cyberalien.github.io'

const links: SitemapEntry[] = []

const hostname: string = isCI ? ogUrl : (process.env.HTTPS ? 'https://localhost/' : 'http://localhost:4173/')

export function transformHtml(code: string, id: string, { pageData }: TransformContext): string | void {
  if (!/[\\/]404\.html$/.test(id)) {
    const url = pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2')
    links.push({
      url,
      lastmod: pageData.lastUpdated,
    })

    // homepage
    if (url === '/' || url === '') {
      return code.replace('<meta charset="utf-8">', `<meta charset="utf-8">
<link rel="canonical" href="${hostname}index.html">
<link rel="preconnect" href="${cyberalienGithub}">
`)
    }

    // section entry
    if (url[url.length - 1] === '/') {
      if (url === 'sponsors/') {
        return code.replace('<meta charset="utf-8">', `<meta charset="utf-8">
<link rel="canonical" href="${hostname}${url}index.html">
<link rel="preconnect" href="${cyberalienGithub}">
`)
      }

      return code.replace('<meta charset="utf-8">', `<meta charset="utf-8">
<link rel="canonical" href="${hostname}${url}index.html">
`)
    }

    // any page
    return code.replace('<meta charset="utf-8">', `<meta charset="utf-8">
<link rel="canonical" href="${hostname}${url}.html">
`)
  }
}

export async function buildEnd({ outDir }: SiteConfig) {
  // TODO: include here frequency and priority
  const sitemap = new SitemapStream({
    hostname,
  })
  const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
  sitemap.pipe(writeStream)
  links.forEach(link => sitemap.write(link))
  sitemap.end()
  await new Promise(resolve => writeStream.on('finish', resolve))
  await writeFile(resolve(outDir, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${hostname}sitemap.xml`.replace(/\\r\\n/g, '\n'), { encoding: 'utf-8' })
}
