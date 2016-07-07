'use strict';

let generators = require('yeoman-generator');
let yosay = require('yosay');
let path = require('path');
let _ = require('lodash');

let  Utilities = {

  upperCamelCase: function (text) {
    // uppercase the first character
    return text.charAt(0).toUpperCase() + text.slice(1);
  },

  splitCamelCase: function (text) {
    // insert a space before all caps
    // uppercase the first character
    var txt = text.replace(/([A-Z])/g, '-$1').toLowerCase();
    return txt;
  }
};

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: function () {
    this.log(yosay('Hello, and welcome to bz-ng2-webpack generator!'));
    this.argument('appname', {type: String, required: false});
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
        name: 'componentName',
        message: 'Enter your component name'
      }
    ];

    this.prompt(prompts).then(function (answers) {
      this.props = answers;
      this.props.upperCamelCaseName = Utilities.upperCamelCase(this.props.componentName);
      this.props.splitName = Utilities.splitCamelCase(this.props.componentName);
      done();
    }.bind(this));
  },

  component: function () {

    this.template('component/index.ts', this.props.componentName + '/index.ts');
    this.template('component/template.component.ts', this.props.componentName + '/' + this.props.componentName + '.component.ts');
    this.template('component/template.e2e.ts', this.props.componentName + '/' + this.props.componentName + '.e2e.ts');
    this.template('component/template.html', this.props.componentName + '/' + this.props.componentName + '.html');
    this.template('component/template.less', this.props.componentName + '/' + this.props.componentName + '.less');
    this.template('component/template.spec.ts', this.props.componentName + '/' + this.props.componentName + '.spec.ts');

    this.log(this.props.upperCamelCaseName);
    this.log(this.props.splitCamelCaseName);
  },

  end: function () {
    this.log(yosay("We're almost ready! \n " +
      "To start the project follow these 3 steps.\n\n" +
      "Run the commands on the WebContent folder :\n"));
  }
});
