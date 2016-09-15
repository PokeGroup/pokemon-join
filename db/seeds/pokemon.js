var data = require('../pokemon-data.js')
exports.seed = function(knex, Promise) {
  return knex('pokemon')
    .del()
      // .then(knex('types').del())
      // .then(knex('characters').del())
      .then(function () {
        return knex('pokemon').insert(data)
      })

      // .then(function () {return knex('types').insert(data.types)})
      // .then(function () {return knex('characters').insert(data.characters)})
}
