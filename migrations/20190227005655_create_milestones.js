exports.up = function(knex, Promise) {  
    return Promise.all([
      knex.schema.createTable('milestones', function(table){
        table.increments('id');
        table.string('descriptions');
        table.date('date_archieved');
        table.timestamps();
      })
    ])
  };
  
  exports.down = function(knex, Promise) {  
    return Promise.all([
      knex.schema.dropTable('milestones')
    ])
  };