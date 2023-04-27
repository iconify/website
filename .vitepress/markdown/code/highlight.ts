import hljs from 'highlight.js'
import { fixHighlightedCode } from '../highlight'
import { replaceAllStrings } from './replace'

const codeHeader = '<code class="highlight hljs">'
const codeFooter = '</code>'

/**
 * Clean code
 */
export function cleanupCode(lang: string, str: string): string {
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
export function highlightCode(lang: string, str: string, filename: string) {
  let code: string

  function highlight(lang: string, str: string): string {
    // Check for language
    if (!hljs.getLanguage(lang)) {
      throw new Error(
                `Bad language for code block in ${filename}: ${lang}`,
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
      throw new Error(`Error parsing code block in ${filename}.`)
    }

    // Fix errors
    switch (lang) {
      case 'php':
      case 'js':
        code = replaceAllStrings(code, {
          '<span class="hljs-doctag">@iconify</span>': '@iconify',
        })
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
        throw new Error(`Bad Astro code in ${filename}`)

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
  code = code.trim().replace(/\n/g, '<br />\n').trim()

  // Fix bugs
  code = fixHighlightedCode(code)

  return codeHeader + code + codeFooter
}
