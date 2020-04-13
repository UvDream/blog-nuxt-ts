module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  "vue/html-self-closing": ["error", {
    "html": {
        "void": "never",
        "normal": "any",
        "component": "any"
    },
    "svg": "always",
    "math": "always"
}],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
  }
}
