import { resolve } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import fg from 'fast-glob'
import { parse } from 'yaml'

/** @type {Record<number,string>} */
const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
}

/**
 * Get date from file
 *
 * @param {string} file
 * @param {number|string} year
 * @returns {number}
 */
function getNewsTime(file, year) {
  // Remove extension
  file = file.replace(/.(html|md)$/, '')

  // Check for 'dd.mm' format
  const parts = file.split('.')
  if (parts.length === 2) {
    const date = Date.UTC(+year, +parts[1] - 1, +parts[0], 0, 0, 0, 0)
    if (!date)
      throw new Error(`Cannot detect time from file "${file}"`)
    return date
  }

  if (file.length === 10) {
    // PHP format
    return parseInt(file) * 1000
  }

  if (file.length === 14) {
    // JavaScript format
    return parseInt(file)
  }

  throw new Error(`Cannot detect time from file "${file}"`)
}

/**
 * Get string from time stamp
 *
 * @param {Date|number} date
 * @param {boolean} includeYear
 * @returns {string}
 */
function timeToString(date, includeYear) {
  const time = typeof date === 'number' ? new Date(date) : date
  return `${time.getUTCDate()} ${months[time.getUTCMonth() + 1]}${includeYear ? ' ' + time.getUTCFullYear() : ''}`
}

/**
 * Regex to test a link
 *
 * @type {RegExp}
 */
const idMatch = /^[a-z][a-z0-9-]*[a-z0-9]$/;

/**
 * Generate link from title
 *
 * @param {string} title
 * @returns {string}
 */
function linkFromTitle(title) {
  const id = title.toLowerCase()
      .toLowerCase()
      .replace(/\(\)/g, '')
      .replace(/[?!]/g, '')
      .split(/[\s\/.,]+/)
      .join('-')
  if (!id.match(idMatch))
    throw new Error(`Could not convert text to id: "${title}"`)
  return id
}

/**
 * Get title and link from markdown heading
 *
 * @param {string} text
 * @returns {{link: string, title: string}}
 */
function getMarkdownTitleLink(text) {
  // {#custom-id}
  const pos = text.indexOf('{#')
  if (pos === -1)
    return {
      title: text,
      link: linkFromTitle(text),
    }

  if (text.slice(-1) !== '}')
    throw new Error(`Cannot extract heading id "${text}"`)

  const link = text.slice(pos + 2, text.length - 1)
  if (!link.match(idMatch))
    throw new Error(`Cannot extract id from heading "${text}"`)

  return {
    title: text.slice(0, pos).trim(),
    link,
  };
}

/**
 * Check if target is a valid news file
 *
 * @param {string} file
 * @returns {boolean}
 */
