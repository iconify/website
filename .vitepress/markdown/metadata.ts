import type { MarkdownRenderer } from 'vitepress'
import { parse } from 'yaml'

interface MDEnv {
  path: string
  relativePath: string
  cleanUrls: boolean
  content?: string
  excerpt?: string
  title?: string
  links?: string[]
}

interface TextReplacement {
  code: string
  value: string
}

export interface MDMetaData {
  title?: string // Page title
  hint?: string // Hint for types
  wip?: boolean // True if document is work in progress
  standalone?: boolean // True if document is not present in navigation
  redirect?: string // Redirection, full link
  navigation?: string // File to use for navigation
  theme?: string // Theme, string
  types?: Record<string, string> // Links to types
  functions?: Record<string, string> // Links to functions
  classes?: Record<string, string> // Links to classes
  replacements: TextReplacement[] // Replacements
}

const defaultMetaData: Required<MDMetaData> = {
  title: '',
  hint: '',
  wip: false,
  standalone: false,
  redirect: '',
  navigation: '',
  theme: 'develop',
  types: {},
  functions: {},
  classes: {},
  replacements: [],
}

export const parsedMetadata = Object.create(null) as Record<string, Required<MDMetaData>>

function parseMetadata(content: string): MDMetaData {
  const data = parse(content)
  if (typeof data !== 'object')
    throw new TypeError('Bad metadata')

  // Check all keys
  const codeRecord = data as Record<string, unknown>
  for (const key in defaultMetaData) {
    const attr = key as keyof MDMetaData
    const value = codeRecord[attr]
    if (value === undefined)
      continue

    if (typeof value !== typeof defaultMetaData[attr])
      throw new TypeError(`Invalid type for ${attr} in metadata`)

    if (attr === 'replacements') {
      if (!(Array.isArray(value)))
        throw new TypeError('Invalid code/value pairs')

      value.forEach((item) => {
        const entry = item as unknown
        if (
          typeof entry !== 'object'
            || typeof (entry as Record<string, unknown>).code !== 'string'
            || typeof (entry as Record<string, unknown>).value !== 'string'
        )
          throw new TypeError('Invalid code/value pair')
      })
    }

    if (value === defaultMetaData[attr]) {
      // Default value
      continue
    }
  }

  // Check for invalid keys
  for (const key in codeRecord) {
    if ((defaultMetaData as Record<string, unknown>)[key] === undefined)
      throw new Error(`Invalid metadata key "${key}"`)
  }

  // Return it
  return data
}

/**
 * Get metadata from markdown
 */
export function metadataMDPlugin(md: MarkdownRenderer) {
  md.renderer.rules.metadata = (tokens, idx, options, env, md) => {
    if (!env)
      throw new Error('Metadata without env')

    const filename = env?.relativePath
    const token = tokens[idx]
    const metadata = parsedMetadata[filename] || parseMetadata(token.content)

    // Store metadata in env if exists
    env.metadata = metadata

    // Overwrite title
    if (metadata.title)
      (env as MDEnv).title = metadata.title

    return ''
  }
}

interface MDMetadataResult {
  raw: string // Metadata as row code
  code: string // Code without metadata
  metadata: MDMetaData // Metadata
  skip: number // Number of lines to skip
}

/**
 * Get metadata from markdown
 */
export function getMDMetadata(code: string, filename: string): MDMetadataResult | undefined {
  // Split lines
  const lines = code.split('\n')

  // Check for metadata
  const firstLine = lines.shift()
  if (firstLine.trim() !== '```yaml')
    return

  const metadataLines: string[] = []
  let skip = 1
  while (lines.length) {
    const line = lines.shift()
    const trimmedLine = line.trim()
    skip++

    if (trimmedLine === '```')
    // End of metadata
      break

    if (trimmedLine.slice(0, 3) === '```')
    // More code???
      throw new Error(`Error parsing metadata in "${filename}"`)

    metadataLines.push(line)
  }

  // Code without metadata
  code = lines.join('\n').trim()

  // Parse metadata
  const raw = metadataLines.join('\n')
  const metadata = {
    ...defaultMetaData,
    ...parseMetadata(raw),
  }

  // Store and return it
  parsedMetadata[filename] = metadata

  return {
    raw,
    code,
    metadata,
    skip,
  }
}
