const User = require("../model/userModel");
const bcrypt = require("bcrypt");

User.signup = function signup(req,res) {
    var today = new Date();

    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        gender: req.body.gender,
        password: req.body.password,
        dob:req.body.dob,
        date: today,
    };

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {

                User.findOne({
                    username:req.body.username
                }).then(us=>{
                    if(!us){
                        bcrypt.hash(req.body.password, 10, (err, hash) => {
                            userData.password = hash;
                            User.create(userData)
                                .then(user => {
                                    success = true;
                                    message = user.email + " is registered";
                                    res.json({success:success,message:message})
                                })
                                .catch(err => {
                                    success = false;
                                    message = err;
                                    res.json({success:success,message:message})

                                })
                        });
                    }else{
                        success = false;
                        message = "This username is already taken";
                        res.json({success:success,message:message})

                    }
                })

            } else {
                success = false;
                message = "This email is already taken";
                res.json({success:success,message:message})

            }
        })
        .catch(err => {
            res.send("error: " +err);
        })
};
User.signin = function signin(req,res){
    User.findOne({
        email:req.body.email
    })
        .then(user=>{
            if(user){
                if(bcrypt.compareSync(req.body.password,user.password)){
                    const payload = {
                        _id: user._id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email,
                    }
                    res.json({success:true,user:payload});
                }else{
                    res.json({success:false,error:"Invalid passowrd or username"});
                }
            }else{
                res.status(404).send();
            }
        })
        .catch(err=>{
            res.send(err);
        })
}

module.exports = User;