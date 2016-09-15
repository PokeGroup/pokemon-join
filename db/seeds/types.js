var data = require('../type-data.js')
exports.seed = function(knex, Promise) {
  return knex('types')
    .del()
      .then(function () {
        return knex('types').insert(data)
      })
}
