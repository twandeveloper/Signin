const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Users = require('../models/Users');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


router.get('/', async (req, res)=>{
    
    try {
        const users = await Users.find();
        console.log(login);
        
        res.json(users)
    } catch (err) {
        res.json({message:err});
    }
})

router.post('/login', async (req, res)=> {
    let login = req.body.userName;
    try {
        const users = await Users.find();
        users.forEach(name =>{
            if (login === name.userName) {
                console.log('login Sucessful');
                res.send('Logging in')
            }
            
        }); 
    } catch (err) {
        
    }
})

router.post('/', async (req, res)=>{

    console.log(req.body.userName);
    
    const user = new Users({
        userName: req.body.userName
        
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);        
    } catch (err) {
        res.json({message: err});
    }
})

module.exports = router;