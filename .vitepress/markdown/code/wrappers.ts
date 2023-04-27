/**
 * Lines to ignore when parsing code: added to keep compiler happy, but aren't used
 */
export const dummyCodeWrappers: Set<string> = new Set([
  '<JSXWrapper>',
  '</JSXWrapper>',
])
