exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('types', function(table) {
		table.integer('id').primary()
		table.string('type')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('types')
};
