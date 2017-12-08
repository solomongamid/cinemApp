const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
const cors = require('cors');
const passport = require ('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


//Connection
mongoose.connect(config.database);
//check if we connect to database
mongoose.connection.on('connected', () => {
	console.log('Connected to database'+config.database);
});
//Check connectio error
mongoose.connection.on('error', (err) => {
	console.log('Database error'+config.database);
});

const app = express();

const users = require('./routes/users');

const port = 3000;

app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
//Body parser middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
//include passport.js
require('./config/passport')(passport);
// To set the routes of users
app.use('/users', users);
// Set the route for working in port 3000
app.get('/', (req, resp) => {
    resp.send('Invalid Endpoint');
});

//start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

