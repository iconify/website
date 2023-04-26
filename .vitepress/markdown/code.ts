import hljs from 'highlight.js'
import type { MarkdownRenderer } from 'vitepress'

const codeHeader = '<code class="highlight hljs">'
const codeFooter = '</code>'

/**
 * Dummy callback for replacing content
 */
function returnContent(str: string): string {
  return str
}

/**
 * Code tabs
 */
type TabTypes = 'src' | 'css' | 'demo'

interface CodeTab {
  type: TabTypes
  src: string
  title: string
  lang: string
  raw: string
  html: string
  hint: string
  replace: typeof returnContent
}

/**
 * Clean code
 */
function cleanupCode(lang: string, str: string): string {
  switch (lang) {
    case 'php':
      if (
        str.trim().slice(0, 5) === '<?php'
                && str.trim().slice(-2) === '?>'
      ) {
        // Remove <?php and ?>
        str = str.trim()
        str = str.slice(5, str.length - 2).trim()
      }
      break
  }

  return str
}

/**
 * Highlight syntax in code
 */
function highlightCode(lang: string, str: string) {
  let code: string

  function highlight(lang: string, str: string): string {
    // Check for language
    if (!hljs.getLanguage(lang)) {
      throw new TypeError(
                `Bad language for code block: ${lang}`,
      )
    }

    // Prepare code
    let modified = false
    switch (lang) {
      case 'jsx':
        if (str.slice(0, 1) === '<' && str.trim().slice(-1) === '>') {
          // Wrap tag in () to allow syntax highlight
          modified = true
          str = `(${str})`
        }
        break
    }

    // Parse code
    try {
      code = hljs.highlight(str, {
        language: lang,
      }).value
    }
    catch (err) {
      console.error(err)
      throw new Error(`Error parsing code block for "${lang}"`)
    }

    // Fix errors
    switch (lang) {
      case 'php':
      case 'js':
        code = code.replaceAll('<span class="hljs-doctag">@iconify</span>', '@iconify')
        break

      case 'jsx':
        if (modified) {
          // Remove ()
          code = code.slice(1, code.length - 2)
        }
        break
    }
    return code
  }

  switch (lang) {
    case 'raw':
      // Raw code
      code = str
      break

    case 'astro': {
      // Highlight chunks separately
      const chunks = str.split('---')
      if (chunks.length !== 3 || chunks.shift().trim() !== '')
        throw new Error('Bad Astro code')

      const separator = '<span class="hljs-comment">---</span>'
      code = `${separator}\n${highlight(
                'js',
                chunks[0].trim(),
            )}\n${separator}\n\n${highlight('vue', chunks[1].trim())}`
      break
    }

    default:
      // Run default function
      code = highlight(lang, str)
  }

  // Replace tabs, spaces and new lines
  code = code.replace(/\t/g, ' &nbsp; &nbsp;')
  code = code.replace(/ {2}/g, ' &nbsp;')
  code = code.replace(/\n/g, '<br />\n')

  return codeHeader + code + codeFooter
}

/**
 * Render tabs
 */
function renderTabs(tabs: CodeTab[]): string {
  let code = '<div class="code-blocks">'
  tabs.forEach((tab) => {
    let raw = ''
    if (tab.raw !== '') {
      // eslint-disable-next-line n/prefer-global/buffer
      const buff = Buffer.from(tab.raw, 'utf8')
      raw = tab.replace(buff.toString('base64'))
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
                += `<div class="code-block-title">${tab.replace(tab.title)}</div>`
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
                += `<div class="code-block-hint">${tab.replace(tab.hint)}</div>`
    }

    // Close container

    code += '</div>'
  })

  code += '</div>'
  return code
  // return tabs.map((tab) => tab.html).join('');
}

/**
 * Add code
 */
interface RenderTabProps {
  tabs: CodeTab[]
  type: TabTypes
  src: string
  title: string
  lang: string
  code: string
  hint: string
  replace: typeof returnContent
}
function renderTab({
  tabs,
  type,
  src,
  title,
  lang,
  code,
  hint,
  replace,
}: RenderTabProps) {
  // Change content
  code = cleanupCode(lang, code)

  // Add tab
  tabs.push({
    type,
    src,
    title,
    lang,
    raw: code,
    html: highlightCode(lang, replace(code)),
    hint,
    replace,
  })
}

export function codeMDPlugin(md: MarkdownRenderer) {
  md.renderer.rules.code_block = (...params) => {
    const [tokens, idx] = params
    const token = tokens[idx]
    const lang = token.info
    const code = token.content
    const tabs: CodeTab[] = []

    if (!lang) {
      throw new TypeError(
        'Missing language for code block',
      )
    }

    renderTab({
      tabs,
      type: 'src',
      src: '',
      title: '',
      lang,
      code,
      hint: '',
      replace: returnContent,
    })

    return renderTabs(tabs)
  }
}
