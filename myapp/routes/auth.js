const express = require('express');
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
//const register = require('..//controllers/auth/register')

var expressValidator = require('express-validator');
router.use(expressValidator())


let User = require('../models/user');

router.post('/register', (req, res) => {
    console.log("123");
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    req.checkBody('userEmail', 'Email is required').notEmpty();
    req.checkBody('userEmail', 'Email is not valid').isEmail();

    req.checkBody('userPassword', 'Password is required').notEmpty();
    req.checkBody('userPassword', 'Passwords do not match').equals(req.body.userPasswordConfirm);

    req.checkBody('userName', 'Name is required').notEmpty();

    let errors = req.validationErrors();

    if (errors) {
        res.send({ errors });
    }
    else {
        let newUser = new User({
            email: userEmail,
            password: userPassword,
            name: userName
        });
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                    console.log(err);
                }
                newUser.password = hash;
                newUser.save((err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    else {
                        res.send('You created user');
                    }
                });
            });
        });
    }
});
//Login Process
// router.post('/login', function(res, req, next){

//     passport.authenticate('local', {
//         failureRedirect: '/',
//         session: true
//     }),function(req, res){
//         res.send({message: ">>>"});
//     };
// });
// router.post('/login', 
// function(req, res, next){
//     passport.authenticate('local', {
//        successRedirect: '/',
//        failureRedirect: '/profile/sign-in',

//     })(req, res, next);
// });

//verifyToken
router.post('/login', (req, res, next) => {
    
    passport.authenticate('local',{session: false}, (err, user, info) => {
        if (!user) {
            console.log({user});
            console.log({err});
           return {"Error": "No such user"};
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jwt.sign(JSON.parse(JSON.stringify(user)), 'your_jwt_secret');
            const id = user.id;
            return res.json({id, token });
        });
    })(req, res, next);
});
function verifyToken(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;

        next();
    } else {
        res.sendStatus(403);
    }

    next();
}
router.post('/logout', function (req, res) {
    req.logOut();
});

module.exports = router; 