function UserService($auth){

  var vm = this;

  vm.postLogin = function(loginParams){
    $auth.submitLogin('/sign_in', {email: loginParams.email, password: loginParams.password}).then(function(response){
      console.log(response);
    }).catch(function(response){
      console.log(response);
    })
  }

}

angular
  .module('app')
  .service('UserService', UserService)
