(function(){
angular.module('styleGuides')
  .controller('MainController', MainController)

  MainController.$inject = ['admin', 'auth','$state']

  function MainController(admin, auth,$state){
    var self = this;

    function handleRequest(res){
      var token = res.data ? res.data.token : null;
      console.log(res);

      if (token){
        // console.log('JWT:', token);
        // auth.saveToken(token);
      };
      self.message = res.data.message;
      self.id = res.data.admin._id;
      self.admin = res.data.admin;
      console.log(self.id)
      console.log(self.admin)
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
    self.edit = function(){
      console.log(self.admin)
      self.editing = true
      self.editingAdmin = {
        name: self.name,
        email: self.email,
        password: self.password
      }
    }
    self.update = function(){
      console.log(self.id)
      //patch request handleRequest
      admin.update(self.id, self.editingAdmin).success(function(response){
        self.editing = false
        self.admin = response.admin
      })
    }
    self.post = function(){
			// run the userService create method here.
      console.log(auth.currentUser());
			admin.post(auth.currentUser().id, self.newPost).success(function(response){
				$state.go('detail', {id: response.post._id})
      // console.log(self.admin)
			})
		}
  }


})()
