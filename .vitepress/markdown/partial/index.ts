import { replaceAllStrings } from '../code/replace'
import { defaultReplacements } from '../metadata/replacements'
import { mergeMDMetadata } from '../metadata/split'
import { parseMDContent } from './parse'

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
