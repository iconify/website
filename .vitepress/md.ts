import type { MarkdownRenderer } from 'vitepress'
import { codeMDPlugin } from './markdown/code'
import { disableFenceMD } from './markdown/fence'
import { htmlMDPlugin } from './markdown/html'
import { customInlineCodeMD } from './markdown/inline'
import { metadataMDPlugin } from './markdown/metadata'
import { customMDParser } from './markdown/partial'

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
    return oldParse.call(md, customMDParser(src, env?.relativePath ?? 'unknown'), env)
  }

  return md
}
