const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');


const app = express();

//middleware
app.use(bodyParser.json());
app.use(express.static('public'));

//import routes 
const userRoutes = require('./routes/user');
app.use('/user', userRoutes);


//ROUTES
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res)=>{
    console.log(req.body.email);
    
});

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true},()=> console.log('connected to database')
)

app.listen(3000, ()=>{
    console.log('Server sucessfully started');
    
})