


exports.up = function(knex, Promise) {  
    return Promise.all([
        
        knex.schema.createTable('famous_person', function(table){
            table.increments('id')
        }),
        
        knex.schema.table('milestones', function(table){
               table.integer("famous_person_id");
            table.foreign('famous_person_id').references('famous_person.id');
            
        })
    ])
};

exports.down = function(knex, Promise) {  
    return Promise.all([
        knex.schema.table('milestones', table => {
        table.dropColumn('famous_person_id')
    }),
        knex.schema.dropTable('famous_person')
    ]);
};