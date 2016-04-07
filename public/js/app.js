(function(){
angular.module('styleGuides', ['ui.router'])
  // FOR MORE UI ROUTER ERRORS, UNCOMMENT:
  // .run(function($rootScope) {
  //   $rootScope.$on("$stateChangeError", console.log.bind(console));
  // })
  .factory('authInterceptor', authInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
  })
  .config(['$stateProvider', '$urlRouterProvider', mainRouter])

  function mainRouter($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    //established ADMIN and BLOG routes
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'partials/home.html'
      })
      .state('edit-admin', {
        url: '/admin/:id',
        templateUrl: 'partials/edit-admin.html'
      })
      .state('blog-tools', {
        url:'/blog-tools',
        templateUrl: 'partials/blog-tools.html',
        controller: 'BlogController as blog',
      })
      .state('product-tools', {
        url:'/product-tools',
        templateUrl: 'partials/product-tools.html',
        controller: 'ProductController as product',
      })
      .state('all-blog-posts',{
        url: '/posts',
        templateUrl: 'partials/all-blog-posts.html',
        controller: 'BlogController as blog',
      })
      .state('create-blog-post',{
        url: '/posts/new',
        templateUrl: 'partials/create-blog-post.html'
      })
      .state('show-blog-post', {
        url:'/posts/:id',
        templateUrl: 'partials/show-blog-post.html',
        controller: 'BlogDetailController as blog_detail'
      })
      .state('edit-blog-post', {
        url: '/posts/:id/edit',
        templateUrl: 'partials/edit-blog-post.html',
        controller: 'BlogDetailController as blog_detail'
      })
      .state('all-products',{
        url: '/products',
        templateUrl: 'partials/all-products.html',
        controller: 'ProductController as product'
      })
      .state('create-product',{
        url: '/products/new',
        templateUrl: 'partials/create-product.html'
      })
      .state('show-product', {
        url:'/products/:id',
        templateUrl: 'partials/show-product.html',
        controller: 'ProductDetailController as product_detail'
      })
      .state('edit-product', {
        url: '/products/:id/edit',
        templateUrl: 'partials/edit-product.html',
        controller: 'ProductDetailController as product_detail'
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
