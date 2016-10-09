angular
    .module('app')
    .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        .state('sign-in', {
          url: '/sign-in',
          templateUrl: 'devise/views/signin.html',
          controller: 'UserSessionsController as vm'
        })
        .state('sign-up', {
          url: '/sign-up',
          templateUrl: 'devise/views/signup.html',
          controller: 'UserSessionsController as vm'
        })
        .state('welcome', {
          url: '/welcome',
          templateUrl: 'home/welcome.html',
          controller: 'WelcomeController as vm',
          resolve: {
            auth: function($auth){
              return $auth.validateUser();
            }
          }
        })
        .state('welcome.companies', {
          url: '/companies',
          templateUrl: 'companies/companies.html',
          controller: 'WelcomeController as vm'
        })
        .state('welcome.contacts', {
          url: '/contacts',
          controller: 'WelcomeController as vm'
        })
        .state('welcome.connections', {
          url: '/connections',
          controller: 'WelcomeController as vm'
        })
        $urlRouterProvider.otherwise('home');
    });
