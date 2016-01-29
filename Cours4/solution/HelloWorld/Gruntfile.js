module.exports = function (grunt) {
    grunt.initConfig({
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            jsFiles: {
                options: {
                    destPrefix: 'frontend/js'
                },
                files: {
                    'angular.min.js': 'angular/angular.min.js'
                }
            },
            cssFiles: {
                options: {
                    destPrefix: 'frontend/css'
                },
                files: {
                    'bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.registerTask('default', ['bowercopy']);
}