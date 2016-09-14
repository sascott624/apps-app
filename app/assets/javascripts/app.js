angular
<<<<<<< HEAD
    .module('app', ['templates', 'ui.router'])
=======
    .module('app', ['templates', 'ui.router', 'ng-token-auth'])
>>>>>>> authentication
    .config(function($httpProvider) {

        // for CSRF errors
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

        $httpProvider.defaults.headers.patch = {
          'Content-Type': 'application/json;charset=utf-8'
        };
<<<<<<< HEAD


=======
>>>>>>> authentication
    });
