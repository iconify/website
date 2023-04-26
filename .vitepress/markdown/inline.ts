import hljs from 'highlight.js'
import type { MarkdownRenderer } from 'vitepress'
import { escapeHtml } from 'markdown-it/lib/common/utils'
import './highlight'

/**
 * Code sample wrappers
 */
interface CodeWrapper {
  header: string
  footer: string
}

const wrappers: Record<string, CodeWrapper> = {
  str: {
    header: '"',
    footer: '"',
  },
}

/**
 * Wrap code
 */
function wrap(type: string, text: string): string {
  return (
    (!wrappers[type] ? '' : wrappers[type].header)
        + text
        + (!wrappers[type] ? '' : wrappers[type].footer)
  )
}

/**
 * Wrap type
 */
const midSeparators: string[] = [',', '[]', '|', ' or ', '(', ')']
const typeSeparators: string[] = midSeparators.concat(['Record', '<', '>'])
function wrapType(raw: string, escaped: string): string {
  function split(type: string): string[] {
    // Attempt to split types
    let typesStart: string[] = []
    let typesEnd: string[] = []
    let changed = false

    function checkSpaces() {
      // Space at start
      while (type.slice(0, 1) === ' ') {
        typesStart.push(' ')
        type = type.slice(1)
        changed = true
      }

      // Space at the end
      while (type.slice(-1) === ' ') {
        typesEnd.unshift(' ')
        type = type.slice(0, type.length - 1)
        changed = true
      }
    }

    checkSpaces()
    if (type === '')
      return typesStart.concat(typesEnd)

    // Check separators
    for (let i = 0; i < typeSeparators.length; i++) {
      const separator = typeSeparators[i]

      // At start
      if (type.slice(0, separator.length) === separator) {
        typesStart.push(separator)
        type = type.slice(separator.length)
        changed = true

        // Space after separator
        checkSpaces()
      }

      // At the end
      if (type.slice(0 - separator.length) === separator) {
        typesEnd.unshift(separator)
        type = type.slice(0, type.length - separator.length)
        changed = true

        // Space before separator
        checkSpaces()
      }
    }

    // Remaining part
    if (changed) {
      // Run it again on content
      return typesStart.concat(split(type), typesEnd)
    }

    // Find separators in the middle
    for (let i = 0; i < midSeparators.length; i++) {
      const separator = midSeparators[i]
      const index = type.indexOf(separator)
      if (index !== -1) {
        const firstChunk = type.slice(0, index)
        const lastChunk = type.slice(index + separator.length)
        if (firstChunk.length)
          typesStart = typesStart.concat(split(firstChunk))

        typesStart.push(separator)
        if (lastChunk.length)
          typesEnd = split(lastChunk).concat(typesEnd)

        return typesStart.concat(typesEnd)
      }
    }

    // Merge start, remaining chunk, end
    return typesStart.concat([type], typesEnd)
  }
  const types = split(raw)

  // Merge list and escape contents
  return (
    `<span class="hljs-inline-type hljs-linkable">${
       types
        .map((type) => {
          switch (type) {
            case '<':
              return '&lt;'

              case '>':
              return '&gt;'

              case ' ':
              return type
            }
          if (midSeparators.includes(type))
              return type

          return (
            `<span class="hljs-inline-type hljs-linkable">${type}</span>`
          )
        })
        .join('')
       }</span>`
  )

  /*
  return wrap(
      'type',
      '<span class="hljs-inline-type hljs-linkable">' + escaped + '</span>'
  );
  */
}

