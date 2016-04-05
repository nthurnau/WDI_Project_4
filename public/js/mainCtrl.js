(function(){
angular.module('styleGuides')
  .controller('MainController', MainController)

  MainController.$inject = ['admin', 'auth']

  function MainController(admin, auth){
    var self = this;

    function handleRequest(res){
      var token = res.data ? res.data.token : null;
      console.log(res);

      if (token){
        // console.log('JWT:', token);
        // auth.saveToken(token);
      };
      self.message = res.data.message;
    }

    self.login = function() {
      admin.login(self.name, self.password)
        .then(handleRequest, handleRequest);
    }

    self.register = function() {
      admin.register(self.name, self.password)
        .then(handleRequest, handleRequest);
    }
    self.getUsers = function() {
      admin.getAdmins()
        .then(handleRequest, handleRequest);
    }
    self.logout = function() {
      auth.logout && auth.logout();
      self.message = 'You are logout now';
    }
    self.isAuthed = function() {
      return auth.isAuthed ? auth.isAuthed() : false;
    }
  }

})()
