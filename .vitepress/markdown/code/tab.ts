import { getCodeTabs } from './tabs'
import type { CodeTabType } from './tabs'
import { cleanupCode, highlightCode } from './highlight'

interface RenderTabProps {
  filename: string
  type: CodeTabType
  src?: string
  title?: string
  lang: string
  code: string
  hint?: string
  replace?: (code: string) => string
}

const defaultProps: Required<RenderTabProps> = {
  filename: '',
  type: 'src',
  src: '',
  title: '',
  lang: '',
  code: '',
  hint: '',
  replace: (code: string) => code,
}

export function addCodeTab(
  params: RenderTabProps,
) {
  const {
    filename,
    type,
    src,
    title,
    lang,
    code,
    hint,
    replace,
  } = {
    ...defaultProps,
    ...params,
  }

  // Change content
  const raw = cleanupCode(lang, code)

  // Add tab
  getCodeTabs().push({
    type,
    src,
    title,
    lang,
    raw,
    html: highlightCode(lang, replace(raw), filename),
    hint,
    replace,
  })
}

interface RenderDemoProps {
  src: string
  css: string
  title: string
  html: string
  hint?: string
  replace?: (code: string) => string
}

const defaultDemoProps: Required<RenderDemoProps> = {
  src: '',
  css: '',
  title: '',
  html: '',
  hint: '',
  replace: (code: string) => code,
}

export function addCodeDemoTab(props: RenderDemoProps) {
  let {
    src,
    css,
    title,
    html,
    hint,
    replace,
  } = {
    ...defaultDemoProps,
    ...props,
  }

  if (css !== '') {
    // Remove extensions
    const parts = css.split('.')
    css = parts.shift() as string
  }

  getCodeTabs().push({
    type: 'demo',
    src,
    title,
    lang: 'html',
    raw: '',
    html:
        `<div class="code-demo${
        css === '' ? '' : ` ${css}`
        }"`
        + `>${
        replace(html)
        }</div>`,
    hint,
    replace,
  })
}