export function customInlineCodeMD(md: MarkdownRenderer) {
  const oldParser = md.renderer.rules.code_inline
  if (!oldParser)
    throw new Error('Missing default parser for code_inline')

  md.renderer.rules.code_inline = (...params) => {
    const [tokens, idx] = params
    const token = tokens[idx]
    let rawContent = token.content

    // Replace few items
    switch (rawContent) {
      case 'null':
        rawContent = '[null]null'
        break

      case 'true':
      case 'false':
        rawContent = `[bool]${rawContent}`
        break
    }

    // Check for custom token
    if (rawContent.slice(0, 1) !== '[')
      return oldParser(...params)

    // Get and remove [type]
    rawContent = rawContent.slice(1)
    const index = rawContent.indexOf(']')
    if (index === -1)
      return oldParser(...params)

    const type = rawContent.slice(0, index)
    rawContent = rawContent.slice(index + 1)

    // Escape HTML
    let escapedContent = escapeHtml(rawContent)

    // Custom renderer?
    switch (type) {
      // Attribute: foo="bar"
      case 'attr':
        return (() => {
          // Check for attr="value"
          const parts = escapedContent.split('=')
          if (parts.length === 2) {
            let valueType = 'string'
            let value = parts[1]
            if (value === 'true' || value === 'false')
              valueType = 'literal'
            else if (value.match(/^-?[0-9.]+$/))
              valueType = 'number'

            value = `<span class="hljs-${valueType}">${value}</span>`
            return wrap(
              'attr',
              `<span class="hljs-inline-attr">${parts[0]}</span>=${value}`,
            )
          }

          // Treat as property
          return wrap(
            'prop',
            `<span class="hljs-inline-prop">${escapedContent}</span>`,
          )
        })()

        // Property: foo
      case 'key':
      case 'prop':
        return wrap(
          'prop',
          `<span class="hljs-inline-prop">${escapedContent}</span>`,
        )

        // Variable: Iconify
      case 'var':
        return wrap(
          'var',
          `<span class="hljs-inline-var">${escapedContent}</span>`,
        )

        // Tag: svg, <svg>
      case 'tag':
        if (rawContent.slice(0, 1) !== '<')
          escapedContent = `&lt;${escapedContent}&gt;`

        return wrap(
          'tag',
          `<span class="hljs-inline-tag hljs-linkable">${
                   escapedContent
                   }</span>`,
        )

        // Type: IconifyIcon
      case 'type':
        return wrapType(rawContent, escapedContent)

        // Function
      case 'func':
        return wrap(
          'class',
          `<span class="hljs-function">${escapedContent}</span>`,
        )

        // Class name
      case 'class':
        return wrap(
          'class',
          `<span class="hljs-class">${escapedContent}</span>`,
        )

        // NPM / Packagist packages
      case 'npm':
      case 'packagist':
        return wrap(
          'npm',
          `<span class="hljs-inline-package hljs-linkable">${
                   escapedContent
                   }</span>`,
        )

        // Icon
      case 'icon':
        return wrap(
          'icon',
          `<span class="hljs-inline-icon">${escapedContent}</span>`,
        )

        // String
      case 'str':
        return wrap(
          'str',
          `<span class="hljs-string">${
                   escapeHtml(rawContent.replace(/^['"]?(.*)['"]$/, '$1'))
                   }</span>`,
        )

        // Boolean
      case 'bool':
        return wrap(
          'bool',
          `<span class="hljs-literal">${escapedContent}</span>`,
        )

        // Number
      case 'num':
      case 'number':
        return wrap(
          'num',
          `<span class="hljs-number">${escapedContent}</span>`,
        )

        // Object
      case 'object':
      case 'null':
        return wrap(
          'object',
          `<span class="hljs-literal">${escapedContent}</span>`,
        )

        // Language
      case 'ts':
      case 'js':
      case 'bash':
      case 'json':
      case 'php':
      case 'css':
      case 'html':
        return (
          `<span class="inline-code inline-code--${
             type
             }">${
             (() => {
              if (!hljs.getLanguage(type)) {
                throw new Error(
                    `Bad language for inline code block: ${type}`,
                )
              }
              return hljs.highlight(rawContent, {
                language: type,
              }).value
            })()
             }</span>`
        )

        // Domain / URL
      case 'url':
        return wrap(
          'url',
          `<span class="hljs-inline-link">${escapedContent}</span>`,
        )

        // Filename
      case 'file':
        return wrap(
          'file',
          `<span class="hljs-inline-file">${escapedContent}</span>`,
        )
    }

    return oldParser(...params)
  }
}
