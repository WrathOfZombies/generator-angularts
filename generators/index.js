'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.bgWhite.gray('Angular with TypeScript, SASS and all the good stuff') + ' generator!\n' + chalk.bold('Please make sure that you run this command inside a project folder.'
        )));

    var prompts = [{
      type: 'confirm',
      name: 'continue',
      message: 'Shall i begin the installation?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      if (this.props.continue) {
        done();
      }
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.sourceRoot(),
      this.destinationRoot()
      );
  },

  install: function () {
    // this.installDependencies();
  }
});
