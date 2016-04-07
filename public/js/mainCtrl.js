(function(){
angular.module('styleGuides')
  .controller('MainController', MainController)

  MainController.$inject = ['admin', 'auth', '$state']

  function MainController(admin, auth, $state){
    var self = this;

    function handleRequest(res){
      var token = res.data ? res.data.token : null;
      console.log(res);

      if (token){
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
        $state.go('blog-tools')
    }

    self.register = function() {
      console.log(self.name, self.password)
      admin.register(self.name, self.password)
        .then(handleRequest, handleRequest);
        $state.go('blog-tools')
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
    self.create = function(){
      console.log(admin)
      admin.create(self.newAdmin).success(function(response){
        $state.go('blog-tools')
      })
    }
    self.post = function(){
      console.log(auth.currentUser());
			admin.post(auth.currentUser().id, self.newPost).success(function(response){
				$state.go('show-blog-post', {id: response .post._id})
      // console.log(self.admin)
			})
		}
    self.addProduct = function(){
      admin.addProduct(auth.currentUser().id, self.newProduct).success(function(response){
        $state.go('show-product', {id: response.product._id})
      console.log(self.admin)
      })
    }
  }


})()
