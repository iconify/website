import { readFile } from 'node:fs/promises'

// eslint-disable-next-line no-restricted-imports
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        iconify: {
          around: () => readFile('./public/around-logo.svg', 'utf8'),
        },
      },
    }),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
