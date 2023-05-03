import { replaceAllStrings } from '../code/replace'
import { contentReplacements } from '../config'
import { mergeMDMetadata } from '../metadata/split'
import { parseMDContent } from './parse'

// Replacements based on config
const defaultReplacements = Object.create(null) as Record<string, string>

function add(suffixes: string[], value: string) {
  const key = `\${${suffixes.join('.')}}`
  defaultReplacements[key] = value
}

function addReplacements(values: Record<string, unknown>, suffixes: string[]) {
  for (const key in values) {
    const item = values[key]
    if (typeof item === 'string') {
      add([
        ...suffixes,
        key,
      ], item)
      continue
    }

    if (typeof item === 'object' && item) {
      addReplacements(item as Record<string, unknown>, [
        ...suffixes,
        key,
      ])
      continue
    }

    throw new Error(`Invalid config value: ${[...suffixes, key].join('.')}`)
  }
}
addReplacements(contentReplacements, [])

/**
 * Parse MD string
 */
export function customMDParser(src: string, filename: string): string {
  // Parse file
  let { content, metadata } = parseMDContent(src, filename)

  // Replace default stuff
  content = replaceAllStrings(content, defaultReplacements)

  // Return it
  return mergeMDMetadata(content, metadata)
}
