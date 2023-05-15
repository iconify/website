import { resolve } from 'node:path'
import { lstatSync, readdirSync } from 'node:fs'
import type { SidebarItem } from '../.vitepress/nav/sidebar-item'
import { GlobalSidebar } from '../.vitepress/nav/sidebar'

const rootFolder = process.cwd()
const distFolder = resolve(rootFolder, 'dist')

const ignoredFiles = new Set([
  // Main files
  '/index.html', '/404.html',
  // Docs used in iframe
  '/docs/delay-demo-freeze.html', '/docs/delay-demo-icon.html', '/docs/delay-demo.html',
])

// Find all built files
const files: Set<string> = new Set()
function scanDir(parent: string) {
  const dir = distFolder + parent
  readdirSync(dir).forEach((item) => {
    if (item.startsWith('.'))
      return

    const filename = `${dir}/${item}`
    const stat = lstatSync(filename)
    if (stat.isDirectory()) {
      scanDir(`${parent}/${item}`)
      return
    }

    if (item.endsWith('.html')) {
      const file = `${parent}/${item}`
      if (!ignoredFiles.has(file))
        files.add(file)
    }
  })
}
scanDir('')

// Flatten navigation
const nav: string[] = []
function addItems(items: SidebarItem[]) {
  items.forEach(({ link, items }) => {
    if (link) {
      // Validate it
      if (!link.startsWith('/'))
        throw new Error(`Link "${link}" is not absolute`)

      // Clean up link, pointing to .html file
      let file
      if (link.endsWith('/'))
        file = `${link}index.html`
      else if (link.endsWith('.md'))
        file = link.replace('.md', '.html')
      else
        file = `${link}.html`

      nav.push(file)

      // Check if it exists
      if (!files.has(file))
        throw new Error(`Missing built file for "${link}", expected "${file}"`)
      files.delete(file)
    }

    // Add child items
    if (items)
      addItems(items)
  })
}
addItems(GlobalSidebar)

if (files.size) {
  console.log(`${files.size} items not in sidebar:`)
  console.log(Array.from(files).join('\n'))
}
