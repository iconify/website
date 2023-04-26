import type { MarkdownRenderer } from 'vitepress'
import { codeMDPlugin } from './markdown/code'
import { disableFenceMD } from './markdown/fence'
import { customInlineCodeMD } from './markdown/inline'
import { metadataMDPlugin } from './markdown/metadata'

export function mdConfig(md: MarkdownRenderer): MarkdownRenderer {
  // Add custom plugins
  disableFenceMD(md)
  customInlineCodeMD(md)
  metadataMDPlugin(md)
  codeMDPlugin(md)
  return md
}
