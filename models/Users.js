const mongoose = require('mongoose');

const UserSchema  = mongoose.Schema({
    userName: {type:String, required: true},
    password: String
});

module.exports = mongoose.model('Users', UserSchema);