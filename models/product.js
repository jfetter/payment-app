var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');
//need to include stripe here to send purchase request??? 

var Product;

// add a new product to the view
var productSchema = Schema({
  itemName: { type: String, required: true },
  itemDescription: String,
  itemPrice: {type: Number, required: true},
  //url of item picture
  itemPic: String,
  inStock: {type: Boolean, default: true}
});

// display all products

// display one product + details

//purcase product
//router.get('/purchase', function(req, res) {
  // send request through stripe here to verify customer purchase
  //perhaps also check if it is in stock



Product = mongoose.model('Product', productSchema);
module.exports = Product;

