import type { MDMetaData } from '../../metadata/types'

/**
 * Metadata passed from included chunks to parent document
 *
 * Because markdown is processed after merging all child nodes,
 * types and functions in partial documents are processed with main
 * document, so they need to be passed to parent document
 */
export type MDMetaDataFromImports = Pick<MDMetaData, 'types' | 'functions'>

const keys: (keyof MDMetaDataFromImports)[] = ['types', 'functions']

/**
 * Merge document metadata with child metadata
 */
export function mergeImportedMetadata(filename1: string, filename2: string, metadata?: MDMetaData, childMetadata?: MDMetaDataFromImports): MDMetaDataFromImports | undefined {
  if (!metadata)
    return childMetadata

  const result: MDMetaDataFromImports = {}
  keys.forEach((prop) => {
    const itemValue = metadata[prop]
    const childValue = childMetadata?.[prop]
    if (childValue) {
      if (!itemValue) {
        result[prop] = childValue
        return
      }

      // Merge, overwriting values from included chunk
      result[prop] = {
        ...childValue,
        ...itemValue,
      }
      return
    }

    if (itemValue)
      result[prop] = itemValue
  })

  return Object.keys(result).length ? result : undefined
}
