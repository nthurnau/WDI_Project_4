(function(){

angular.module('styleGuides')
  .controller('BlogController' BlogController)

BlogController.$inject['$http']

function BlogController($http){
  var vm = this
  vm.title = "Blog Post Tools"
}

})()
