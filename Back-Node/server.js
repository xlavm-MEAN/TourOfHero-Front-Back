
var express = require('express');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();

var port = process.env.PORT || 3000;
const mongoURI = 'mongodb://localhost:27017/heroes';

mongoose.connect(mongoURI,{ useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());

//modelos:
var heroRouter= require('./routes/heroRouter'); 
app.use('/hero', heroRouter);


app.listen(port, function() {
    console.log('Server is running on port: ' + port);
})

