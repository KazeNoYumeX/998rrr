module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
  },
  plugins: ['vue'],
  rules: {
    semi: 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 0,
    'no-unused-vars': 'off',
    camelcase: 'off',
  },
}
