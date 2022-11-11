const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database:"meetingdb" 
})
db.connect(error => {
    if (error){
        console.log(error)
    }
})
module.exports = db;