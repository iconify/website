import { contentReplacements } from '../config'

// Replacements based on config
export const defaultReplacements = Object.create(null) as Record<string, string>

function add(suffixes: string[], value: string) {
  const key = `\${${suffixes.join('.')}}`
  defaultReplacements[key] = value
}

function addReplacements(values: Record<string, unknown>, suffixes: string[]) {
  for (const key in values) {
    const item = values[key]
    if (typeof item === 'string') {
      add([
        ...suffixes,
        key,
      ], item)
      continue
    }

    if (typeof item === 'object' && item) {
      addReplacements(item as Record<string, unknown>, [
        ...suffixes,
        key,
      ])
      continue
    }

    throw new Error(`Invalid config value: ${[...suffixes, key].join('.')}`)
  }
}
addReplacements(contentReplacements, [])
