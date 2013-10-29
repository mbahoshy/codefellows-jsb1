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
    }




  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('copyBower', ['copy']);

};