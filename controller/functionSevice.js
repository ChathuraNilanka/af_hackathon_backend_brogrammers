const Function = require("../model/functionModel");
const User = require("../model/userModel");

Function.addFunction = function addFunction(req,res) {
    const userData = {
        functionName: req.body.functionName,
        category: req.body.category,
        host: req.body.host,
        description: req.body.description,
        location: req.body.location,
        pricePerHead:req.body.pricePerHead,
        date: req.body.date,

    };

    Function.create(userData).then(Function => {
        success = true;
        message = Function.functionName + " is registered";
        res.json({success:success,message:message})
        })
        .catch(err => {
            success = false;
            message = err;
            res.send(message)
});
}

Function.getFunctionList = function getFunctionList(req,res){
    Function.find({}, function (err, docs) {
        if (err) return res.send(500, { error: err });
        res.json(docs);
      });
};
Function.getFunctionByID = function getFunctionByID(req,res){
    Function.findById(req.params.id, function (err, Function) {
        if (err) return res.send(500, { error: err });
        res.json({"Function": Function});
      });
};

Function.getFunctionByCategory = function getFunctionByCategory(req,res){
    Function.find({category:req.params.category}, function (err, Function) {
        if (err) return res.send(500, { error: err });
        res.json({"Functions": Function})
      });
};

Function.getFunctionByLocation = function getFunctionByLocation(req,res){
    Function.find({location:req.params.location}, function (err, Function) {
        if (err) return res.send(500, { error: err });
        res.json({"Functions": Function})
      });
};

Function.updateFunction = function updateFunction(req,res){
    var query = {'_id':req.body.id};
    const userData = {
        functionName: req.body.functionName,
        category: req.body.category,
        count: req.body.count,
        host: req.body.host,
        capacity: req.body.capacity,
        description: req.body.description,
        location: req.body.location,
        pricePerHead:req.body.pricePerHead,
        participents:req.body.participents,
        date: req.body.date,

    };
    Function.findOneAndUpdate(query, {$set:userData}, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
    });
};

Function.getFunctionByUser = function getFunctionByUser(req,res){
    User.findById(req.params.host, function (err, user) {
        if (err) return res.send(500, { error: err });
        Function.find({host:user}, function (err, Function) {
            if (err) return res.send(500, { error: err });
            res.json({"Functions": Function})
        });
      });
}

module.exports = Function;