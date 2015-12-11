'use strict';

var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var authMiddleware = require('../config/auth');


// USERS

//route to add a new product
router.post('/', function(req, res) {
  console.log('req.body:', req.body)
  Product.create(req.body, function(err, product){
    res.status(err ? 400 : 200).send(err || product);
  });
});

//route to get a list of all prodcuts
router.get('/', function(req, res) {
  // find all products in db by using {}
  Product.find({}, function(err, products){
    res.status(err ? 400 : 200).send(err || products);
  });
});

//return a page with a single product use id as a param
  router.get("/:id", function(req, res){
    Product.findById(req.params.id, function(err, product){
      res.status(err ? 400 : 200).status(err || product);
    });
  });

module.exports = router;