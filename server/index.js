var express = require('express')

var React = require('react')
var Router = require('react-router')
var path= require('path')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Invia');

var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./config');
const validator = require('validator');
const passport = require('passport');
const PassportLocalStrategy = require('passport-local').Strategy;

import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
// var routes = require('../client/jsx/routes')
var Students=require('./user');

var Student = require('mongoose').model('Students');

var app = express()


// var Student = mongoose.model('Students', studentSchema, 'students');

// studentSchema.methods.comparePassword = function comparePassword(password, callback) {
//     bcrypt.compare(password, this.password, callback);
// };

/**
 * The pre-save hook method.
 */
// studentSchema.pre('save', function saveHook(next) {
//     const user = this;
//
//     // proceed further only if the password is modified or the user is new
//     if (!user.isModified('password')) return next();
//
//
//     return bcrypt.genSalt((saltError, salt) => {
//         if (saltError) { return next(saltError); }
//
//         return bcrypt.hash(user.password, salt, (hashError, hash) => {
//             if (hashError) { return next(hashError); }
//
//             // replace a password string with hash value
//             user.password = hash;
//
//             return next();
//         });
//     });
// });
// studentSchema.methods.comparePassword = function comparePassword(password, callback) {
//     bcrypt.compare(password, this.password, callback);
// };

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middlewareu
app.use(passport.initialize());


// load passport strategies
// const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./local-login');
// passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


// pass the authorization checker middleware
// const authCheckMiddleware = require('./auth-check');
// app.use('/api', authCheckMiddleware);


// routes
const authRoutes = require('./auth');
// const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
// app.use('/api', apiRoutes);

app.post('/new', function(req, res) {
    var newStudent = new Student(req.body);
    newStudent.save(function(err, doc) {
        res.send(doc);
    });
});
app.set('port', 8080);
app.use(express.static(path.join(__dirname, '../client')));

app.get('*',function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client','index.html'));
})

// app.get('*',function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
// })

// app.use(function (req, res, next) {
//     res.status(404).send("Sorry can't find that!")
// })

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('listening on port ' + port);
})
// http.listen(8080, function(){
//     console.log('listening on *:8080');
// });