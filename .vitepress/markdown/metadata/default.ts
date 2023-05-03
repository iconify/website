import type { MDMetaData } from './types'

export const defaultMDMetaData: Required<MDMetaData> = {
  title: '',
  hint: '',
  wip: false,
  standalone: false,
  redirect: '',
  navigation: '',
  theme: 'develop',
  types: {},
  functions: {},
  classes: {},
  replacements: [],
}
