var express = require('express');
var router = express.Router();
var userController = require('../controller/UserServices.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/signup", (req, res) => {userController.signup(req,res)});
router.post("/signin", (req, res) => {userController.signin(req,res)});

module.exports = router;