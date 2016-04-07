(function(){

angular.module('styleGuides')
  .controller('ProductController', ProductController)

ProductController.$inject = ['$state', 'productService', '$stateParams']

function ProductController($state, productService, $stateParams){
  var vm = this
  vm.title = "Store Tools"
  console.log(vm.title)

}


})()
