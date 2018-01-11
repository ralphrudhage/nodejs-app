const express = require('express');
const mockapp = express();
const controller = require('./controllers/controller.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/music');
mongoose.Promise = global.Promise;

mockapp.set('view engine', 'ejs');
mockapp.use(express.static('./public'));

controller(mockapp);

mockapp.listen(3000);
console.log('listening to port 3000');
