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
    })
    customerService.newCustomer().success(function(results){

    })
  }

})()
