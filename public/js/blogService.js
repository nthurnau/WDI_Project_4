(function(){
  angular.module('styleGuides')
    .factory('blogService', blogService)

    blogService.inject = ['$http']

    function blogService($http){
      var blogUrl = '/api/posts/'
      var service = {
        index: index,
        show: show,
        // create: create,
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
      // function create(data){
      //   return $http.post(blogUrl, data)
      // }
      function update(id, data){
        return $http.patch(blogUrl + id, data)
      }
      function destroy(id){
        return $http.delete(blogUrl + id)
      }
    }
})()
