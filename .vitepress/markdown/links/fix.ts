import type { MarkdownRenderer } from 'vitepress'

const globalFixedLinks = Object.create(null) as Record<string, string>

export function fixHTMLLink(href: string, md: MarkdownRenderer, env: unknown): string {
  const isGlobal = href.startsWith('/')
  if (isGlobal && globalFixedLinks[href])
    return globalFixedLinks[href]

  const fakeContent = `[test](${href})`
  const fakeRender = md.render(fakeContent, JSON.parse(JSON.stringify(env)))
  const actualLink = fakeRender.match(/href="(.*)"/)
  if (!actualLink)
    throw new Error(`Error parsing link "${href}" in HTML code`)

  const fixedLink = actualLink[1]
  if (isGlobal)
    globalFixedLinks[href] = fixedLink

  return fixedLink
}
