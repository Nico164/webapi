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

function getArticlesbysearch(request, response) {
    const search = request.body.search
    console.log (search)
    connection.query(
        `SELECT * FROM articles WHERE title like '%${search}%' or body like '%${search}%' `,
        function (err, result) {
            response.json({
                data: result,
                status: 'Sucess'
            })
        }
    )
}

function updateArticle(request, response) {
    const title = request.body.title
    const id = request.params.id
    const body = request.body.body
    console.log(
        title
    )
    connection.query(
        "UPDATE articles SET title = ?, body= ? Where id =?",
        [title, body, id],
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

function getArticleswithfilters(request, response) {
    const filter = request.body.filter
    const sort = request.body.sort
    console.log (filter)
    connection.query(
        `SELECT * FROM articles ORDER by ${filter} ${sort}`,
        function (err, result) {
            response.json({
                data: result,
                status: 'Sucess'
            })
        }
    )
}

module.exports = {getArticles, createArticle, deleteArticle,
     getArticlesbyid, getArticlesbysearch, updateArticle, getArticleswithfilters}