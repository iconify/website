import { statSync } from 'node:fs'
import type { CodeTabType } from './tabs'

const rawCodePath = 'code-samples'
const cssCodePath = '.vitepress/theme/samples'

/**
 * Check if file exists
 */
function fileExists(filename: string): boolean {
  try {
    const stat = statSync(filename)
    return stat.isFile()
  }
  catch {
    //
  }
  return false
}

/**
 * Locate source sample
 */
export function locateCodeSample(file: string, type: CodeTabType): string | null {
  let filename: string

  // Check for demo: force .html extension
  if (type === 'demo') {
    // Remove extension
    const parts = file.split('.')
    parts.pop() // remove ext

    // Test .demo.html
    filename
            = `${rawCodePath}/${parts.slice(0).concat(['demo', 'html']).join('.')}`
    if (fileExists(filename))
      return filename

    // Test .html
    filename = `${rawCodePath}/${parts.slice(0).concat(['html']).join('.')}`
    if (fileExists(filename))
      return filename

    return null
  }

  // Check for raw code
  filename = `${rawCodePath}/${file}`
  if (fileExists(filename))
    return filename

  // Check for stylesheet
  if (type === 'src' || type === 'css') {
    filename = `${cssCodePath}/${file}`
    if (fileExists(filename))
      return filename

    // Add '_' to filename
    const parts = file.split('/')
    const lastPart = parts.pop()!
    parts.push(`_${lastPart}`)
    filename = `${cssCodePath}/${parts.join('/')}`
    if (fileExists(filename))
      return filename
  }

  return null
}

/**
 * Simple validation for source sample
 */
export function validateCodeSource(src: string): boolean {
  const parts = src.split('/')
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    if (part.slice(0, 1) === '.')
      return false
  }
  return true
}
