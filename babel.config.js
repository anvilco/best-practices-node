const pkg = require('./package')

const config = {
  presets: [
    [
      // https://babeljs.io/docs/en/babel-preset-env#options
      '@babel/preset-env',
      {
        targets: {
          // Grab it from the package.json so that it's easy to keep track of
          // and to keep in sync with the engines specification
          node: pkg.config.babel_target,
        },
      },
    ],
  ],
}

module.exports = config
