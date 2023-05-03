import type { SplitRawChunk } from './types'

// eslint-disable-next-line unused-imports/no-unused-vars
function assertNever(v: never) {
  //
}

export function mergeRawChunks(chunks: SplitRawChunk[]): SplitRawChunk {
  if (chunks.length === 1)
    return chunks[0]

  const hasMD = chunks.find(chunk => chunk.type !== 'html')
  if (hasMD) {
    // Merge as markdown
    const content = chunks.map((chunk) => {
      switch (chunk.type) {
        case 'md':
          return chunk.content

        case 'html':
          return chunk.content
      }

      assertNever(chunk)
      return ''
    }).join('\n')
    return {
      type: 'md',
      content,
    }
  }

  // Merge as HTML
  const content = chunks.map((chunk) => {
    switch (chunk.type) {
      case 'md':
        throw new Error('Something went wrong. MD chunk is not supposed to be here.')

      case 'html':
        return chunk.content
    }

    assertNever(chunk)
    return ''
  }).join('\n')
  return {
    type: 'html',
    content,
  }
}
