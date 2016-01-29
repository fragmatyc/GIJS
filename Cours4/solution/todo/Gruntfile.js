module.exports = function (grunt) {
    grunt.initConfig({
        bowercopy: {
            options: {
                srcPrefix: "bower_components",
                clean: false
            },
            jsFiles: {
                options: {
                    destPrefix: 'frontend/build/js/lib'
                },
                files: {
                    'angular.min.js': 'angular/angular.min.js',
                    'bootstrap.min.js': 'bootstrap/dist/js/bootstrap.min.js',
                    'jquery.min.js': 'jquery/dist/jquery.min.js'
                }
            },
            cssFiles: {
                options: {
                    destPrefix: 'frontend/build/css'
                },
                files: {
                    'bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css'
                }
            },
            fontFiles: {
                options: {
                    destPrefix: 'frontend/build/fonts'
                },
                src: 'bootstrap/dist/fonts/**'
            }
        },
        uglify: {
            main: {
                files: {
                    'frontend/build/js/todo.js': [
                        'frontend/src/todo/module.js',
                        'frontend/src/todo/directive.js',
                        'frontend/src/todo/service.js',
                        'frontend/src/todo/controller.js'
                    ]
                }
            }
        },
        copy: {
            main: {
                files: {
                    'frontend/build/tmpl/todo.html': 'frontend/src/todo/view.html'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bowercopy');
    
    grunt.registerTask('default', ['bowercopy', 'uglify', 'copy']);
}