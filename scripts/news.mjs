import { resolve } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import fg from 'fast-glob'

/**
 * @param {string} file
 * @return {Promise<string|undefined>}
 */
async function readMarkdownTitle(file) {
  const content = await readFile(file, 'utf-8')
  const match = content.match(/^##\s+(.+?)\s*$/m)
  return match ? match[1] : undefined
}

/**
 * @param {string} newsFolder
 * @param {string} year
 * @return {Promise<{ entriesMap: Map<string,string>, entries: string[]}>}
 */
async function findLatestNews(newsFolder, year) {
  /** @type {Map<string,string>} */
  const entriesMap = new Map()
  /** @type {string[]} */
  const entries = await fg('*.md', { cwd: resolve(newsFolder, year), onlyFiles: true })
  // remove excluded files
  return {
    entriesMap,
    entries: entries.filter(n => n[0] !== '_').map((n) => {
      if (/^[0-9]+\.md$/.test(n)) {
        entriesMap.set(n, n)
        return n
      }
      else {
        const [day, month] = n.split('.')
        const name = `${Date.UTC(+year, +month, +day, 0, 0, 0, 0)}.md`
        entriesMap.set(name, n)
        return name
      }
    }).sort().reverse(),
  }
}

/**
 * @param {string} newsFolder
 * @param {string} year
 * @return {Promise<void>}
 */
async function generateYearNews(newsFolder, year) {
  const { entriesMap, entries } = await findLatestNews(newsFolder, year)

  const newsContent = `---
editLink: false
---
<!-- DO NOT EDIT THIS PAGE IT IS AUTOGENERATED -->

# Iconify Updates ${year}

${entries.map(n => `<!--@include: ./${year}/${entriesMap.get(n)}-->`).join('\n')}
`
  await writeFile(resolve(newsFolder, `${year}.md`), newsContent, 'utf-8')
}

/**
 * @param {string} newsFolder
 * @param {string[]} years
 * @return {Promise<void>}
 */
function generateNewsIndex(newsFolder, years) {
  const newsList = `<!-- DO NOT EDIT THIS PAGE IT IS AUTOGENERATED -->
# Iconify Updates

Iconify updates can be found in the following pages:

${years.sort().reverse().map(y => `- [Year ${y}](./${y})`).join('\n')}

<LatestNews />
`

  return writeFile(resolve(newsFolder, 'index.md'), newsList, 'utf-8')
}

/** @type {Record<number,string>} */
const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'July',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
}

/**
 * @param {string} year
 * @param {string[]} dateString
 * @param {string} title
 * @return {{date:string,link:string}}
 */
function generateDateAndLink(year, dateString, title) {
  /** @type {string} */
  let date
  if (dateString.length === 1) {
    const newDate = new Date(+dateString[0])
    console.log(newDate)
    date = `${newDate.getUTCDate()} ${months[newDate.getUTCMonth() + 1]} ${newDate.getUTCFullYear()}`
  }
  else {
    const [day, month] = dateString
    date = `${day} ${months[parseInt(month)]} ${year}`
  }

  return {
    date,
    /*
      The IDs are generated from the content of the header according to the following rules:
          All text is converted to lowercase.
          All non-word text (e.g., punctuation, HTML) is removed.
          All spaces are converted to hyphens.
          Two or more hyphens in a row are converted to one.
          If a header with the same ID has already been generated, a unique incrementing number is appended, starting at 1.
     */
    link: title.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^a-zA-Z0-9-]+/gi, '')
      .replace(/-+/g, '-'),
  }
}

/**
 * @param {string} rootFolder
 * @param {string} newsFolder
 * @param {string[]} years
 * @return {Promise<void>}
 */
async function generateLatestNews(rootFolder, newsFolder, years) {
  /** @type {{title: string,date: string,link: string,year:string}[]} */
  const latestNews = []
  /** @type {string} */
  let entryName
  for (const year of years.sort().reverse()) {
    if (latestNews.length >= 5)
      break

    const { entriesMap, entries } = await findLatestNews(newsFolder, year)
    for (const entry of entries) {
      entryName = entriesMap.get(entry)
      const title = await readMarkdownTitle(resolve(newsFolder, year, entryName))
      if (title) {
        latestNews.push({
          title,
          year,
          ...generateDateAndLink(year, entryName.slice(0, entryName.lastIndexOf('.')).split('.'), title),
        })
        if (latestNews.length >= 5)
          break
      }
    }
  }

  const latestNewsContent = `<!-- DO NOT EDIT THIS COMPONENT IT IS AUTOGENERATED -->
## Latest updates

<div class="latest-news">
${latestNews.map(n => `<p><span>${n.date}</span><a href="/news/${n.year}#${n.link}">${n.title}</a></p>`).join('\n')}
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
  { text: 'Getting Started', link: '/getting-started' },
  {
    text: 'Iconify Updates',
    link: '/news/',
    items: [
      ${years.sort().reverse().map(y => `{ text: 'Year ${y}', link: '/news/${y}' }`).join(',\n      ')},
    ],
  },
]
`

  return writeFile(resolve(rootFolder, '.vitepress/news-navigation.ts'), newsNavigationContent, 'utf-8')
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