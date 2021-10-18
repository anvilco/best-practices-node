// If you execute this script using the babel-node command, then it and all the things it
// uses will transpiled on-the-fly. Nice!
//
// This is helpful for running stuff locally while developing, but it is not recommended for
// production runtimes as it increases memory and CPU usage, and can be slower:
//
// https://babeljs.io/docs/en/babel-node#not-meant-for-production-use

import config from '../src/config'
console.log('Config:', config)
