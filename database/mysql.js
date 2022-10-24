// get the client
const mysql = require('mysql2');
require('dotenv').config();

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.HOSTMYSQL,
  user: process.env.USERMYSQL,
  password: process.env.PASSWORDMYSQL,
  database:   process.env.DATABASEMYSQL,
  port: process.env.PORTMYSQL
});

connection.connect((error) => {
  if(!!error){
    console.log(error);
  } else {
    console.log("Connected...!");
  }
})

module.exports = connection;