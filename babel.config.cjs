module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}
