export type CodeTabType = 'src' | 'css' | 'demo'

export interface CodeTab {
  type: CodeTabType
  src: string
  title: string
  lang: string
  raw: string
  html: string
  hint: string
  replace?: (content: string) => string
}

// Replacements for language hint
const langReplacements: Record<string, string> = {
  scss: 'css',
}

/**
 * Current code parser data
 */
let tabs: CodeTab[] = []

/**
 * Reset code tabs
 */
export function resetCodeTabs() {
  tabs = []
}

/**
 * Get current tabs
 */
export function getCodeTabs(): CodeTab[] {
  return tabs
}

function returnContent(str: string): string {
  return str
}

/**
 * Convert tabs content to string
 */
export function renderCodeTabs(): string {
  let code = '<div class="code-blocks">'
  tabs.forEach((tab) => {
    const replace = tab.replace || returnContent
    let raw = ''
    if (tab.raw !== '') {
      // eslint-disable-next-line n/prefer-global/buffer
      const buff = Buffer.from(tab.raw, 'utf8')
      raw = replace(buff.toString('base64'))
    }

    // Container
    code
            += `<div class="code-block code-block--${
            tab.type
            }${tab.title === '' ? '' : ' code-block--with-title'
            }">`

    // Title
    if (tab.title !== '') {
      code
                += `<div class="code-block-title">${replace(tab.title)}</div>`
    }

    // HTML
    let html = tab.html
    if (raw !== '') {
      const baseLang = tab.lang
      const lang = langReplacements[baseLang] ?? baseLang
      html = `<copy-to-clipboard raw="${raw}" lang="${lang}">${html}</copy-to-clipboard>`
    }

    // Content
    code
            += `<div class="code-block-content code-block-content--with${
             tab.title === '' ? 'out' : ''
             }-title code-block-content--with${
             tab.hint === '' ? 'out' : ''
             }-hint">${
             html
             }</div>`

    // Hint
    if (tab.hint !== '') {
      code
                += `<div class="code-block-hint">${replace(tab.hint)}</div>`
    }

    // Close container
    code += '</div>'
  })

  code += '</div>'
  return code
}
