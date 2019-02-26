const pg = require("pg");
const settings = require("./settings"); // settings.json
const firstName = process.argv.slice(2)[0];
const lastName = process.argv.slice(2)[1]
const birthdate = process.argv.slice(2)[2]
const connection = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
};

const db = require('knex')({
    client: 'pg',
    connection: connection
  });

db('famous_people')
  .insert({ first_name: firstName, last_name: lastName, birthdate: birthdate }).then(function(){
     console.log("inserting");
  })
  .finally(function () {
      db.destroy();
  });

