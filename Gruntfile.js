module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'public/css/style.css': 'scss/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['scss/**/*.{scss,sass}'],
        tasks: ['compass'],
        options: {
          livereload: true
        },
      },
      php: {
        files: ['**/*.php'],
        options: {
          livereload: true
        }
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('watch_all', ['watch:css', 'watch:php']);
};