angular.module("paymentApp")



.controller("productDetailsCtrl", function(ProductService, $scope, $state, ENV){
	// redirect to home page if not logged in
	// per Austen, it doesn't matter that this
	// may be slightly async
		if ( !$scope.$storage.myToken ){
			$state.go("home");
		} 


	//the details page will need to display all the details of
	// on particular product. 

	// this controller should also link up at least 1 button - for purchase
	// additional features of this view, could be a "rating" or save to wishlist etc -- in which
	// case those actions should be noted in the user Model on the backend.

	// if we are keeping a record of customer transaction history, which is pretty
	// important, a field in the customer schema for purchases will be needed
	// and/or a field for purchasors will be required on the product page. 
	// using graphQL those two fields could be cross referenced.

	// need to figure out how Cade put the product ID as an env variable
	// I think it may have just been as a constant... which I believe would be something that would be kept
	// in the module file. 

// CHANGE THIS TO WHATEVER THE ACTUAL PATH TO THE PRODUCT ID IS
	//var productID = $scope.this.id

	$scope.productName = Product.products.ProductId.productName
	console.log($)
	//plug this in as the src in an image tag (ng-model)
	$scope.productPic = Product.products.productId.productPic 
	$scope.productPrice = Product.products.productId.productPrice
	$scope.productDescript = Product.products.ProductId.ProductDescript

	// session storage ... need to do some JSON parsing
	// $scope.shoppingCart = sessionStorage.shoppingCart
});

