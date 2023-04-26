import hljs from 'highlight.js'
import hljs_svelte from 'highlightjs-svelte'
import { hljsDefineVue } from './highlight-vue'

// Import additional syntax highlight modules
hljs_svelte(hljs)
hljs.registerLanguage('vue', hljsDefineVue)
