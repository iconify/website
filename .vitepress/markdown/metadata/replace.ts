import { replaceAllStrings } from '../code/replace'
import type { MDMetaData } from './types'

/**
 * Apply replacements
 */
export function applyMetadataReplacements(content: string, metadata?: MDMetaData): string {
  const replacements = metadata?.replacements
  if (!replacements)
    return content

  const pairs = Object.create(null) as Record<string, string>
  replacements.forEach((item) => {
    pairs[item.code] = item.value
  })
  return replaceAllStrings(content, pairs)
}
