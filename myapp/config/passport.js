const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user.js');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

module.exports = function (passport) {
    //local strategy

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        session: false
    },
        function (username, password, done) {
            let query = {
                email: username
            };
            console.log(username);
            return User.findOne(query, function (err, user) {

                if (err) {
                    throw err;
                }
                if (!user) {
                    console.log("no user");
                    return done(null, false, { message: "No user found!" });
                }
                bcrypt.compare(password, user.password, function (err, isMatch) {
                    console.log(isMatch);
                    if (err) {
                        throw err;
                    }
                    if (isMatch) {
                        return done(null, user, { message: "Logged in successfully" });
                    }
                    else {
                        console.log("no password"+ isMatch);
                        return done(null, false, { message: "Wrong Password!" });
                    }
                });
            });
        }));
    // passport.use(new JWTStrategy({
    //     jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    //     secretOrKey: 'your_jwt_secret'
    // },
    //     function (jwtPayLoad, done) {
    //         return User.findOneById(jwtPayLoad.id)
    //             .then(user => {
    //                 return done(null, user);
    //             })
    //             .catch(err => {
    //                 return done(err);
    //             });
    //     }));
    // passport.serializeUser(function (user, done) {
    //     done(null, user.id);
    // });
    // //Delete user from session
    // passport.deserializeUser(function (id, done) {
    //     User.findById(id, function (err, user) {
    //         done(err, user);
    //     });
    // });
}