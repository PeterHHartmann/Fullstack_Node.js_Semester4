var mysql      = require('mysql2');
require('dotenv').config();
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_DATABASE
});
 
connection.connect();
 
connection.query(
    'SELECT * FROM `breweries` WHERE `name` = "IPA"',
    function(err, results, fields) {
      console.log(results[0].name); // results contains rows returned by server
    }
);

const myArgs = process.argv.slice(2);
if(myArgs[0] === '--createdb') {
    console.log("creation mode activated");
}

connection.end();

