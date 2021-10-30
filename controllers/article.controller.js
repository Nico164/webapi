const { connection } = require("./config/db")

function getArticles(request, response) {
    connection.query(
        "SELECT * FROM articles",
        function (err, result, field) {
            response.json({
                data: result,
                status: 'Sucess'
            })
        }
    )
}

function createArticle(request, response) {
    const title = request.body.title
    const body = request.body.body
    console.log(
        title
    )
    connection.query(
        "INSERT INTO articles (title,body) VALUES (?, ?)",
        [title, body],
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

function deleteArticle(request, response) {
    const id = request.params.id
    connection.query(
        "DELETE FROM articles WHERE id = ?",
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

function getArticlesbyid(request, response) {
    const id = request.params.id
    connection.query(
        "SELECT * FROM articles WHERE id = ?",
        [id],
        function (err, result, field) {
            response.json({
                data: result,
                status: 'Sucess'
            })
        }
    )
}

module.exports = {getArticles, createArticle, deleteArticle, getArticlesbyid}