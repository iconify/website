import type { MarkdownRenderer } from 'vitepress'
import type { MDEnv, MDMetaData } from './metadata/types'
import { parseMDMetadata } from './metadata/parse'

export const parsedMetadata = Object.create(null) as Record<string, Required<MDMetaData>>

/**
 * Get metadata from markdown
 */
export function metadataMDPlugin(md: MarkdownRenderer) {
  md.renderer.rules.metadata = (tokens, idx, options, env: MDEnv, md) => {
    const filename = env.relativePath
    const token = tokens[idx]
    const metadata = parsedMetadata[filename] || parseMDMetadata(token.content)

    // Store metadata in env if exists
    env.metadata = metadata

    // Overwrite title
    if (metadata.title)
      env.title = metadata.title

    return ''
  }
}
