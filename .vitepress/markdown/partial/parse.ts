import { applyMetadataReplacements } from '../metadata/replace'
import type { MDMetaData } from '../metadata/types'
import { splitHTMLMetadata, splitMDMetadata } from '../metadata/split'
import { cleanupMDContent } from './cleanup'
import { mergeImportedMetadata } from './imports/metadata'
import type { MDMetaDataFromImports } from './imports/metadata'
import { splitMDContent } from './split/md'
import { mergeRawChunks } from './split/merge'
import type { SplitChunk, SplitIncludedChunk, SplitRawChunk } from './split/types'

interface ParsedContent {
  metadata?: MDMetaData
  content: string
}

interface ParsedChunk {
  // Chunk, converted to string
  chunk: SplitRawChunk

  // Metadata to pass to parent
  metadata?: MDMetaDataFromImports
}

/**
 * Convert partial item to string
 */
function parseIncludedChunk(chunk: SplitIncludedChunk): ParsedChunk {
  const { content, type, filename } = chunk.file

  switch (type) {
    case 'md': {
      const parsed = parseMDContent(content, filename)
      return {
        chunk: {
          type: 'md',
          content: parsed.content,
        },
        metadata: parsed.metadata,
      }
    }

    case 'html': {
      const parsed = parseHTMLContent(content, filename)
      return {
        chunk: {
          type: 'html',
          content: parsed.content,
        },
        metadata: parsed.metadata,
      }
    }
  }
}

/**
 * Parse chunk
 */
function parseChunk(chunk: SplitChunk, parentFile: string, parentMetadata?: MDMetaData): ParsedChunk {
  if (chunk.type !== 'include') {
    // Return as is
    return {
      chunk,
    }
  }

  // Parse included chunk
  const parsed = parseIncludedChunk(chunk)

  // Merge metadata with parent
  const metadata = mergeImportedMetadata(parentFile, chunk.file.filename, parentMetadata, parsed.metadata)

  return {
    chunk: parsed.chunk,
    metadata,
  }
}

interface ParseChildrenResult {
  chunks: SplitRawChunk[]
  metadata?: MDMetaData
}
function parseChildren(sources: SplitChunk[], parentFile: string, parentMetadata?: MDMetaData): ParseChildrenResult {
  let metadata = parentMetadata || {}
  const chunks: SplitRawChunk[] = []

  sources.forEach((chunk) => {
    const parsed = parseChunk(chunk, parentFile, metadata)
    if (parsed.metadata) {
      metadata = {
        ...metadata,
        ...parsed.metadata,
      }
    }
    chunks.push(parsed.chunk)
  })

  return {
    chunks,
    metadata,
  }
}

/**
 * Parse content, checking for included files, applying replacements
 */
export function parseMDContent(src: string, filename: string): ParsedContent {
  // console.log('----- source start ----')
  // console.log(src)
  // console.log('----- source end ----')

  // Split to metadata/content
  let { content, metadata } = splitMDMetadata(cleanupMDContent(src), filename)

  // Apply replacements
  content = applyMetadataReplacements(content, metadata)

  // Split to chunks
  const chunks = splitMDContent(content, filename)

  // Parse each chunk
  const parsed = parseChildren(chunks, filename, metadata)

  // Merge chunks
  const chunk = mergeRawChunks(parsed.chunks)
  // console.log('----- result start ----')
  // console.log(chunk)
  // console.log('----- result end ----')

  switch (chunk.type) {
    case 'md':
      return {
        content: chunk.content,
        metadata: parsed.metadata,
      }

    default:
      throw new Error(`Unexpected ${chunk.type} result, expected md`)
  }
}

export function parseHTMLContent(src: string, filename: string): ParsedContent {
  if (src.includes('data-partial'))
    throw new Error(`Unsupported "data-partial" in "${filename}"`)
  // if (src.includes('.md"'))
  //   throw new Error(`Links to .md file in "${filename}"`)

  // Split to metadata/content
  let { content, metadata } = splitHTMLMetadata(cleanupMDContent(src), filename)

  // Apply replacements
  content = applyMetadataReplacements(content, metadata)

  return {
    content,
    metadata,
  }
}
