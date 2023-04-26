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

interface RenderCodeEnv {
  filename: string
  tabs: CodeTab[]
}

/**
 * Current code parser data
 */
export const renderCodeEnv: RenderCodeEnv = {
  filename: '',
  tabs: [],
}

/**
 * Reset code tabs
 */
export function setRenderCodeEnv(filename: string) {
  renderCodeEnv.filename = filename
  renderCodeEnv.tabs = []
}

function returnContent(str: string): string {
  return str
}

export function renderCodeTabs(): string {
  let code = '<div class="code-blocks">'
  renderCodeEnv.tabs.forEach((tab) => {
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

    // Content
    code
            += `<div class="code-block-content code-block-content--with${
             tab.title === '' ? 'out' : ''
             }-title code-block-content--with${
             tab.hint === '' ? 'out' : ''
             }-hint"${
             raw === '' ? '' : ` data-raw-code="${raw}"`
             }>${
             tab.html
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
