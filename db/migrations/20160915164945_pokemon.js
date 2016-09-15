exports.up = function(knex, Promise) {
	return knex.schema.createTable('pokemon', function(table) {
		table.increments('id').primary()
		table.string('name')
		table.binary('image')
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('pokemon')
}
