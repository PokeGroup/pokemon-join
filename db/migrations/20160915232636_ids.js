exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('eyedees', function(table) {
		table.integer('id').primary()
		table.integer('pokemon_id')
    table.integer('type_id')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('eyedees')
};
