import type { MarkdownRenderer } from 'vitepress'
import yaml from 'yaml'

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

interface MDMetaData {
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

export function metadataMDPlugin(md: MarkdownRenderer) {
  md.renderer.rules.metadata = (tokens, idx, options, env, md) => {
    if (!env)
      throw new Error('Metadata without env')

    const token = tokens[idx]
    const data = yaml.parse(token.content)
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
              || typeof entry.code !== 'string'
              || typeof entry.value !== 'string'
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

    // Store metadata in env if exists
    env.metadata = data

    // Overwrite title
    if (data.title)
      (env as MDEnv).title = data.title

    return ''
  }
}
