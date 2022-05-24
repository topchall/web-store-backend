var app = require('express')();

var express = require('express');
var path = require('path');
var http = require('http').Server(app);
var validator = require('express-validator');
const sequelize = require('./config/db') 

var bcrypt = require("bcryptjs");

var session = require('express-session');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var i18n = require("i18n-express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ resave: false, saveUninitialized: true, secret: 'nodedemo' }));
app.use(flash());
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
  siteLangs: ["es", "en", "de", "ru", "it", "fr"],
  textsVarName: 'translation'
}));

// import controller
var AuthController = require('./controllers/AuthController');
const Admin = require('./models/admin');
const Category = require('./models/category');
const Product = require('./models/product');
sequelize.sync()  

// import Router file
var pageRouter = require('./routers/route');

Admin.findAll({})
.then(data => {
  if (!data.length){
    Admin.create({
      name: 'admin',
      email: 'admin@book.com',
      password: bcrypt.hashSync('admin', 8)
    })
    .then(admin => {
      console.log("Server create initial Admin account :\n")
      console.log(`Name: ${admin.name}\nEmail: ${admin.email}\nPassword: admin`)
      req.flash('error', err.message);
      return res.redirect('/login');
    })
    .catch(err => {
      console.log(err.message)
    });
  }
})
.catch(err => {
  console.log(err.message)
});


app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1200000
  }
}));

app.use('/public', express.static('public'));


app.get('/layouts/', function (req, res) {
  res.render('view');
});

// apply controller
AuthController(app);

//For set layouts of html view
var expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Define All Route 
pageRouter(app);

app.get('/', function (req, res) {
  res.redirect('/');
});

http.listen(8000, function () {
  console.log('listening on *:8000');
});
