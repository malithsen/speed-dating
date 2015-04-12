module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('src/package.json'),
    nodewebkit: {
      options: {
        build_dir: './dist',
        // specifiy what to build
        mac: true,
        win: true,
        linux: true
      },
      src: './src/**/*'
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['nodewebkit']);
};

