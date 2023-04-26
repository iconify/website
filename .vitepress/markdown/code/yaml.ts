import { readFileSync } from 'node:fs'
import yaml from 'yaml'
import { renderCodeEnv } from './env'
import { locateCodeSample, validateCodeSource } from './locate'
import { replaceAllStrings } from './replace'
import { addCodeDemoTab, addCodeTab } from './tab'

/**
 * Code parameters
 */

interface CodeSampleChunk {
  src: string
  title: string
  hint: string
}

interface InlineCodeReplacement {
  search: string
  replace: string
}

interface CodeSample {
  // Main fie
  src: string // Source file
  title?: string // Tab text
  hint?: string // Hint

  // Extra code
  extra: CodeSampleChunk[]

  // Stylesheet
  css?: string // Stylesheet file, could be without extension
  cssTitle?: string // Stylesheet tab title
  cssHint?: string

  // Demo
  demo?: boolean | string // True if demo should be shown below code, optional filename for demo
  demoFirst?: boolean // True if demo should be rendered before code samples
  demoTitle?: string // Demo tab title
  demoHint?: string
  class?: string // Class name to wrap demo

  // Replacements
  replacements?: InlineCodeReplacement[]
}

const defaultCodeSampleChunk: Required<CodeSampleChunk> = {
  src: '',
  title: '',
  hint: '',
}

const defaultCodeSample: Required<CodeSample> = {
  src: '',
  title: '',
  hint: '',
  extra: [],
  css: '',
  cssTitle: '',
  cssHint: '',
  class: '',
  demo: false,
  demoFirst: true,
  demoTitle: '',
  demoHint: '',
  replacements: [],
}

// Keys to check for valid filenames
const validateSources: (keyof CodeSample)[] = ['src', 'css']

/**
 * Get file contents
 */
function getFile(filename: string): string {
  const data = readFileSync(filename, 'utf8')
  // return replaceAllStrings(data, context.replacements);
  return data
}

/**
 * Parse YAML code sample
 */
