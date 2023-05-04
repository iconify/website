import type { MarkdownRenderer } from 'vitepress'
import { cleanupRenderedHTML } from './markdown/cleanup'
import { codeMDPlugin } from './markdown/code'
import { disableFenceMD } from './markdown/fence'
import { htmlMDPlugin } from './markdown/html'
import { customInlineCodeMD } from './markdown/inline'
import { metadataMDPlugin } from './markdown/metadata'
import { customMDParser } from './markdown/partial'
import { excludeTransform } from './md-env'

export function mdConfig(md: MarkdownRenderer): MarkdownRenderer {
  // Add custom plugins
  disableFenceMD(md)
  customInlineCodeMD(md)
  metadataMDPlugin(md)
  codeMDPlugin(md)
  htmlMDPlugin(md)

  // Override parser to handle imported content and replacements
  const oldParse = md.parse
  md.parse = (src, env) => {
    if (excludeTransform(env))
      return oldParse.call(md, src, env)

    return oldParse.call(md, customMDParser(src, env?.relativePath ?? 'unknown'), env)
  }

  // Handle rendered HTML
  const oldRender = md.render
  md.render = (src, env) => {
    if (excludeTransform(env))
      return oldRender.call(md, src, env)

    const result = oldRender.call(md, src, env)
    return cleanupRenderedHTML(result, md, env)
  }

  return md
}
