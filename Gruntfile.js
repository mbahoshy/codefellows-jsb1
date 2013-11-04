module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     jshint: {
        files: ['Gruntfile.js', 'public/contactlist.js', 'app,js'],
        options: {
          // options here to override JSHint defaults
          globals: {
            jQuery: true,
            console: true,
            module: true,
            document: true
          }
        }
      },

    copy: {
     main: {
        files: [
          // includes files within path
          {expand: true, src: ['bower_components/**/*'], dest: 'public/'},
        ]
      }
    },

    clean: ["bower_components", "public/bower_components", "node_modules"],

    mocha_phantomjs: {
      all: [ 'test/**/*.html' ],
      options: {
        reporter: "xunit",
        output: "./mocha_result.xml"
      }
    },

    watch: {
      scripts: {
        files: ['Gruntfile.js', 'public/contactlist.js', 'app,js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
          livereload: true,
        },
        css: {
          files: ['public/**/*.css'],

        },
      },
    },

    options: {
      
    },



  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-bower-install-task");
  grunt.loadNpmTasks("grunt-mocha-phantomjs");
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'bower_install', 'copy']);
  //grunt.registerTask('test', ['mocha_phantomjs']);

};