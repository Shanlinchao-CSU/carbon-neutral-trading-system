/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "@/assets/i18n/index.js"
declare module "@/assets/js/storage/storage"

declare global {
  const $target
}