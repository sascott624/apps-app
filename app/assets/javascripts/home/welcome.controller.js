function WelcomeController(auth){
  var vm = this;

  vm.user = auth;
}

angular
  .module('app')
  .controller('WelcomeController', WelcomeController)
