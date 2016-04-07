(function(){

angular.module('styleGuides')
  .controller('BlogDetailController', BlogDetailController)

BlogDetailController.$inject = ['$state', 'blogService', '$stateParams']

  function BlogDetailController($state, blogService, $stateParams){
    var vm = this
    // vm.title = 'Edit your Post Details'
    // console.log(post)
    vm.currentPostId = $stateParams.id

    vm.show = function(){
      blogService.show($stateParams.id).success(function(data){
        console.log(data.title, data.date, data.content)
        vm.title = data.title
        vm.date = data.date
        vm.content = data.content
        })
    }
    vm.show()

    vm.edit = function(){
      console.log(vm.title)
      vm.editing = true
      vm.editingPost = {
        title: vm.title,
        date: vm.date,
        content: vm.content
      }
    }

    vm.update = function(){
			// patch request will go here.
			blogService.update($stateParams.id, vm.editingPost).success(function(response){
				vm.editing = false
				vm.post = response.post
			})
		}
    vm.destroy = function(){
			blogService.destroy(vm.currentPostId).success(function(response){
				console.log(response)
        $state.go('blog-tools')
			})
		}
 }

})()
