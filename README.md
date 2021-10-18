# best-practices-node

This repository creates a very simple web server for Node, while trying to exemplify many "best practices" for developing a Node/JS package.

Please see the accompanying blog post about this project [here][Blog Post] to learn more about what is going on!

### Installation
This package isn't *really* meant to be downloaded from `npm` and used in your projects (or globally). Rather, the repository should be [cloned from Github][Repo] and played around with from there:

```bash
cd /path/to/projects
git clone https://github.com/anvilco/best-practices-node.git
cd best-practices-node
yarn install
```

### Usage
There are a few interesting commands in this project to explore:

- `yarn clean:build`: Will delete the `dist/` directory and transpile the source code in `src/` to the `dist/` directory.

- `yarn start`: Will run the transpiled code in the `dist/` directory.

- `yarn develop`: Will transpile the source code, start the server and then watch for source file changes. When a source file change is detected, the code will be transpiled and restarted.

- `yarn test`: Transpile the source code and then run the test suite...which doesn't really do much right now.

- `yarn test:watch`: Similar to `yarn test`, but it will transpile and restart the tests after code changes.

- `yarn my-script`: Will run the script `scripts/my-script.js` using `babel-node` to transpile it on-the-fly.

- `yarn pack`: Will zip up the package to show you what would be included if you were to publish things to NPM.

[Repo]: https://github.com/anvilco/best-practices-node
[Blog Post]: https://www.useanvil.com/blog/engineering/node-package-best-practices/