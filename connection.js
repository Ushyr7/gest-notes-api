const mysql = require("mysql");


var mysqlConnection = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "nimdapdm",
    database : "gestion_des_notes",
    multipleStatements: true
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('Connected to database !');
    } else {
        console.log('failed to connect to database');
    }
});

module.exports = mysqlConnection;
