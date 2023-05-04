import type { MDEnv } from './markdown/metadata/types'

export function excludeTransform(env: MDEnv | undefined) {
  const path = env?.relativePath
  return path && (path === 'getting-started/index.md' || path.startsWith('.vitepress/theme/components/'))
}
