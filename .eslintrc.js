module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    'vue/require-component-is': 'off',
    'vue/no-unused-components': 'off',
    'vue/valid-template-root': 'off'
  }
}
