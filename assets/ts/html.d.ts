declare module '*.html' {
  const value: string;
  export default value
}

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;