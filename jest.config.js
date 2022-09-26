module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue',
    'scss'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  preset: `jest-puppeteer`,
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec|visual))\\.(js|ts)$',
  transformIgnorePatterns: ['/node_modules/'],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/docs/$1',
    '@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ["expect-puppeteer",`<rootDir>/tests/setup/after-env.js`],
  snapshotSerializers: [
    `jest-serializer-vue`,
  ]
}
