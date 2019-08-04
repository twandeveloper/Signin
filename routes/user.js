const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const Users = require('../models/Users');
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

router.post('/login', async (req, res) => {
    let login = req.body.userName;
    let passkey = req.body.password;
    try {
        const users = await Users.findOne({
            UserName: login,
            password: passkey
        }, () => {

            res.sendFile(path.resolve('public/members.html'));

        });

    } catch (err) {

    }
});

router.post('/', (req, res) => {

    const user = new Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
    });
    bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(user.password, salt, (err, hash)=>{
            if (err) {
                console.log(err);    
            }
            user.password = hash;
            user.save(function(err){
                if (err) {
                    console.log(err);
                    return;
                }else{
                    res.sendFile(path.resolve('public/index.html'));
                }
            })
        });
    });

})

module.exports = router;