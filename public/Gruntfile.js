'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    grunt.initConfig({

        dir: {
            deploy: 'deploy',
            views: '../common/views',
            app: '.'
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
                            css: ['concat', 'cssmin']
                        },
                        post: {
                        }
                    }
                }
            }
        },

        uglify: {
            generated: {
                files: [
                    {
                        dest: '<%= dir.deploy %>/scripts/scripts.js',
                        src: ['.tmp/concat/deploy/scripts/scripts.js']
                    },
                    {
                        dest: '<%= dir.deploy %>/scripts/vendor.js',
                        src: ['.tmp/concat/deploy/scripts/vendor.js']
                    },
                    {
                        dest: '<%= dir.deploy %>/scripts/oldieshim.js',
                        src: ['.tmp/concat/deploy/scripts/oldieshim.js']
                    }
                ]
            }
        },

        cssmin: {
            options: {
                root: '<%= dir.app %>'
            },
            generated: {
                files: [
                    {
                        dest: 'deploy/styles/vendor.css',
                        src: [ '.tmp/concat/deploy/styles/vendor.css' ]
                    },
                    {
                        dest: 'deploy/styles/main.css',
                        src: [ '.tmp/concat/deploy/styles/main.css' ]
                    }
                ]
            }
        },

        usemin: {
            html: ['<%= dir.views %>/index_deploy.volt'],
            options: {
                assetsDirs: ['<%= dir.deploy %>']
            }
        },

        copy: {
            deploy: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= dir.app %>',
                        dest: '<%= dir.deploy %>',
                        src: [
                            'views/{,*/}*.html',
                            'img/{,*/}*.{webp}'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '.tmp/img',
                        dest: '<%= dir.deploy %>/img',
                        src: ['generated/*']
                    },
                    {
                        expand: false,
                        src: '<%= dir.views %>/index.volt',
                        dest: '<%= dir.views %>/index_deploy.volt'
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
        }




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
};