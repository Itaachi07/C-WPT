const mysql = require("mysql");
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"manager",
    port:3306,
    connectionlimit:5,
    database:"cars_db"

})
module.export = {pool};