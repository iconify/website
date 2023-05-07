/**
 * Replace all instances of search/replace pairs in text
 */
export function replaceAllStrings(
  text: string,
  replacements: Record<string, string>,
): string {
  // Sort replacements to make sure 'foo2' is replaced before 'foo'
  Object.keys(replacements)
    .sort((a, b) => b.length - a.length)
    .forEach((search) => {
      const replace = replacements[search]
      if (search === replace)
        return

      let start = 0
      let pos: number
      // eslint-disable-next-line no-cond-assign
      while ((pos = text.indexOf(search, start)) !== -1) {
        text = text.slice(0, pos) + replace + text.slice(pos + search.length)
        start = pos + replace.length
      }
    })

  return text
}
