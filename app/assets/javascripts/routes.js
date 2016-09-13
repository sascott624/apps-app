angular
    .module('app')
    .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state('sign_in', {
          url: '/sign_in',
          templateUrl: 'views/user_sessions/new.html',
          controller: 'UserSessionsController as vm'
        })

        $urlRouterProvider.otherwise('home');
    });
