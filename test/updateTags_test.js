'use strict';

var grunt = require('grunt');
var analyzeEngine = require("../lib/AnalyzeEngine.js");

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
/*
exports.updateTags = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_options');
    var expected = grunt.file.read('test/expected/custom_options');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  }
};*/

exports.AnalyzeEngine = {
    setUp: function(done){
        done();
    },
    delimiter: function(test){
        test.equal(analyzeEngine.isDelimiter("===="), true, "should return true is all character is the same");
        test.equal(analyzeEngine.isDelimiter("=!-="), false);
        test.equal(analyzeEngine.isDelimiter("asdf: asdfasd"), false);
        test.equal(analyzeEngine.isDelimiter("**************"), true);
        test.done();
    },
    unitName: function(test){
        test.equal(true, true);
        test.done();
    }
};
