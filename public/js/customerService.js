(function(){
  angular.module('styleGuides')
    .factory('customerService', customerService)

    customerService.inject = ['$http']

    function customerService($http){
      var customerUrl = '/api/customers/'
      var service = {
        index: index,
        create: create,
        show: show,
        update: update,
        destroy: destroy
      }
      return service

      //factory functions:
      function index(){
        return $http.get(customerUrl)
      }
      function create(data){
        return $http.post(customerUrl, data)
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