export function parseYamlCode(code: string) {
  const data = yaml.parse(code) as Required<CodeSample>
  const replacements = Object.create(null) as Record<string, string>

  if (typeof data !== 'object' || typeof (data as unknown).src !== 'string') {
    // Do not treat it as custom code
    addCodeTab({
      type: 'src',
      lang: 'yaml',
      code,
    })
    return
  }

  const replaceContent = (str: string): string =>
    replaceAllStrings(str, replacements)

  // Clean up data
  for (const key in defaultCodeSample) {
    const attr = key as keyof CodeSample

    if (attr === 'extra') {
      // Handle extra array
      if ((data as unknown).extra === undefined) {
        data.extra = []
        continue
      }
      if (!(Array.isArray(data.extra))) {
        // Wrong type?
        throw new TypeError(
                    `Invalid value type for "${attr}" in code block in ${renderCodeEnv.filename}.`,
        )
      }

      // Validate all entries in extra sources
      data.extra.forEach((source) => {
        if (typeof source !== 'object' || typeof (source as unknown).src !== 'string') {
          throw new TypeError(
                        `Invalid value type for "${attr}" in code block in ${renderCodeEnv.filename}.`,
          )
        }

        // Check other attributes
        for (const key2 in defaultCodeSampleChunk) {
          const attr2 = key2 as keyof CodeSampleChunk
          if ((source as unknown)[attr2] === undefined) {
            source[attr2] = defaultCodeSampleChunk[attr2]
            continue
          }
          if (typeof source[attr2] !== typeof defaultCodeSampleChunk[attr2]) {
            throw new TypeError(
                            `Invalid value for "${attr}" in code block in ${renderCodeEnv.filename}.`,
            )
          }
        }

        // Validate source
        if (!validateCodeSource(source.src)) {
          throw new Error(
                        `Invalid value for "${attr}" in code block in ${renderCodeEnv.filename}.`,
          )
        }
      })
      continue
    }

    if ((data as unknown)[attr] === undefined) {
      // Copy default value
      const defaultValue = defaultCodeSample[attr];
      (data as unknown as Record<string, unknown>)[attr]
                = Array.isArray(defaultValue) ? [] : defaultValue
      continue
    }

    switch (attr) {
      case 'demo':
        if (
          typeof data[attr] !== 'boolean'
                    && typeof data[attr] !== 'string'
        ) {
          // Wrong type?
          throw new TypeError(
                        `Invalid value type for "${attr}" in code block in ${renderCodeEnv.filename}.`,
          )
        }
        break

      case 'replacements':
        // Validate replacements
        if (!(Array.isArray(data.replacements))) {
          throw new TypeError(
                        `Invalid value type for "${attr}" in code block in ${renderCodeEnv.filename}.`,
          )
        }
        data.replacements.forEach((item) => {
          const search = item.search as unknown
          const replace = item.replace as unknown
          if (
            typeof search !== 'string'
                        || typeof replace !== 'string'
                        || !search.length
          ) {
            throw new Error(
                            `Invalid value type for "${attr}" in code block in ${renderCodeEnv.filename}.`,
            )
          }
          replacements[search] = replace
        })
        break

      default:
        if (typeof data[attr] !== typeof defaultCodeSample[attr]) {
          // Wrong type?
          throw new TypeError(
                        `Invalid value type for "${attr}" in code block in ${renderCodeEnv.filename}.`,
          )
        }
    }

    if (
      validateSources.includes(attr)
            && (attr === 'src' || data[attr] !== '')
    ) {
      // Validate source
      if (!validateCodeSource(data[attr] as string)) {
        throw new Error(
                    `Invalid value for "${attr}" in code block in ${renderCodeEnv.filename}.`,
        )
      }
    }
  }

  // Check for invalid attributes
  for (const key in data) {
    const attr = key as keyof CodeSample
    if ((defaultCodeSample as unknown)[attr] === undefined) {
      throw new Error(
                `Invalid attribute "${attr}" in code block in ${renderCodeEnv.filename}.`,
      )
    }
  }

  // Reusable function to render demo
  const renderDemoSample = (showTitle: boolean) => {
    const demoSource = typeof data.demo === 'string' ? data.demo : data.src
    const demoFile = locateCodeSample(demoSource, 'demo')
    if (demoFile === null) {
      throw new Error(
                `Unable to locate demo file "${demoSource}" in code block in ${renderCodeEnv.filename}. Demo file must match source file, but end with ".demo.html" or ".html"`,
      )
    }
    addCodeDemoTab({
      src: demoSource,
      css: data.class,
      title: showTitle ? data.demoTitle : '',
      html: getFile(demoFile),
      hint: data.demoHint,
      replace: replaceContent,
    })
  }

  // Demo, before code
  if (data.demo && data.demoFirst)
    renderDemoSample(false)

  // Get code
  const sources: CodeSampleChunk[] = [
    {
      src: data.src,
      title: data.title,
      hint: data.hint,
    },
  ].concat(data.extra)

  sources.forEach((source) => {
    const src = source.src
    const sourceFile = locateCodeSample(src, 'src')
    if (sourceFile === null) {
      throw new Error(
          `Unable to locate file "${src}" in code block in ${renderCodeEnv.filename}.`,
      )
    }
    addCodeTab({
      type: 'src',
      src,
      title: source.title,
      lang: source.src.split('.').pop()!,
      code: getFile(sourceFile),
      hint: source.hint,
      replace: replaceContent,
    })
  })

  // Get stylesheet
  if (data.css !== '') {
    const cssSource = data.css
    const stylesheetFile = locateCodeSample(cssSource, 'css')
    if (stylesheetFile === null) {
      throw new Error(
          `Unable to locate file "${cssSource}" in code block in ${renderCodeEnv.filename}.`,
      )
    }
    addCodeTab({
      type: 'css',
      src: cssSource,
      title: data.cssTitle,
      lang: 'scss',
      code: getFile(stylesheetFile),
      hint: data.cssHint,
      replace: replaceContent,
    })
  }

  // Demo
  if (data.demo && !data.demoFirst)
    renderDemoSample(true)
}
