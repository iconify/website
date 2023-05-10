import type { MDMetaData } from '../metadata/types'

interface Config {
  selector: string
  title: string // '{item}' is replaced with item
}

export function applyLinksInHTML(
  $html: cheerio.Root,
  metadata: MDMetaData,
  items: Record<string, string>,
  config: Config,
): void {
  $html(config.selector).each((index, node) => {
    const $node = $html(node)

    // Make sure item is not inside a link
    if ($node.parents('a').length)
      return

    const text = $node.text()
    const item = text.split('(').shift() as string
    if (typeof items[item] !== 'string')
      return
    const href = items[item]

    $node.wrap(
        `<a href="${
          href
           }" title="${
           config.title.replace('{item}', item)
           }" />`,
    )
    $node.addClass('hljs-linkable')
  })
}
