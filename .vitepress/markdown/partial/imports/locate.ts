import { readFileSync } from 'node:fs'

const sourceDir = 'partials'

type IncludedFileType = 'md' | 'html'
const allowedExtensions: IncludedFileType[] = ['md', 'html']

export interface LocatedIncludedFile {
  type: IncludedFileType
  filename: string
  content: string
}

/**
 * Locate included file
 */
export function locateIncludedFile(source: string): LocatedIncludedFile | undefined {
  for (let i = 0; i < allowedExtensions.length; i++) {
    const type = allowedExtensions[i]
    const filename = `${sourceDir}/${source}.${type}`
    try {
      const content = readFileSync(filename, 'utf8').trim()
      return {
        type,
        filename,
        content,
      }
    }
    catch {
      //
    }
  }
}
