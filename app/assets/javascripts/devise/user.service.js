function UserService($auth, $state){

  var vm = this;

  vm.postLogin = function(loginParams){
    $auth.submitLogin({email: loginParams.email, password: loginParams.password}).then(function(response){
      console.log(response);
    }).catch(function(response){
      console.log(response);
    })
  }

  // vm.postSignup = function(signupParams){
  //   $auth.submitLogin({email: loginParams.email, password: loginParams.password}).then(function(response){
  //     console.log(response);
  //   }).catch(function(response){
  //     console.log(response);
  //   })
  // }

}

angular
  .module('app')
  .service('UserService', UserService)
