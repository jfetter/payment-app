'use strict';

var app = angular.module('paymentApp');

app.controller('navCtrl', function($scope, $state) {
  $scope.logout = function(){
  	// remove login info
    delete $scope.$storage.myToken;
    // delete cart items
    delete $scope.$storage.myCart;
    $state.go('home');
  };

  $scope.loggedIn = function(){
  	return $scope.$storage.myToken ? true : false
}
  
});



// on index.jade use ng-if to
// only show the following buttons if logged in:
// logout
// products
// and have those states redirect to the home page
// if the user is not logged in. 

//if logged in use ng-if to hide login and register
