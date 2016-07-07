'use strict';

let generators = require('yeoman-generator');
let yosay = require('yosay');
let path = require('path');
let _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: function() {
    this.log(yosay('Hello, and welcome to bz-ng2-webpack generator!'));
    this.argument('appname', { type: String, required: false });
    this.appname = _.kebabCase(this.appname || path.basename(process.cwd()));

    this.sourceRoot(path.join(__dirname, 'templates'));

    this.angularPackages = [];
    this.webpack = null;
    this.systemjs = null;
    this.bootstrap = null;
    this.foundation = null;
    this.jquery = null;
  },

  prompting: function () {
    let done = this.async();

    let prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Enter your project name'
      }
    ];

    this.prompt(prompts).then(function (answers) {
      this.props = answers;
      done();
    }.bind(this));
  },

  bootstrapConfig: function () {
    this.template('WebContent/src/app.boot.ts', 'WebContent/src/app.boot.ts');
    this.template('WebContent/src/custom-typings.d.ts', 'WebContent/src/custom-typings.d.ts');
    this.bulkCopy('WebContent/src/index.html', 'WebContent/src/index.html');
    this.template('WebContent/src/polyfills.browser.ts', 'WebContent/src/polyfills.browser.ts');
    this.template('WebContent/src/vendor.browser.ts', 'WebContent/src/vendor.browser.ts');
  },

  config: function () {
    this.template('.gitignore', '.gitignore');
    this.template('WebContent/package.json', 'WebContent/package.json');
    this.template('WebContent/README.md', 'WebContent/README.md');
    this.template('WebContent/tsconfig.json', 'WebContent/tsconfig.json');
    this.template('WebContent/tslint.json', 'WebContent/tslint.json');
    this.template('WebContent/typedoc.json', 'WebContent/typedoc.json');
    this.template('WebContent/typings.json', 'WebContent/typings.json');
    this.template('WebContent/webpack.config.js', 'WebContent/webpack.config.js');
  },

  app: function () {
    this.directory('WebContent/src/app', 'WebContent/src/app');
  },
  platform: function () {
    this.directory('WebContent/src/platform', 'WebContent/src/platform');
  },
  test: function () {
    this.directory('WebContent/test', 'WebContent/test');
  },
  webpackConfig: function () {
    this.directory('WebContent/config', 'WebContent/config');
  },

 /* install: function() {
    this.installDependencies({
      skipMessage: this.options['skip-install-message'],
      skipInstall: this.options['skip-install'],
      bower: false,
      npm: true
    });
  }*/

  end: function() {}
});
