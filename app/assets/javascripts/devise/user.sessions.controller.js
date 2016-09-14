function UserSessionsController(UserService){

  var vm = this;

  vm.login = {
    email: '',
    password: '',
  }

  vm.loginUser = function(login){
    UserService.postLogin(login)
  }

}

angular
  .module('app')
  .controller('UserSessionsController', UserSessionsController)
