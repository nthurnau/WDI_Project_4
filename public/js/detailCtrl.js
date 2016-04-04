(function(){

angular.module('styleGuides')
  .controller('DetailController', DetailController)

DetailController.$inject = ['adminService', '$stateParams']

  function DetailController(adminService, $stateParams){
    var vm = This
    vm.title = 'Edit your Admin Details'

    userService.show($stateParams.id).success(function(results){
      vm.admin = results
      console.log(vm.user)
    })
    vm.edit = function(){
      vm.editing = true
      vm.editingAdmin = {
        name: vm.admin.name,
        email: vm.admin.email,
        password: vm.admin.password
      }
    }
    vm.update = function(){
      //patch request handleRequest
      adminService.update($stateParams.id, vm.editingAdmin).success(function(response){
        vm.editing = false
        vm.admin = response.admin 
      })
    }
  }

})
