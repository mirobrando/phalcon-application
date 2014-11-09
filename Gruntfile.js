'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    grunt.initConfig({

        dir: {
            deploy: 'public/deploy',
            views: 'common/views',
            app: 'public'
        },

        gruntfile: {
            files: ['Gruntfile.js']
        },

        clean: {
            deploy: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= dir.deploy %>/*',
                        '!<%= dir.deploy %>/.git*'
                    ]
                }]
            }
        },

        useminPrepare: {
            html: '<%= dir.views %>/index.volt',
            options: {
                dest: '<%= dir.deploy %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        usemin: {
            html: ['<%= dir.views %>/{,*/}*.volt'],
            options: {
                assetsDirs: ['<%= dir.deploy %>']
            }
        },

        copy: {
            deploy: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= dir.app %>',
                    dest: '<%= dir.deploy %>',
                    src: [
                        'views/{,*/}*.html',
                        'img/{,*/}*.{webp}',
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/img',
                    dest: '<%= dir.deploy %>/img',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: '<%= dir.views %>',
                    dest: '<%= dir.deploy %>',
                    src: ['*.volt']
                }
                ]
            }

        },

        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            deploy: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        ngmin: {
            deploy: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        cssmin: {
            options: {
                root: '<%= dir.app %>'
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= dir.deploy %>',
                    src: ['*.volt', '*.html', 'views/{,*/}*.html'],
                    dest: '<%= dir.deploy %>'
                }]
            }
        },




    });

    grunt.registerTask('build', [
        'clean:deploy',
        'useminPrepare',
        'autoprefixer',
        'concat',
        'ngmin',
        'copy:deploy',
        'cssmin',
        'uglify',
        'usemin',
        'htmlmin'
    ]);
}