export interface MDEnv {
  path: string
  relativePath: string
  cleanUrls: boolean
  content?: string
  excerpt?: string
  title?: string
  links?: string[]
  metadata?: MDMetaData
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
  replacements?: TextReplacement[] // Replacements
}
