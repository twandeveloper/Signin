const express = require('express');
const router = express.Router();
const path = require('path');
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res)=>{
    res.sendFile(path.resolve('public/index.html'));
});

router.get('/test', ensureAuthenticated, (req, res)=>{
    res.sendFile(path.resolve('public/members.html'));
});


module.exports = router;