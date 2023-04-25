import type { MarkdownRenderer } from 'vitepress'
import { customInlineCodeMD } from './markdown/inline'

export function mdConfig(md: MarkdownRenderer): MarkdownRenderer {
  customInlineCodeMD(md)
  return md
}
