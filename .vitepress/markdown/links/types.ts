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
    const link = types[type]
    if (!link)
      return

    $node.wrap(
      `<a href="${link}" title="${type} documentation" />`,
    )
  })
}
