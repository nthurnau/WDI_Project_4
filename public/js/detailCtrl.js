(function(){

angular.module('styleGuides')
  .controller('DetailController', DetailController)

DetailController.$inject = ['admin', 'auth', '$state', '$stateParams']

  function DetailController(admin, auth, $stateParams, $state){
    var vm = this
    vm.title = 'Edit your Admin Details'

    vm.edit = function(){
      console.log(vm.admin.name)
      vm.editing = true
      vm.editingAdmin = {
        name: vm.name,
        email: vm.email,
        password: vm.password
      }
    }
    vm.updateAdmin = function(){
      //patch request handleRequest
      admin.update(self.id, vm.editingAdmin).success(function(response){
        vm.editing = false
        vm.admin = response.admin
      })
    }
  }

})()
