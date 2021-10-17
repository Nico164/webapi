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

module.exports = {getArticles, createArticle}