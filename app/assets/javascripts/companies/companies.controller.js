function CompaniesController(){
  var vm = this;

  vm.name = "Companies";

}

angular
  .module('app')
  .controller('CompaniesController', CompaniesController)
