import type { MarkdownRenderer } from 'vitepress'
import { renderCodeTabs, setRenderCodeEnv } from './code/env'
import { addCodeTab } from './code/tab'
import { parseYamlCode } from './code/yaml'

export function codeMDPlugin(md: MarkdownRenderer) {
  md.renderer.rules.code_block = (tokens, idx, options, env, md) => {
    const token = tokens[idx]
    const lang = token.info
    const code = token.content

    const filename = env?.relativePath || 'unknown'
    setRenderCodeEnv(filename)

    if (!lang) {
      throw new TypeError(
        `Missing language for code block in "${filename}"`,
      )
    }

    if (lang === 'yaml') {
      parseYamlCode(code)
    }
    else {
      addCodeTab({
        type: 'src',
        lang,
        code,
      })
    }

    return renderCodeTabs()
  }
}
