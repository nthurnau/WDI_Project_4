(function(){
angular.module('styleGuides')
  .factory('authInterceptor', authInterceptor)
  .controller('MainController', MainController)
  MainController.$inject = ['adminService', 'authService']

  function MainController(admin, auth){
    var vm = this

  function handleRequest(res){
    var token = res.data ? res.data.token : null
    console.log(res)

    if(token){
    }
      vm.message = res.data.message
    }
    vm.login = function(){
      admin.login(vm.name, vm.password)
      .then(handleRequest, handleRequest)
    }
    vm.register = function(){
      admin.register(vm.name, vm.password)
      .then(handleRequest, handleRequest)
    }
    vm.getAdmins = function(){
      admin.getAdmins()
        .then(handleRequest, handleRequest)
    }
    vm.logout = function(){
      auth.logout && auth.logout()
      vm.message = "You are logged out now!"
    }
    vm.isAuthed = function(){
      return auth.isAuthed ? auth.isAuthed(): false
    }
  }
  function authInterceptor(auth){
    return {
      request: function(config) {
        var token = auth.getToken()
        if(token) {
          config.headers['x-access-token'] = token
        }
        return config
      },
      response: function(res){
        if(res.data.token){auth.saveToken(res.data.token)}
        return res
      }
    }
  }
})()
