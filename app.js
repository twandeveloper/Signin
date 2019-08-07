const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const flash = require('connect-flash');
// const session = require('express-session');
// const config = require('./config/keys');
// const passport = require('passport');
require('dotenv/config');




const app = express();

// Set view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

//import routes 
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

// const db = require('./config/keys').MongoURI;
// Conenection to mMongo
// mongoose.connect(db, {useNewUrlParser: true},()=> console.log('connected to Mongo database')
// );


// Passport config
// require('./config/passport')(passport);

//middleware
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// Express session
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
//   }));

  //passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

//Connect flash
// app.use(flash());

// Global Vars
// app.use((req, res, next)=>{
//     res.locals.error = req.flash('error');
//     next();
// })

// app.use(express.static('public'));
// app.use(express.static(__dirname));




//pasport config




// ROUTES
// app.get('/', (req, res) =>{
//     res.render('welcome')   
// });

// app.post('/', (req, res)=>{
    
    
// });


app.listen(PORT, ()=>{
    console.log('Server sucessfully started');
    
})