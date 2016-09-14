function UserService($http){

  var vm = this;

  vm.postLogin = function(loginParams){
    console.log(loginParams);
  }

}

angular
  .module('app')
  .service('UserService', UserService)
