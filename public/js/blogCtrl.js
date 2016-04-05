(function(){

angular.module('styleGuides')
  .controller('BlogController', BlogController)

BlogController.$inject = ['$state', 'blogService']

function BlogController($state, blogService){
  var vm = this
  vm.title = "Blog Post Tools"
  vm.newPost = {}

  blogService.index().success(function(results){
    vm.posts = results
  })
  blogService.show().success(function(results){
    vm.posts = results
  })
  vm.create = function(){
    blogService.create(vm.newPost).success(function(response){
      $state.go('create-blog-post', {id: response.post._id})
    })
  }
  vm.update = function(id, index){
    blogService.update(id).success(function(response){

    })
  }
}

})()
