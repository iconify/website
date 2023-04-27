import type { MarkdownRenderer } from 'vitepress'
import { codeMDPlugin } from './markdown/code'
import { parseMDInclude } from './markdown/include'
import { disableFenceMD } from './markdown/fence'
import { customInlineCodeMD } from './markdown/inline'
import { metadataMDPlugin } from './markdown/metadata'

export function mdConfig(md: MarkdownRenderer): MarkdownRenderer {
  // Add custom plugins
  disableFenceMD(md)
  customInlineCodeMD(md)
  metadataMDPlugin(md)
  codeMDPlugin(md)

  // Override render to handle dynamic includes
  const oldRender = md.render
  md.render = (src, env) => {
    const filename = env?.relativePath
    return oldRender(filename ? parseMDInclude(src, filename, env) : src, env)
  }

  return md
}
