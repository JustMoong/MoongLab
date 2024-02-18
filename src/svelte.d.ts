// svelte.d.ts
declare module "*.svelte" {
    import { SvelteComponentTyped } from "svelte";
    class ComponentName extends SvelteComponentTyped<{propertyName: string;}> {}
    export default value;
  }