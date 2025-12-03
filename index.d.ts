declare module 'gtag.js';
declare module '*.svg' {
  const content: string;

  export { ReactComponent };
  export default content;
}

declare module '*.ttf';
declare module '*.eot';
declare module '*.woff';
declare module '*.woff2';
