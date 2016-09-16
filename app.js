var express = require('express')
var exphbs = require('express-handlebars')
var nodemon = require('nodemon')
var config = require('./knexfile').development
var knex = require('knex')(config)

var app = express()

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')


app.get('/', function(req, res) {
	knex('pokemon')
		.select()
		.then(
			function(pokemon) {
				res.render('list', {
					pokemon: pokemon
				})
			}
		)
		.catch(function(err) {
			console.log(err)
		})
})

function getAllPokes() {
   return knex('pokemon').select()
}

function getPoke(id) {
   return knex('pokemon')
   .join('eyedees', 'eyedees.pokemon_id', '=', 'pokemon.id')
   .join('types', 'types.id', '=', 'eyedees.type_id')
   .where('pokemon.id', id)
}

function getPokeByType(type) {
   return knex('eyedees')
   .join('pokemon', 'pokemon.id', '=', 'eyedees.pokemon_id')
   .where('eyedees.type_id', type)
}

app.get('/:id', function(req, res) {
   var unique, typeStrings
   getPoke(req.params.id)
   .then(function (uniquePoke) {
      unique = uniquePoke[0]
      var typeIds = uniquePoke.map(function (obj) {
         return obj.type_id
      })
      typeStrings = uniquePoke.map(function (obj) {
         return obj.type
      })
      var pokePromises = typeIds.map(getPokeByType)
      return Promise.all(pokePromises)
   })
   .then(function (result) {
      var pokeRelatives = result[0]
      for (var i = 0; i < result.length - 1; i++) {
         pokeRelatives = pokeRelatives.concat(result[i+1])
      }
      var pokeRelativeNames = pokeRelatives.map(function (obj) {
         return obj.name
      })
      res.render('pokeProfile', {name: unique.name, image: unique.image, type: typeStrings, pokeRelativeName: pokeRelativeNames})
   })
   .catch(function (err) {
      console.log(err)
   })
})

module.exports = app
