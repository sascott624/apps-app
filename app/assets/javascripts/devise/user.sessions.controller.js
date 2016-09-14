function UserSessionsController(UserService, $state){

  var vm = this;

  vm.login = {
    email: '',
    password: '',
  }

  vm.signup = {
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  vm.loginUser = function(login){
    UserService.postLogin(login).then(function(response){
      $state.go('welcome');
    };
  }

  vm.signupUser = function(signup){
    UserService.postSignup(signup);
  }

}

angular
  .module('app')
  .controller('UserSessionsController', UserSessionsController)
