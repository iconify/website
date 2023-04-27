import type { MDMetaData } from './metadata'
import { getMDMetadata } from './metadata'

export function parseMDInclude(src: string, filename: string, env: unknown): string {
  // console.log('Parsing:', filename)
  // console.log(src)

  // Check for metadata
  const metadataResult = getMDMetadata(src, filename)
  let metadataHeader = ''
  let metadata: MDMetaData | undefined
  if (metadataResult) {
    metadata = metadataResult.metadata;
    (env as Record<string, unknown>).metadata = metadata

    // Add metadata back for future parsing (due to markdown parser limitation it needs to be parsed again in plugin)
    metadataHeader = `\`\`\`yaml\n${metadataResult.raw}\n\`\`\`\n`

    // Replace content
    src = metadataResult.code
  }

  // Parse all lines
  const parsedLines: string[] = []
  src.split('\n').forEach((line) => {
    const trimmedLine = line.trim()
    // if (trimmedLine.startsWith('`include '))
  })

  // TODO: replacements
  if (metadata?.replacements) {
    //
  }

  return metadataHeader + src
}
