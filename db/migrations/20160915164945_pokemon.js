exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('pokemon', function(table) {
		table.integer('id').primary()
		table.string('name')
		table.string('image')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('pokemon')
};
