(function(){

angular.module('styleGuides')
  .service('admin', adminService)

adminService.$inject = ['$http']

  function adminService($http){
    var vm = this

    vm.login = function(name, password){
      return $http.post('api/authenticate', {
        name: name,
        password: password
      })
    }

    vm.register = function(name, password){
      return $http.post('api/register', {
        name: name,
        password: password
      })
    }
    vm.getAdmins = function(name, password){
      return $http.get('/admins')
    }
  }

})()
