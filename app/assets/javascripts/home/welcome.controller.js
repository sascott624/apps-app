function WelcomeController(UserService, auth){
  var vm = this;

  vm.user = auth;

  vm.logout = function(){
    UserService.signout();
  }
}

angular
  .module('app')
  .controller('WelcomeController', WelcomeController)
