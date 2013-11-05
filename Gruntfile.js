module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "css/main.css": "css/LESS/main.less"
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: '../',
          livereload: true
        }
      }
    },

    jekyll: {
      build: {}
    },

    watch: {
      less: {
        files: ["css/**/*.less"],
        tasks: ['less'],
      },

      jekyll: {
        files: ['css/**/*.css', '**/*.html'],
        tasks: ['jekyll'],
        options: { livereload: true }
      }

    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['less', 'jekyll', 'connect', 'watch']);

};