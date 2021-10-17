const { connection } = require("./config/db")
const bcrypt = require('bcrypt')

function getUsers(request, response) {
    connection.query(
        "SELECT * FROM users",
        function (err, result, field) {
            response.json({
                data: result,
                status: 'Sucess'
            })
        }
    )
}

function getUserbyid(request, response) {
    const id = request.params.id
    connection.query(
        "SELECT * FROM users WHERE id = ?",
        [id],
        function (err, result, field) {
            response.json({
                data: result,
                status: 'Sucess'
            })
        }
    )
}

function registerUsers(request, response) {
    const name = request.body.name
    const email = request.body.email
    const password = request.body.password
    const hash = bcrypt.hashSync(password, 10)
    connection.query(
        "INSERT INTO users (name,email,password) VALUES (?, ?, ?)",
        [name, email, hash],
        function (err, result) {
            if (!err) {
                response.json({
                    data: result,
                    status: 'Sucess'
                })
            }
        }
    )
}

function deleteUser(request, response) {
    const id = request.params.id
    connection.query(
        "DELETE FROM users WHERE id = ?",
        [id],
        function (err, result) {
            if (!err) {
                response.json({
                    data: result,
                    status: 'Sucess'
                })
            }
        }
    )
}

module.exports = {
    getUsers, getUserbyid, registerUsers, deleteUser
}