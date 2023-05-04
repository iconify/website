export function fixHTMLBug(content: string): string {
  content = content.replace(/{/g, '&#123;') // cannot handle '{' in code
  content = content.replace(/}/g, '&#125;') // cannot handle '}' in code
  return content
}
