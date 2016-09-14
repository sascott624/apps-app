angular
    .module('app')
    .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        .state('sign_in', {
          url: '/sign_in',
          templateUrl: 'devise/views/user_sessions/new.html',
          controller: 'UserSessionsController as vm'
        })

        $urlRouterProvider.otherwise('home');
    });
