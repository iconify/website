import { lstatSync } from 'node:fs'

/**
 * Check if link is valid
 */
export function validateAbsoluteLink(href: string, parent?: string) {
  if (!href.startsWith('/'))
    throw new Error('validateAbsoluteLink() should be called with absolute link')

  // Check for valid markdown link
  const ext = href.split('.').pop()
  if (ext !== 'md') {
    console.warn(`Bad link to "${href}" in ${parent ?? 'unknown'}`)
    return
  }

  // Make sure file exists
  try {
    const stat = lstatSync(href.slice(1))
    if (stat.isFile())
      return
  }
  catch {
    //
  }
  console.warn(`Bad link to "${href}" in ${parent ?? 'unknown'}`)
}
