# best-practices-node

This boilerplate repository creates a very simple web server for Node, while trying to exemplify many "best practices" for developing a Node/JS package.

Please see the accompanying [blog post about this project][Blog Post] to learn more about what is going on!

---

**Repository provided by [Anvil](www.useanvil.com/developers)**

![Horizontal Lockupblack](https://user-images.githubusercontent.com/293079/169453889-ae211c6c-7634-4ccd-8ca9-8970c2621b6f.png#gh-light-mode-only)
![Horizontal Lockup copywhite](https://user-images.githubusercontent.com/293079/169453892-895f637b-4633-4a14-b997-960c9e17579b.png#gh-dark-mode-only)

Anvil provides easy APIs for all things paperwork.

1. [PDF filling API](https://www.useanvil.com/products/pdf-filling-api/) - fill out a PDF template with a web request and structured JSON data.
2. [PDF generation API](https://www.useanvil.com/products/pdf-generation-api/) - send markdown or HTML and Anvil will render it to a PDF.
3. [Etch e-sign with API](https://www.useanvil.com/products/etch/) - customizable, embeddable, e-signature platform with an API to control the signing process end-to-end.
4. [Anvil Workflows (w/ API)](https://www.useanvil.com/products/workflows/) - Webforms + PDF + e-sign with a powerful no-code builder. Easily collect structured data, generate PDFs, and request signatures.

Learn more on our [Anvil developer page](https://www.useanvil.com/developers/).

---

### Installation

This package isn't *really* meant to be downloaded from `npm` and used as a boilerplate in your projects (or globally). Rather, the repository should be [cloned from Github][Repo] and played around with from there:

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
