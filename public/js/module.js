'use strict';

var app = angular.module('paymentApp', ['ui.router', 'ngStorage']);

app.constant('ENV', {
  API_URL: 'http://localhost:3000/'
});

app.run(function($rootScope, $localStorage) {
  $rootScope.$storage = $localStorage;
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', { url: '/', templateUrl: 'templates/home.html'})
    .state('login', { url: '/login', templateUrl: 'templates/login.html', controller: 'loginCtrl'})
    .state('register', { url: '/register', templateUrl: 'templates/register.html', controller: 'registerCtrl'})
   
   // user should need to be logged in to 
   // see each any of the product views state.go to home if 
   // non logged in user tries to visit product pages
    .state("product", {url: "/product", templateUrl: "templates/product/main.html", abstract: true })
    .state("product.list", {url: "/", templateUrl: "templates/product/list.html", controller: "productListCtrl"} )
    .state("product.details", {url: "/{productId}", templateUrl: "templates/productDetails", controller: "productDetailsCtrl"})

   //user must be logged in as an admin to see add/edit products 
    .state('addProduct', {url: "/addProduct", templateUrl: "templates/addProduct.html", controller: "addProductCtrl"})
});