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
    UserService.postLogin(login);
  }

  vm.signupUser = function(signup){
    UserService.postSignup(signup);
  }

}

angular
  .module('app')
  .controller('UserSessionsController', UserSessionsController)
