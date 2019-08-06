const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User model
const User = require('../models/Users');



module.exports = (passport) => {
    //local stratgey
    passport.use(new LocalStrategy({
        username: 'username'}, (username, password, done) => {

        //Match Username
        User.findOne({
                username: username
            })
            .then(user => {
                if (!user) {
                    console.log('test');
                    
                    return done(null, false, {
                        message: 'That username is not registserd'});   
                }

                // Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        throw err;   
                    }
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {
                            message: 'Password incorreect'
                        });
                    }
                })
            })
            .catch(err => console.log(err));

    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}