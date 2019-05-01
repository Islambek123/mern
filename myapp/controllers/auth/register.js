const express = require('express');
const bcrypt = require('bcryptjs');

module.exports.register = function(req, res){
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
}