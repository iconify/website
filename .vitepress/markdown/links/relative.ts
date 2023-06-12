import { dirname, join } from 'node:path'

export function getAbsoluteLink(href: string, file: string): string {
  const target = join(dirname(file), href).replace(/\\/g, '/')
  return `/${target}`
}
