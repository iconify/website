/**
 * Check if link is valid
 */
export function validateLink(href: string, parent: string) {
  // Remove hash and params
  const target = href.split(/[#?]/).shift()

  const ext = target.split('.').pop()
  if (ext !== 'md')
    console.warn(`Bad link to "${href}" in ${parent}`)
}
