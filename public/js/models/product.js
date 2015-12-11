'use strict';

angular.module('paymentApp')


// need to save the token or identifier or something related to the product as an
// ENV variable... 'cause that is what cade is using as teh second
// argument here. I think the ENV variable may have just been a constant


.service("Product", function($http, ENV){

	this.loggedIn = function(){
  	console.log($storage.myToken)
  	return $storage.myToken ? true : false
}

		//keep track of all products
	this.products = []

	//FIGURE OUT HOW TO GET PRODUCT ID	
	//this.products.ID = {} //productID: {pname: pnamevalue, purl: purlvalue ...} 
	
	// keep track of products ordered in controller in $storage not in service

//on page load, update current products from API
	this.fetchProducts = function(){
		return $http.get("/products")
			.success(data =>{
				this.products = data
			})
		}

// purchase product
//	this.checkout(){
		//var totalCost = shoppingCart.reduce(function(acc, item, index, all){
		// 	acc += item; 
		// 	return acc(tax) + shipping? 
		// })
//	}



	//this.addNewProduct = function(ENV.id){
		//return $http.post(ENV.API_URL + "products/addNew", product);
		// the way Cade has it set up (eg the way above), the info will be
		// handled in the controller, but I need to grab the product info
		// that comes back (including mongodb id and shove it
		// into the products array. may need to get tricky here with referencing "this"... 
		// using => notation may do the trick )

});



