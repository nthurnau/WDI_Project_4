(function(){

angular.module('styleGuides')
  .controller('ProductDetailController', ProductDetailController)

ProductDetailController.$inject = ['$state', 'productService', '$stateParams']

  function ProductDetailController($state, productService, $stateParams){
    var vm = this
    // vm.title = 'Edit your Post Details'
    // console.log(post)
    vm.currentProductId = $stateParams.id

    vm.show = function(){
      productService.show($stateParams.id).success(function(data){
        console.log(data.title, data.description, data.body, data.price, data.image, data.amount)
        vm.title = data.title
        vm.description = data.description
        vm.body = data.body
        vm.price = data.price
        vm.image = data.image
        vm.amount = data.amount
        })
    }
    vm.show()

    vm.edit = function(){
      console.log(vm.title)
      vm.editing = true
      vm.editingProduct = {
        title: vm.title,
        description: vm.description,
        body: vm.body,
        price: vm.price,
        image: vm.image,
        amount: vm.amount
      }
    }

    vm.update = function(){
			// patch request will go here.
			productService.update($stateParams.id, vm.editingProduct).success(function(response){
				vm.editing = false
				vm.product = response.product
			})
		}
    vm.destroy = function(){
			productService.destroy(vm.currentProductId).success(function(response){
				console.log(response)
        $state.go('product-tools')
			})
		}
 }

})()
