(function(){

angular.module('styleGuides')
  .controller('ProductController', ProductController)

ProductController.$inject = ['$state', 'productService', '$stateParams']

function ProductController($state, productService, $stateParams){
  var vm = this
  vm.title = "Admin Store Tools"
  console.log(vm.title)
  vm.newProduct = {}
  vm.products = []

  productService.index().success(function(results){
    vm.products = results
  })
}

})()
