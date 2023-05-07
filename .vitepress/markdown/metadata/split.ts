import { stringify } from 'yaml'
import type { MDMetaData } from './types'
import { parseMDMetadata } from './parse'

export interface SplitMDMetadata {
  content: string
  metadata?: MDMetaData
}

export function splitMDMetadata(content: string, filename: string): SplitMDMetadata {
  // Split lines
  const lines = content.split(/\r?\n/)

  // Check for metadata
  const firstLine = lines.shift()
  if (firstLine.trim() !== '```yaml') {
    return {
      content,
    }
  }

  const metadataLines: string[] = []
  while (lines.length) {
    const line = lines.shift()
    const trimmedLine = line.trim()

    if (trimmedLine === '```')
    // End of metadata
      break

    if (trimmedLine.slice(0, 3) === '```')
    // More code???
      throw new Error(`Error parsing metadata in "${filename}"`)

    metadataLines.push(line)
  }

  // Code without metadata
  content = lines.join('\n').trim()

  // Parse metadata
  const metadata = parseMDMetadata(metadataLines.join('\n'))

  return {
    metadata,
    content,
  }
}

export function splitHTMLMetadata(content: string, _filename: string): SplitMDMetadata {
  // Split lines
  const lines = content.split(/\r?\n/)

  // Check for metadata
  const firstLine = lines.shift()
  if (!firstLine.includes('<script') || (!firstLine.includes('type="text/yaml"') && !firstLine.includes('lang="yaml"'))) {
    return {
      content,
    }
  }

  const metadataLines: string[] = []
  while (lines.length) {
    const line = lines.shift()

    if (line.includes('</script'))
    // End of metadata
      break

    metadataLines.push(line)
  }

  // Code without metadata
  content = lines.join('\n').trim()

  // Parse metadata
  const metadata = parseMDMetadata(metadataLines.join('\n'))

  return {
    metadata,
    content,
  }
}

export function mergeMDMetadata(content: string, metadata?: MDMetaData): string {
  // Do not add metadata if empty
  if (metadata && Object.keys(metadata).length) {
    return [
      '```yaml',
      stringify(metadata),
      '```',
      '',
      content,
    ].join('\n')
  }

  return content
}
