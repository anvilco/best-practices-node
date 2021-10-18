'use strict'

module.exports = {
  // This is so that advanced syntax that Babel will handle will not confuse ESLint
  parser: "@babel/eslint-parser",
  extends: [
    // There are many different presets/bundles to extend from that can be added here.
    // We'll just extend the recommended stuff for now, but season to taste.
    'eslint:recommended',
  ],
  env: {
    node: true,
  },
  // Any rule overrides/additions here
  rules: {},
  // Any plugins here
  plugins: [],
}
