'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('JS module') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Name of the module?',
      default: 'JS Module'
    },{
      type: 'input',
      name: 'description',
      message: 'Description of the module?',
      default: 'Description'
    }];

    this.prompt(prompts, function (props) {

      this.appName = props.name;
      this.appDescription = props.description;

      done();
    }.bind(this));

  },

  writing: {
    app: function () {
      this.template(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.template(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('src'),
        this.destinationPath('src')
      );
      this.fs.copy(
        this.templatePath('test'),
        this.destinationPath('test')
      );
      this.template(
        this.templatePath('readme.md'),
        this.destinationPath('readme.md')
      );
      this.fs.copy(
        this.templatePath('.travis.yml'),
        this.destinationPath('.travis.yml')
      );
      this.fs.copy(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
