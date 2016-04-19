(function(){

angular.module('styleGuides')
  .controller('CustomerDetailController', CustomerDetailController)

CustomerDetailController.$inject = ['$state', 'customerService', '$stateParams']

  function CustomerDetailController($state, customerService, $stateParams){
    var vm = this

    vm.currentCustomerId = $stateParams.id

    vm.show = function(){
      customerService.show($stateParams.id).success(function(data){
        console.log(data.fname, data.lname, data.streetAddress, data.city, data.state, data.zip, data.phoneNumber, data.email)
        vm.fname = data.fname
        vm.lname = data.lname
        vm.streetAddress = data.streetAddress
        vm.city = data.city
        vm.state = data.state
        vm.zip = data.zip
        vm.phoneNumber = data.phoneNumber
        vm.email = data.email
        })
    }
    vm.show()

    vm.create = function(){
      customerService.create(vm.newCustomer).success(function(response){
        $state.go('show-customer')
      })
    }

    vm.edit = function(){
      console.log(vm.fname)
      vm.editing = true
      vm.editingCustomer = {
        fname: vm.fname,
        lname: vm.lname,
        streetAddress: vm.streetAddress,
        city: vm.city,
        state: vm.state,
        zip: vm.zip,
        phoneNumber: vm.phoneNumber,
        email: vm.email
      }
    }

    vm.update = function(){
			// patch request will go here.
			customerService.update($stateParams.id, vm.editingCustomer).success(function(response){
				vm.editing = false
				vm.customer = response.customer
			})
		}
    vm.destroy = function(){
			customerService.destroy(vm.currentCustomerId).success(function(response){
				console.log(response)
        $state.go('blog-tools')
			})
		}
 }

})()
