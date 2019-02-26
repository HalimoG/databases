const pg = require("pg");
const settings = require("./settings"); // settings.json
const name = process.argv.slice(2)[0];
const connection = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
};

const db = require('knex')({
    client: 'pg',
    connection: connection
  });

  db('famous_people').where({ first_name: name }).then(rows => 
    rows.forEach(row => console.log(row) )
    );