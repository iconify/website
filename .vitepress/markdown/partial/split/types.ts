import type { LocatedIncludedFile } from '../imports/locate'

export interface SplitMDContentChunk {
  type: 'md'
  content: string
}

export interface SplitHTMLContentChunk {
  type: 'html'
  content: string
}

export interface SplitIncludedChunk {
  type: 'include'
  file: LocatedIncludedFile
  replacements?: Record<string, string>
}

export type SplitRawChunk = SplitMDContentChunk | SplitHTMLContentChunk
export type SplitChunk = SplitMDContentChunk | SplitHTMLContentChunk | SplitIncludedChunk
