module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'build/dev'
                }
            }
        },
        watch: {
            scripts: {
                files: ['assets/*.txt', '!assets/levels.txt', 'src/**/**']
            }
        },
        uglify: {
            development: {
                options: {
                    mangle: false
                },
                files: {
                    'tmp/compiled.js': ['node_modules/angular/angular.min.js',
                        'js/data/movieData.js',
                        'js/app.js',
                        'js/movieData.js',
                        'js/movieFactory.js',
                        'js/movieCreator.js',
                        'js/movieService.js',
                        'js/helper.js',
                        'js/movie_helper.js',
                        'js/title_controller.js',
                        'js/processnames.js']
                }
            }
        },
        copy: {
            development: {
                files: [
                    {expand: true, flatten: true, src: ['css/*.css'], dest: 'build/dev/css'},
                    {expand: true, flatten: true, src: ['tmp/compiled.js'], dest: 'build/dev/js', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['htmlFile/index.html'], dest: 'build/dev', filter: 'isFile'}
                ]
            }
        },
        clean: {
            dev: ["build/dev/*"],
            tmp: ["tmp/**"]

        },
        htmlbuild: {
            development: {
                src: 'htmlFile/htmlNew.html',
                dest: 'build/dev/',
                options: {
                    beautify: true,
                    relative: true,
                    scripts: {
                        'dev': 'build/dev/compiled.js'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask('dev', [
        'clean:dev',
        'uglify:development',
        'copy:development',
        'htmlbuild:development',
        'clean:tmp',
        'connect',
        'watch'
    ]);

};