var express = require('express')
var exphbs = require('express-handlebars')
var nodemon = require('nodemon')
var knex = require('knex')

var app = express()

 app.engine('handlebars', exphbs({defaultLayout: 'main'}))
 app.set('view engine', 'handlebars')


 app.get('/', function (req, res) {
  res.send('hello')
 })



module.exports = app
