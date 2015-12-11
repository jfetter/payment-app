angular.module("paymentApp")
 .controller("productListCtrl", function(Product, $scope, $state, ENV){
 	if ( !$scope.$storage.myToken )
		$state.go("home");

Product.fetchProducts()
	.then(data => {
		$scope.products = data.data
		console.log($scope.products)
	})

$scope.$watch("Product.products", function(newValue, oldValue){
	$scope.products = Product.products.data;
})

 })

