module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/docs/$1',
    '@/(.*)$': '<rootDir>/src/$1'
  }
}
