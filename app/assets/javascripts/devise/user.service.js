function UserService($auth, $state){

  var vm = this;

  vm.postLogin = function(loginParams){
    $auth.submitLogin({email: loginParams.email, password: loginParams.password}).then(function(response){
      console.log(response);
      $state.go('welcome');
    }).catch(function(response){
      console.log(response);
    })
  }

  vm.postSignup = function(signupParams){
    $auth.submitRegistration({email: signupParams.email, password: signupParams.password, password_confirmation: signupParams.passwordConfirmation}).then(function(response){
      console.log(response);
      $state.go('welcome');
    }).catch(function(response){
      console.log(response);
    })
  }

  vm.signout = function(){
    $auth.signOut().then(function(response){
      $state.go('home');
    })
  }

}

angular
  .module('app')
  .service('UserService', UserService)
