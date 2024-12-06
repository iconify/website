import hljs from "highlight.js";
import hljs_svelte from "highlightjs-svelte";
import { fixHTMLBug } from "./fix-html";
import { hljsDefineVue } from "./highlight-vue";

// Import additional syntax highlight modules
hljs_svelte(hljs);
hljs.registerLanguage("vue", hljsDefineVue);

export function fixHighlightedCode(code: string): string {
  // Fix highlight.js bug: missing '>' at closing span
  code = code.replaceAll("</span", "</span>").replaceAll("</span>>", "</span>");

  // Fix VP bug
  code = fixHTMLBug(code);

  return code;
}