function isValidNewsFile(file) {
  const name = file.split(/\//).pop()
  return (!name.startsWith('_') && (name.endsWith('.md') || name.endsWith('.html')))
}


/**
 * Parse article
 *
 * @param {string} file
 * @returns {Promise<import('./news.d.ts').ParsedNewsItem>}
 */
async function parseNewsArticle(file) {
  // Get time
  const fileParts = file.replace(/\\/g, '/').split(/\//)
  const filename = fileParts.pop()
  const year = parseInt(fileParts.pop())
  if (!year)
    throw new Error(`Cannot parse year in "${file}"`)
  const time = getNewsTime(filename, year)

  // Read file, split into lines
  const content = await readFile(file, 'utf-8')
  const lines = content.split(/\r?\n/)
  const firstLine = lines.shift()

  // Common results
  const results = {
    time,
    year,
    file,
    filename,
  }

  // Check for markdown
  if (firstLine.startsWith('## ')) {
    const title = firstLine.slice(3).trim()
    const content = lines.join('\n').trim()
    return {
      ...getMarkdownTitleLink(title),
      content,
      ...results,
    }
  }

  // Check for HTML with YAML heading
  if (firstLine.startsWith('<script') && (firstLine.includes('type="text/yaml"') || firstLine.includes('lang="yaml"'))) {
    const yamlLines = []
    while (true) {
      const line = lines.shift()
      if (!line)
        throw new Error(`Failed to find title in "${file}`)

      if (line.startsWith('</script')) {
        // End of yaml
        const data = parse(yamlLines.join('\n'))

        // Validate data
        if (typeof data.title !== 'string')
          throw new Error(`Missing title in "${file}`)
        if (typeof data.link !== 'string')
          throw new Error(`Missing link in "${file}`)

        return {
          ...data,
          content: lines.join('\n').trim(),
          ...results,
        }
      }

      yamlLines.push(line.trimStart())
    }
  }

  // Fail
  throw new Error(`Failed to parse metadata for "${file}`)
}

/**
 * @param {string} newsFolder
 * @param {string} year
 * @return {Promise<import('./news.d.ts').ParsedNewsItem[]>}
 */
async function findLatestNews(newsFolder, year) {
  // Find all files
  const dir = resolve(newsFolder, year)
  /** @type string[] */
  const files = (await fg('*.*', { cwd: dir, onlyFiles: true })).filter(isValidNewsFile).map(file => dir + '/' + file)

  // Get data
  const promises = files.map(file => parseNewsArticle(file))
  /** @type import('./news.d.ts').ParsedNewsItem[] */
  const items = await Promise.all(promises)
  items.sort((a, b) => (b.time - a.time))

  return items
}

/**
 * @param {string} newsFolder
 * @param {string} year
 * @return {Promise<void>}
 */
async function generateYearNews(newsFolder, year) {
  const items = await findLatestNews(newsFolder, year)

  const newsContent = `---
editLink: false
---
<!-- DO NOT EDIT THIS PAGE IT IS AUTOGENERATED -->

# Iconify Updates ${year}

${items.map(item => `
## ${item.title} \`[news-time] ${timeToString(item.time, false)}\` {#${item.link}}

${item.content}
`).join('\n')}
`
  await writeFile(resolve(newsFolder, `${year}.md`), newsContent, 'utf-8')
}

/**
 * @param {string} newsFolder
 * @param {string[]} years
 * @return {Promise<void>}
 */
function generateNewsIndex(newsFolder, years) {
  const newsList = `---
editLink: false
---
<!-- DO NOT EDIT THIS PAGE IT IS AUTOGENERATED -->
# Iconify Updates

Iconify updates can be found in the following pages:

${years.sort().reverse().map(y => `- [Year ${y}](./${y})`).join('\n')}

<latest-news />
`

  return writeFile(resolve(newsFolder, 'index.md'), newsList, 'utf-8')
}

/**
 * @param {string} rootFolder
 * @param {string} newsFolder
 * @param {string[]} years
 * @return {Promise<void>}
 */
async function generateLatestNews(rootFolder, newsFolder, years) {
  /** @type {import('./news.d.ts').ParsedNewsItem[]} */
  const latestNews = []
  /** @type {string} */
  let entryName
  for (const year of years.sort().reverse()) {
    if (latestNews.length >= 5)
      break

    const news = await findLatestNews(newsFolder, year)
    for (let i = 0; i < news.length && latestNews.length < 5; i++)
      latestNews.push(news[i])
  }

  const latestNewsContent = `<!-- DO NOT EDIT THIS COMPONENT IT IS AUTOGENERATED -->
## Latest updates

<div class="latest-news">
${latestNews.map(item => `<p><span>${timeToString(item.time, true)}</span><a href="/news/${item.year}.html#${item.link}">${item.title}</a></p>`).join('\n')}
</div>
`
  await writeFile(resolve(rootFolder, '.vitepress/theme/components/LatestNews.md'), latestNewsContent, 'utf-8')
}

/**
 * @param {string} rootFolder
 * @param {string[]} years
 * @return {Promise<void>}
 */
function generateNewsNavbar(rootFolder, years) {
  const newsNavigationContent = `// DO NOT EDIT THIS MODULE IT IS AUTOGENERATED
import type { DefaultTheme } from 'vitepress'

export const NewsSidebar: DefaultTheme.SidebarItem[] = [
  ${years.sort().reverse().map(y => `{ text: 'Year ${y}', link: '/news/${y}.md' }`).join(',\n  ')},
]
`

  return writeFile(resolve(rootFolder, '.vitepress/nav/news.ts'), newsNavigationContent, 'utf-8')
}

const rootFolder = process.cwd()
const newsFolder = resolve(rootFolder, 'news')

/** @type {string[]} */
const years = await fg('*', { cwd: newsFolder, deep: 1, onlyDirectories: true })

await Promise.all([
  generateNewsIndex(newsFolder, years),
  generateNewsNavbar(rootFolder, years),
  generateLatestNews(rootFolder, newsFolder, years),
  ...years.map(y => generateYearNews(newsFolder, y)),
])
