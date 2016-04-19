(function(){
  angular.module('styleGuides')
    .factory('customerService', customerService)

    customerService.inject = ['$http']

    function customerService($http){
      var customerUrl = '/api/customers/'
      var service = {
        index: index,
        post: post,
        show: show,
        update: update,
        destroy: destroy
      }
      return service

      //factory functions:
      function index(){
        return $http.get(customerUrl)
      }
      function post(id, data){
        return $http.post(customerUrl + id + '/customers', data)
      }
      function show(id){
        return $http.get(customerUrl + id)
      }

      function update(id, data){
        return $http.patch(customerUrl + id, data)
      }
      function destroy(id){
        return $http.delete(customerUrl + id)
      }
    }
})()
