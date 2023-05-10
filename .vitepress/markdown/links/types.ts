import type { MDMetaData } from '../metadata/types'

export function applyLinksForTypes(
  $html: cheerio.Root,
  metadata: MDMetaData,
  types: Record<string, string>,
) {
  $html('.hljs-inline-type > span').each((index, node) => {
    const $node = $html(node)

    // Make sure type is not inside link
    if ($node.parents('a').length)
      return

    const type = $node.text()
    if (typeof types[type] !== 'string')
      return

    $node.wrap(
      `<a href="${types[type]}" title="${type} documentation" />`,
    )
  })
}
