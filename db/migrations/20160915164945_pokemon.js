exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('pokemon', function(table) {
		table.increments('id').primary()
		table.string('name')
		table.string('image')
	})
	/*
	knex.schema.createTableIfNotExists('pokemon', function(table) {
		table.increments('id').primary()
		table.string('name')
		table.string('image')
	})
	knex.schema.createTableIfNotExists('types', function(table) {
		table.increments('id').primary()
		table.string('type')
	})
	knex.schema.createTableIfNotExists('characters', function(table) {
		table.increments('id').primary()
		table.number('pokemon_id')
		table.number('type_id')
	})
	*/
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('pokemon')
		.then(knex.schema.dropTable('types'))
		.then(knex.schema.dropTable('characters'))
}
