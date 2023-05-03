/**
 * Cleanup content before parsing it
 */
export function cleanupMDContent(content: string): string {
  // Replace '\r\n' with '\n\
  return content.replace(/\r\n/g, '\n')
}
