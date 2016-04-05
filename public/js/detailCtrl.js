(function(){

angular.module('styleGuides')
  .controller('DetailController', DetailController)

DetailController.$inject = ['admin', '$stateParams']

  function DetailController(admin, $stateParams){
    var vm = this
    vm.title = 'Edit your Admin Details'
    // console.log(admin)

    // admin.show($stateParams.id).success(function(results){
    //   vm.admin = results
    //   console.log(vm.admin)
    // })
    vm.edit = function(){
      console.log(vm.name)
      vm.editing = true
      vm.editingAdmin = {
        name: vm.name,
        email: vm.email,
        password: vm.password
      }
    }
    vm.update = function(){
      //patch request handleRequest
      admin.update(self.id, vm.editingAdmin).success(function(response){
        vm.editing = false
        vm.admin = response.admin
      })
    }
  }

})()
