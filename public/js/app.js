(function(){
angular.module('styleGuides', ['ui.router'])
  .factory('authInterceptor', authInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
  })
  .config(['$stateProvider', '$urlRouterProvider', mainRouter])

  function mainRouter($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    //established ADMIN routes
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'partials/home.html'
      })
      .state('admin', {
        url: '/admins',
        templateUrl: 'partials/admin.html',
        controller: "MainController as main"
      })
      .state('newAdmin', {
        url: '/admins/new',
        templateUrl: 'partials/admin-new.html',
        controller: 'MainController as main'
      })
      .state('detail', {
        url: '/admin/:id',
        templateUrl: 'partials/admin-detail.html',
        controller: 'DetailController as detail'
      })
  }

  function authInterceptor(auth){
    return {
      request: function(config) {
        var token = auth.getToken();
        if(token) {
          config.headers['x-access-token'] = token;
        }
        return config;
      },

      response: function(res){
        if(res.data.token){auth.saveToken(res.data.token)};
        return res;
      }
    }
  }



})()
