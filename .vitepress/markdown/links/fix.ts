import type { MarkdownRenderer } from 'vitepress'
import type { MDEnv } from '../metadata/types'
import { getAbsoluteLink } from './relative'
import { validateAbsoluteLink } from './validate'

const fixedLinksCache = Object.create(null) as Record<string, string>

function checkSimpleLink(href: string, env: MDEnv): string | undefined {
  // Get last part of link
  const parts = href.split('/')
  const lastPart = parts.pop() as string
  if (lastPart === 'index.md') {
    // Remove 'index.md'
    parts.push('')
    return parts.join('/')
  }

  const lastPartParts = lastPart.split('.')
  if (lastPartParts.length === 2 && lastPartParts.pop() === 'md') {
    // Replace '.md' with '.html', unless cleanUrls option is set
    if (!env.cleanUrls)
      lastPartParts.push('html')

    parts.push(lastPartParts.join('.'))
    return parts.join('/')
  }
}

export function fixHTMLLink(href: string, md: MarkdownRenderer, env: MDEnv): string {
  // Split to link and params
  let target = href.split(/[#?]/).shift() as string
  const params = href.slice(target.length)

  // Convert to absolute link
  if (!target.startsWith('/')) {
    const filename = env?.relativePath
    if (!filename)
      throw new Error('Cannot parse relative link when env.relativePath is missing')

    target = getAbsoluteLink(target, filename)
  }

  // Validate it
  validateAbsoluteLink(target, env?.relativePath)

  // Check for a simple link
  const simpleLink = checkSimpleLink(target, env)
  if (simpleLink)
    return simpleLink + params

  // Use VP links md plugin to fix links that cannot be parsed with checkSimpleLink()
  // Cache result because this operation is slow
  if (fixedLinksCache[target])
    return fixedLinksCache[target] + params

  // Fake markdown
  const fakeContent = `[test](${target})`
  const fakeRender = md.render(fakeContent, JSON.parse(JSON.stringify(env)))
  const actualLink = fakeRender.match(/href="(.*)"/)
  if (!actualLink)
    throw new Error(`Error parsing link "${target}" in HTML code`)

  const fixedLink = actualLink[1]
  fixedLinksCache[target] = fixedLink

  return fixedLink + params
}

export function fixHTMLLinks(links: Record<string, string>, md: MarkdownRenderer, env: MDEnv) {
  for (const key in links)
    links[key] = fixHTMLLink(links[key], md, env)
}
