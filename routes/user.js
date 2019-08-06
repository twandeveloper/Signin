const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const Users = require('../models/Users');
const passport = require('passport');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));


router.get('/', async (req, res) => {

    try {
        const users = await Users.find();
        console.log(login);

        res.json(users)
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.get('/register', (req, res) => {
    res.sendFile(path.resolve('public/signUp.html'))
});


// register new user to database and excrypts password
router.post('/', (req, res) => {
    const user = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
    });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                console.log(err);
            }
            user.password = hash;
            user.save(function (err) {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    res.sendFile(path.resolve('public/index.html'));
                }
            })
        });
    });
});

router.get('/login', (req, res) =>{
    res.sendFile(path.resolve('public/in.html'));
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/test',
        failureRedirect: '/user/login',
        failureFlash: true
    })(req, res, next);

});

module.exports = router;