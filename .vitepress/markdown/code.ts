import type { MarkdownRenderer } from 'vitepress'
import { addCodeTab } from './code/tab'
import { renderCodeTabs, resetCodeTabs } from './code/tabs'
import { parseYamlCode } from './code/yaml'

export function codeMDPlugin(md: MarkdownRenderer) {
  md.renderer.rules.code_block = (tokens, idx, options, env, _md) => {
    const token = tokens[idx]
    const lang = token.info
    const code = token.content

    const filename = env?.relativePath || 'unknown'
    if (!lang) {
      throw new TypeError(
        `Missing language for code block in "${filename}"`,
      )
    }

    resetCodeTabs()
    if (lang === 'yaml') {
      parseYamlCode(code, filename)
    }
    else {
      addCodeTab({
        filename,
        type: 'src',
        lang,
        code,
      })
    }

    return renderCodeTabs()
  }
}
