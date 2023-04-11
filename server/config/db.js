// This file is used to create a connection to the database

const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    schema: "meetingdb" 
})
db.connect(error => {
    if (error){
        console.log(error)
    }
})
module.exports = db;