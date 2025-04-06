import isIgnored from '@commitlint/is-ignored'

// commitlint.config.js
const Configuration = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  ignores: [(commit) => isIgnored(commit) || commit.startsWith('Merge')],
  plugins: [
    {
      rules: {},
    },
  ],
}

export default Configuration
