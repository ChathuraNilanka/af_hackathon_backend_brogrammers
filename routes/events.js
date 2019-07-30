var express = require('express');
var router = express.Router();
var event = require('../controller/EventServive.js');

/* GET events listing. */
router.get('/', function(req, res, next) {
  Event.getEventList(req,res);
});

router.get('/:id',function(req,res){
  Event.getEventByID(req,res);
});

router.get('/category/:category',function(req,res){
  Event.getEventByCategory(req,res);
});
router.get('/location/:location',function(req,res){
  Event.getEventByLocation(req,res);
});

router.put('/',function(req,res){
  Event.updateEvent(req,res);
});
//add event
router.post("/", (req, res) => {
  Event.addEvent(req,res);
});
router.get("/host/:host",(req,res)=>{
  Event.getEventByUser(req,res);
});



module.exports = router;
