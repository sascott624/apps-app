function UserSessionsController(UserService){

  var vm = this;

  var login = {
    email: '',
    password: ''
  }

  var loginUser = function(login){
    UserService.postLogin(login)
  }

}

angular
  .module('app')
  .controller('UserSessionsController', UserSessionsController)
