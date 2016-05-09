(function(){
  angular.module('styleGuides')
    .controller('CustomerController', CustomerController)

CustomerController.$inject = ['$state', 'customerService', '$stateParams']


  function CustomerController($state, customerService, $stateParams){
    var vm = this
    vm.newCustomer = {}
    vm.customers = []

    customerService.index().success(function(results){
      vm.customers = results
      console.log(results)
    })
    vm.create = function(){
      customerService.create(vm.newCustomer).success(function(response){
        console.log(response);
        $state.go('show-customer',{id:response.customer._id})
      })
    }
  }

})()
