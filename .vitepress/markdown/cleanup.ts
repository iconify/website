import { load } from 'cheerio'
import type { MarkdownRenderer } from 'vitepress'
import { fixHTMLBug } from './fix-html'
import { fixHTMLLinks } from './links/fix'
import { applyLinksInHTML } from './links/metadata'
import { applyLinksForTypes } from './links/types'
import type { MDEnv } from './metadata/types'

export function cleanupRenderedHTML(content: string, md: MarkdownRenderer, env?: MDEnv): string {
  if (!env)
    return content

  // Get metadata
  const metadata = env.metadata

  // Parse HTML
  const $html = load(content, {
    lowerCaseAttributeNames: false,
    _useHtmlParser2: true,
  })

  // Links for functions
  if (metadata?.functions) {
    fixHTMLLinks(metadata.functions, md, env)
    applyLinksInHTML($html, metadata, metadata.functions, {
      selector: '.hljs-function',
      title: '{item}() documentation',
    })
  }

  // Classes
  if (metadata?.classes) {
    fixHTMLLinks(metadata.classes, md, env)
    applyLinksInHTML($html, metadata, metadata.classes, {
      selector: '.hljs-class',
      title: '{item} documentation',
    })
  }

  // Types
  if (metadata?.types) {
    fixHTMLLinks(metadata.types, md, env)
    applyLinksForTypes($html, metadata, metadata.types)
  }

  return fixHTMLBug($html.html())
}
