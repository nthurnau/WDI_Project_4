(function(){
  angular.module('styleGuides')
    .factory('productService', productService)

    productService.inject = ['$http']

    function productService($http){
      var productUrl = '/api/products/'
      var service = {
        index: index,
        show: show,
        update: update,
        destroy: destroy
      }
      return service

      //factory functions:
      function index(){
        return $http.get(productUrl)
      }
      function show(id){
        return $http.get(productUrl + id)
      }
      function update(id, data){
        return $http.patch(productUrl + id, data)
      }
      function destroy(id){
        return $http.delete(productUrl + id)
      }
    }
})()
