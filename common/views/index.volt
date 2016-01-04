<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <title>{{ trans('title') }}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <!-- build:css(.) deploy/styles/vendor.css -->
        <!-- bower:css -->
        <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.css">
        <!--<link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap-theme.css">-->
        <!-- endbower -->
        <!-- endbuild -->
        <!-- build:css(.tmp) deploy/styles/main.css -->
        <!-- endbuild -->
    </head>


    <body ng-app="{{ ngAppName }}">
        <div ng-show="def.show">
            {{ content() }}
        </div>
        <div ng-view="" ng-show="!def.show"></div>

        <script>
            var language='{{ lang() }}';
            var ngAppName='{{ ngAppName }}';
        </script>

        <!-- build:js(.) deploy/scripts/oldieshim.js -->
        <!--[if lt IE 9]>
        <script src="/bower_components/es5-shim/es5-shim.js"></script>
        <script src="/bower_components/json3/lib/json3.min.js"></script>
        <![endif]-->
        <!-- endbuild -->

        <!-- build:js(.) deploy/scripts/vendor.js -->
        <!-- bower:js -->
        <script src="/bower_components/jquery/dist/jquery.js"></script>
        <script src="/bower_components/angular/angular.js"></script>
        <script src="/bower_components/json3/lib/json3.js"></script>
        <script src="/bower_components/bootstrap/dist/js/bootstrap.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js"></script>
        <script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js"></script>
        <script src="/bower_components/angular-resource/angular-resource.js"></script>
        <script src="/bower_components/angular-cookies/angular-cookies.js"></script>
        <script src="/bower_components/angular-sanitize/angular-sanitize.js"></script>
        <script src="/bower_components/angular-animate/angular-animate.js"></script>
        <script src="/bower_components/angular-touch/angular-touch.js"></script>
        <script src="/bower_components/angular-route/angular-route.js"></script>
        <!-- endbower -->
        <!-- endbuild -->

        <!-- build:js(.) deploy/scripts/scripts.js -->
        <script src="/js/common/app.js"></script>
        <!-- endbuild -->
    </body>
</html>