(function(){

angular.module('styleGuides')
  .controller('BlogController', BlogController)

BlogController.$inject = ['$state', 'blogService', '$stateParams']

function BlogController($state, blogService, $stateParams){
  var vm = this
  vm.title = "Blog Post Tools"
  console.log(vm.title);
  vm.newPost = {}
  vm.posts = []


  blogService.index().success(function(results){
    vm.posts = results
  })

  // vm.create = function(){
	// 	// run the userService create method here.
	// 	blogService.create(vm.newPost).success(function(response){
	// 		$state.go('blog_detail', {id: response.post._id})
	// 	})
	// }
}

})()
