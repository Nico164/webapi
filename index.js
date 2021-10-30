const { response } = require('express')
const express = require('express')
const { getUsers, getUserbyid, registerUsers, deleteUser, loginUsers } = require('./controllers/users.controller')
const { getArticles, createArticle, deleteArticle, getArticlesbyid } = require('./controllers/article.controller')
const app = express()

app.use(express.json())

app.get('/users', getUsers)
app.get('/users/:id', getUserbyid) 
app.post('/signup', registerUsers)
app.post('/login', loginUsers)
app.delete('/users/:id', deleteUser)


app.get('/articles', getArticles)
app.post('/articles', createArticle)
app.get('/articles/:id', getArticlesbyid)
app.delete('/articles/:id', deleteArticle)

app.listen(3000, function () {
    console.log('server running on http')
})