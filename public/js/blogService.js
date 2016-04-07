(function(){
  angular.module('styleGuides')
    .factory('blogService', blogService)

    blogService.inject = ['$http']

    function blogService($http){
      var blogUrl = '/api/posts/'
      var service = {
        index: index,
        show: show,
        update: update,
        destroy: destroy
      }
      return service

      //factory functions:
      function index(){
        return $http.get(blogUrl)
      }
      function show(id){
        return $http.get(blogUrl + id)
      }
      function update(id, data){
        return $http.patch(blogUrl + id, data)
      }
      function destroy(id){
        return $http.delete(blogUrl + id)
      }
    }
})()
