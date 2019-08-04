const express = require('express');
const router = express.Router();
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
})

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

router.post('/', async (req, res) => {

    console.log(req.body.userName);
    console.log(req.body.password);

    const user = new Users({
        userName: req.body.userName,
        password: req.body.password

    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({
            message: err
        });
    }
})

module.exports = router;