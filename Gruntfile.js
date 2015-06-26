/*
 * grunt-updateTags
 * https://github.com/yanwsh/grunt-updateTags
 *
 * Copyright (c) 2015 Wensheng Yan
 * Licensed under the Apache license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    updateTags: {

        fwbb:{
            files:{'test/fwbb/test-campaign-06-2015-fwbb.txt': 'fwbb/test-campaign-06-2015-fwbb.txt'},
            templates: {
                impressionTracker: {
                    begin: '<!-- Impression Tracker -->',
                    end: '<script type="text/javascript">'
                },
                clickTracker:{
                    begin: 'var fwbb_click_tracker          =',
                    end: '/* CLICK TRACKER with click macro */'
                },
                additionalTracker:{
                    after: '<script type="text/javascript" src="http://media.complex.com/common/units/fwbb/cmn-fwbb-collapsible.js"></script>'
                }
            }
        }
        /*
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      },
      custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }*/
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-debug-task');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  //grunt.registerTask('test', ['clean', 'updateTags', 'nodeunit']);
    grunt.registerTask('test', ['clean', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
