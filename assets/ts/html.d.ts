declare module '*.html' {
  const value: string;
  export default value;
}

type DataLayerEvent = Record<string, unknown>;

type WindowWithDataLayer = Window & {
  dataLayer: DataLayerEvent[];
};
