
var data = require('../id-data.js')
exports.seed = function(knex, Promise) {
  return knex('eyedees')
    .del()
      .then(function () {
        return knex('eyedees').insert(data)
      })
}
