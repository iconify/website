import { parse } from 'yaml'
import { defaultMDMetaData } from './default'
import type { MDMetaData } from './types'

export function parseMDMetadata(content: string): MDMetaData {
  const data = parse(content)
  if (typeof data !== 'object')
    throw new TypeError('Bad metadata')

  // Check for null
  if (!data)
    return {}

  // Check all keys
  const codeRecord = data as Record<string, unknown>
  for (const key in defaultMDMetaData) {
    const attr = key as keyof MDMetaData
    const value = codeRecord[attr]
    if (value === undefined)
      continue

    if (typeof value !== typeof defaultMDMetaData[attr])
      throw new TypeError(`Invalid type for ${attr} in metadata`)

    if (attr === 'replacements') {
      if (!(Array.isArray(value)))
        throw new TypeError('Invalid code/value pairs')

      value.forEach((item) => {
        const entry = item as unknown
        if (
          typeof entry !== 'object'
                    || typeof (entry as Record<string, unknown>).code !== 'string'
                    || typeof (entry as Record<string, unknown>).value !== 'string'
        )
          throw new TypeError('Invalid code/value pair')
      })
    }

    if (value === defaultMDMetaData[attr]) {
      // Default value
      delete codeRecord[key]
    }

    //
  }

  // Check for invalid keys
  for (const key in codeRecord) {
    if ((defaultMDMetaData as unknown as Record<string, unknown>)[key] === undefined)
      throw new Error(`Invalid metadata key "${key}"`)
  }

  // Return it
  return data
}
