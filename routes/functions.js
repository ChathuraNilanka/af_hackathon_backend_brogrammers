var express = require('express');
var router = express.Router();
var Function = require('../controller/functionSevice.js');

/* GET Functions listing. */
router.get('/', function(req, res, next) {
  Function.getFunctionList(req,res);
});

router.get('/:id',function(req,res){
  Function.getFunctionByID(req,res);
});

router.get('/category/:category',function(req,res){
  Function.getFunctionByCategory(req,res);
});
router.get('/location/:location',function(req,res){
  Function.getFunctionByLocation(req,res);
});

router.put('/',function(req,res){
  Function.updateFunction(req,res);
});
//add Function
router.post("/", (req, res) => {
  Function.addFunction(req,res);
});

router.get("/host/:host",(req,res)=>{
    Function.getFunctionByUser(req,res);
});



module.exports = router;
