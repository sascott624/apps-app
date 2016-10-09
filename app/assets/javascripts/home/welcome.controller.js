function WelcomeController(UserService, auth){
  var vm = this;

  vm.auth = auth;

  vm.logout = function(){
    UserService.signout();
  }
}

angular
  .module('app')
  .controller('WelcomeController', WelcomeController)
