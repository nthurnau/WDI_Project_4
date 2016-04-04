(function(){
angular.module('styleGuides', ['ui.router'])
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor')
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



})()
