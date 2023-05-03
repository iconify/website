import type { MarkdownRenderer } from 'vitepress'

// @ts-expect-error Default export from old code
import type Token from 'markdown-it/lib/token'

function changeTokens(tokens: Token[], nested = false) {
  tokens.forEach((token, index) => {
    if (token.type === 'fence' && !token.children) {
      token.tag = ''
      token.type = (token.info !== 'yaml' || nested || index) ? 'code_block' : 'metadata'
    }

    if (token.children)
      changeTokens(token.children, true)
  })
}

export function disableFenceMD(md: MarkdownRenderer) {
  // Change 'fence' tokens to custom 'code_block' tokens.
  // This blocks VP Markdown plugins that deal with code as well as markdown-it built in syntax highlight,
  // allowing to use custom syntax highlight function
  md.core.ruler.push('code_block', (state) => {
    changeTokens(state.tokens)
    return true
  })
}
