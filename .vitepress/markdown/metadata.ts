import type { MarkdownRenderer } from 'vitepress'
import type { MDEnv, MDMetaData } from './metadata/types'
import { parseMDMetadata } from './metadata/parse'

export const parsedMetadata = Object.create(null) as Record<string, Required<MDMetaData>>

/**
 * Get metadata from markdown
 */
export function metadataMDPlugin(md: MarkdownRenderer) {
  md.renderer.rules.metadata = (tokens, idx, options, env, md) => {
    if (!env)
      throw new Error('Metadata without env')

    const filename = env?.relativePath
    const token = tokens[idx]
    const metadata = parsedMetadata[filename] || parseMDMetadata(token.content)

    // Store metadata in env if exists
    env.metadata = metadata

    // Overwrite title
    if (metadata.title)
      (env as MDEnv).title = metadata.title

    return ''
  }
}
