const Event = require("../model/eventModel");
const User = require("../model/userModel");

Event.addEvent = function addEvent(req,res) {
    const userData = {
        eventName: req.body.eventName,
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

    Event.create(userData).then(event => {
        success = true;
        message = event.eventName + " is registered";
        res.json({success:success,message:message})
        })
        .catch(err => {
            success = false;
            message = err;
            res.send(message)
});
}

Event.getEventList = function getEventList(req,res){
    Event.find({}, function (err, docs) {
        if (err) return res.send(500, { error: err });
        res.json(docs);
      });
};
Event.getEventByID = function getEventByID(req,res){
    Event.findById(req.params.id, function (err, event) {
        if (err) return res.send(500, { error: err });
        res.json({"Event": event});
      });
};

Event.getEventByCategory = function getEventByCategory(req,res){
    Event.find({category:req.params.category}, function (err, event) {
        if (err) return res.send(500, { error: err });
        res.json({"Events": event})
      });
};

Event.getEventByLocation = function getEventByLocation(req,res){
    Event.find({location:req.params.location}, function (err, event) {
        if (err) return res.send(500, { error: err });
        res.json({"Events": event})
      });
};

Event.updateEvent = function updateEvent(req,res){
    var query = {'_id':req.body.id};
    const userData = {
        eventName: req.body.eventName,
        category: req.body.category,
        count: req.body.count,
        host: req.body.host,
        capacity: req.body.capacity,
        description: req.body.description,
        location: req.body.location,
        pricePerHead:req.body.pricePerHead,
        participents:req.body.participents,
        date: req.body.date,
        status: req.body.status

    };
    Event.findOneAndUpdate(query, {$set:userData}, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
    });
};

Event.getEventByUser = function getEventByUser(req,res){
    User.findById(req.params.host, function (err, user) {
        if (err) return res.send(500, { error: err });
        Event.find({host:user}, function (err, event) {
            if (err) return res.send(500, { error: err });
            res.json({"Events": event})
        });
      });
}

module.exports = Event;