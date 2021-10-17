const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "root",
    port: 8889,
    database: "nicolas_db",
})

module.exports = {
    connection
}