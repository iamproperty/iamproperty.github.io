module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/docs/$1',
    '@/(.*)$': '<rootDir>/src/$1'
  }
}
