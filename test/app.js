'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-angularts:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/templates'))
      .withOptions({ continue: true })
      .withPrompts({ someAnswer: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'gulpfile.config.json'
    ]);
  });
});
