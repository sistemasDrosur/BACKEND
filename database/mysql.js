// get the client
const mysql = require('mysql2');
require('dotenv').config();

const dbConfig = {
  host: process.env.HOSTMYSQL,
  user: process.env.USERMYSQL,
  password: process.env.PASSWORDMYSQL,
  database:   process.env.DATABASEMYSQL,
  port: process.env.PORTMYSQL
}

// create the connection to database
const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
  if(err) {
    if(err.code === "PROTOCOL_CONECTION_LOST"){
      console.error("Database connection was closed beacuse lost the conection");
    } 
    if(err.code === "ER_CON_COUNT_ERROR"){
      console.error("Database has too many connections.")
    }
    if(err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.")
    }
  }
  if(connection) {
    connection.release()
    return;
  }
})

module.exports = pool;