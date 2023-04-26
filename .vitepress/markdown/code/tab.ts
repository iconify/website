import { renderCodeEnv } from './env'
import type { CodeTabType } from './env'
import { cleanupCode, highlightCode } from './highlight'

interface RenderTabProps {
  type: CodeTabType
  src?: string
  title?: string
  lang: string
  code: string
  hint?: string
  replace?: (code: string) => string
}

const defaultProps: Required<RenderTabProps> = {
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
  renderCodeEnv.tabs.push({
    type,
    src,
    title,
    lang,
    raw,
    html: highlightCode(lang, replace(raw)),
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

  renderCodeEnv.tabs.push({
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
