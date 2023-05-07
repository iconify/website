import { parse } from 'yaml'
import { dummyCodeWrappers } from '../../code/wrappers'
import { locateIncludedFile } from '../imports/locate'
import type { SplitIncludedChunk, SplitMDContentChunk } from './types'

// Lines to ignore: added to keep compiler happy, but aren't used
const ignoreLines: Set<string> = new Set([
  ...Array.from(dummyCodeWrappers),
])

const inlineIncludeHeader = '`include '
const yamlStartHeader = '```yaml'
const codeEndHeader = '```'

type MDChunk = SplitMDContentChunk | SplitIncludedChunk

/**
 * Find imports in MD content
 */
export function splitMDContent(content: string, filename: string): MDChunk[] {
  const chunks: MDChunk[] = []

  let contentLines: string[] | null = null
  let yamlLines: string[] | null = null

  const endContent = () => {
    if (contentLines) {
      chunks.push({
        type: 'md',
        content: contentLines.join('\n'),
      })
      contentLines = null
    }
  }

  content.split('\n').forEach((line) => {
    const trimmedLine = line.trim()

    // Check if line should be ignored
    if (ignoreLines.has(trimmedLine))
      return

    // Check for yaml code
    if (yamlLines) {
      if (trimmedLine === codeEndHeader) {
        // Parse yaml
        const code = yamlLines.join('\n')
        const data = parse(code)
        if (typeof data !== 'object' || typeof (data as Record<string, unknown>).include !== 'string') {
          // Return default
          const mergedCode = [
            yamlStartHeader,
            ...yamlLines,
            codeEndHeader,
          ].join('\n')
          chunks.push({
            type: 'md',
            content: mergedCode,
          })

          // Reset block
          yamlLines = null
          return
        }

        // Find file
        const include = data.include
        const file = locateIncludedFile(include)
        if (!file)
          throw new Error(`Cannot locate included file "${include}" in "${filename}"`)
        const chunk: SplitIncludedChunk = {
          type: 'include',
          file,
        }
        chunks.push(chunk)

        // Check yaml content for replacements
        const replacements = data.replacements
        if (replacements) {
          if (!(Array.isArray(replacements)))
            throw new Error(`Bad replacements in include block in "${filename}"`)

          const result = Object.create(null) as Record<string, string>
          replacements.forEach((item) => {
            if (typeof item !== 'object' || typeof item.search !== 'string' || typeof item.replace !== 'string')
              throw new Error(`Bad replacements in include block in "${filename}"`)

            result[item.search] = item.replace
          })
          chunk.replacements = result
        }

        // Reset block
        yamlLines = null
        return
      }

      // Sanity check: code block should not contain '```'
      if (line.startsWith(codeEndHeader)) {
        // eslint-disable-next-line no-console
        console.log('--- failed content ---\n', content)
        throw new Error(`Bad code block in "${filename}"`)
      }

      // Add to yaml
      yamlLines.push(line)
      return
    }

    // Start of yaml code?
    if (trimmedLine === yamlStartHeader) {
      endContent()
      yamlLines = []
      return
    }

    // Check for inline include
    if (trimmedLine.startsWith(inlineIncludeHeader)) {
      endContent()
      const include = trimmedLine.slice(inlineIncludeHeader.length).replace(/`$/, '')
      const file = locateIncludedFile(include)
      if (!file)
        throw new Error(`Cannot locate included file "${include}" in "${filename}"`)

      chunks.push({
        type: 'include',
        file,
      })
      return
    }

    // Content
    if (!contentLines)
      contentLines = []
    contentLines.push(line)
  })

  // End
  endContent()
  if (yamlLines)
    throw new Error(`Incomplete yaml code block in "${filename}"`)

  return chunks
}
