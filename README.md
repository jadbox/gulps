# Gulps

# Universal (isomorphic) boilerplate written in ES2015 for Node and the browser.

[![Travis Status][trav_img]][trav_site]
[![devDependency Status](https://david-dm.org/kflash/gulps/dev-status.svg)](https://david-dm.org/kflash/gulpi#info=devDependencies)
[![Dependency Status](https://david-dm.org/kflash/gulps.svg)](https://david-dm.org/kflash/gulps)

> A starter kit to get you up and running with a bunch of awesome new front-end technologies using Gulp, Babel, Webpack, Mocha, Sinon-chai, Isparta, and ESLint without any framework dependencies.

## Requirements

Node `^5.0.0`.

## Features


* [ES6 with Babel](http://babeljs.io/) for ES6 and ES7
* [Webpack](https://webpack.github.io/) for bundling
* [Eslint](http://eslint.org/) to maintain a consistent code style
* [Universal Module Definition (UMD) API](https://github.com/umdjs/umd), which provides compatibility with the most popular script loaders, to the output.
* Unit tests written with ES2015 get transpiled on the fly
* Livereload
* Browser tests in the browser
* Node >= 5.x

## Babel >= 6.x design changes

If you migrate from `Babel >= 5.x` to `Babel >= 6.x`, your code will probably break because 
Babel now have killed the `CommonJS` default export behaviour. 

As a workaround, replace `export default { … }` with  `module.exports = { … }`

## Getting Started

Just clone the repo and install the necessary node modules:

```js
$ git clone https://github.com/kflash/gulpi.git gulps
$ cd gulpi
$ npm install                   # Install Node modules listed in ./package.json
$ npm webpack                   # Build a non-minified version of the library
```

## Workflow

* `gulp dev` - Build task that generate compiled script
* `gulp prod` - Build task that generate a minified script for production
* `gulp clean` - Remove the `dist` folder and it's files
* `gulp lint:source` - Lint the source
* `gulp lint:test` - Lint the unit tests
* `gulp test` - Runs unit tests
* `gulp watch` - Run all unit tests & watch files for changes
* `gulp coverage` - Generates a coverage report
* `gulp browser` - Let you run unit tests in your browser.
* `gulp help` - Lists all available gulp tasks from your gulpfile.
* `npm run packages` - List installed packages
* `npm run package:purge` - Remove all dependencies
* `npm run package:reinstall` - Reinstall all dependencies
* `npm run package:check` - shows a list over dependencies with a higher version number then the current one - if any 
* `npm run package:upgrade` - Automaticly upgrade all devDependencies & dependencies, and update package.json
* `npm run package:dev` - Automaticly upgrade all devDependencies and update package.json
* `npm run package:prod` - Automaticly upgrade all dependencies and update package.json

## Unit tests

This project uses Mocha to run your unit tests.

To add a unit test, simply create `.js` file inside the `~/test` folder, and Mocha and Chai will be available within your unit tests without the need to import them.

To run the tests in the project, just simply `gulp test`.

To keep watching the common test suites that you are working on, simply do `gulp watch`.

To see your unit tests in the browser, do `gulp browser`, and open the `~/test/spec_runner.html` in your browser.

## Coveralls

This library is set up to integrate with Isparta, and will automaticly publish your coverage report if you have created an account for your repo at **coveralls.io**. You can also run `gulp coverage` to generate the coverage report in your CLI.

## Linting

This boilerplate project uses ESLint and the [Airbnb styleguide](https://github.com/airbnb/javascript#ecmascript-6-styles) to lint your source. To change the rules, edit the .eslintrc file in the root directory, respectively.

## Package management

Gulps has build-in some nice features to always make sure your dependency tree are up to date. 

To check for the latest dependencies, simply run `npm run package:check`. 

If you want to update your packages, you can simply do `npm run package:upgrade`.

*Note!* Your `package.json` will be automatically updated so make sure you have saved your changes before running this.

To reinstall all packages, do `npm run package:reinstall`, and to remove all packages  `npm run package:purge`.

## Pre-commit

This boilerplate uses a [pre-commit hook](https://www.npmjs.com/package/pre-commit) to ensure that your npm test (or other specified scripts) passes before you can commit your changes. This all conveniently configured in your package.json.

## Installation

Download the package, and run this from the command line:

```
npm install 
```

## FAQ

#### Is this boilerplate production ready?
Yes, for small applications. For a larger project, you'll need to customize the boilerplate after your own needs, but that is out of scope of this boilerplate.

#### What's the browser compatibility?

This transpiler works best in IE9+, but you can support IE8 by limiting yourself to a subset of ES2015 features.

## License
MIT © [KFlash](https://github.com/kflash)

[trav_img]: https://api.travis-ci.org/Kflash/gulps.svg
[trav_site]: https://travis-ci.org/Kflash/gulps.svg?branch=master
