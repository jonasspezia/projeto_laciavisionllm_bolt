/// <reference types="vite/client" />

// Fix for module path aliases
declare module '@/*' {
  const content: any;
  export default content;
}
