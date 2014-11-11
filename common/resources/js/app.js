'use strict';

angular.module(ngAppName, [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
])
    .config(function ($routeProvider) {
        $routeProvider
            .otherwise({
                templateUrl: '/views/common/empty.html',
                controller: function($rootScope) {
                    $rootScope.def = {
                        show: true
                    };
                }
            });
    });
