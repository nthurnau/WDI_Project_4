(function(){

angular.module('styleGuides')
  .service('admin', adminService)

adminService.$inject = ['$http']

  function adminService($http){
    var vm = this
    var adminUrl = '/admins/'

    vm.login = function(name, password){
      return $http.post('api/authenticate', {
        name: name,
        password: password,
      })
    }
    vm.register = function(name, password){
      return $http.post('api/register', {
        name: name,
        password: password
      })
    }
    vm.updateAdmin = function(id, data){
      return $http.patch(adminUrl + id, data)
    }
    vm.update = function(id, data){
      return $http.patch(adminUrl + id, data)
    }
    vm.post = function(id, data){
      return $http.post(adminUrl + id + '/posts', data)
    }

    vm.addProduct = function(id, data){
      return $http.post(adminUrl + id + '/products', data)
    }
  }


})()
