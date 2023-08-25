import { basename, dirname, resolve } from 'node:path'
import { writeFileSync } from 'node:fs'
import { Feed } from 'feed'
import { isCI } from 'std-env'
import { createContentLoader } from 'vitepress'
import type { ContentData, SiteConfig, HeadConfig } from 'vitepress'
import { copyright, description, ogImage, ogUrl, title } from './constants'
import { getMarkdownTitleLink, getNewsTime } from '../scripts/news.mjs'

export const feedLinks: HeadConfig[] = [
  ['link', { rel: 'alternate', href: '/rss.xml', type: 'application/rss+xml', title: `${title} RSS Feed`}],
]

const hostname: string = isCI ? ogUrl : (process.env.HTTPS ? 'https://localhost/' : 'http://localhost:4173/')

interface Post {
  time: number; // Time in UTC
  title: string; // Heading
  link: string; // Link to news
  html: string | undefined;
}

function parseNewsArticle({ url, src, html }: ContentData): Post {
  // Get time
  const filename = basename(url)
  const year = parseInt(basename(dirname(url)))
  if (!year)
    throw new Error(`Cannot parse year in "${url}"`)
  const time = getNewsTime(filename, year)

  // Read file, split into lines
  const firstLine = src?.split(/\r?\n/, 1).shift()

  // Check for markdown
  if (firstLine?.startsWith('## ')) {
    const { title, link } = getMarkdownTitleLink(firstLine.slice(3).trim())
    return {
      html,
      time,
      title,
      link: `${hostname}news/${year}.html#${link}`,
    }
  }

  // Fail
  throw new Error(`Failed to parse metadata for "${url}`)
}

export async function buildFeed({ outDir }: SiteConfig) {
    const feed = new Feed({
      copyright,
      description,
      favicon: `${hostname}/favicon.svg`,
      id: hostname,
      image: ogImage,
      link: hostname,
      title: `${title} News`,
    })

    const posts = await createContentLoader('news/*/*.md', {
      includeSrc: true,
      render: true,
      transform: (raw) =>
        raw
          .map(parseNewsArticle)
          .sort((a, b) => b.time - a.time)
          .slice(0, 10),
    }).load()
  
    for (const { title, link, time, html } of posts) {
      feed.addItem({
        title,
        content: html,
        date: new Date(time),
        id: link,
        link,
      })
    }
  
    writeFileSync(resolve(outDir, 'rss.xml'), feed.rss2())
}
