angular
    .module('app', ['templates', 'ui.router', 'ng-token-auth'])
    .config(function($httpProvider) {

        // for CSRF errors
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

        $httpProvider.defaults.headers.patch = {
          'Content-Type': 'application/json;charset=utf-8'
        };
    });
