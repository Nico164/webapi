const { response } = require('express')
const express = require('express')
const { getUsers, getUserbyid, registerUsers, deleteUser } = require('./controllers/users.controller')
const { getArticles, createArticle } = require('./controllers/article.controller')
const app = express()

app.use(express.json())

app.get('/users', getUsers)
app.get('/users/:id', getUserbyid) 
app.post('/signup', registerUsers)
app.delete('/users/:id', deleteUser)

app.get('/articles', getArticles)
app.post('/articles', createArticle)

app.listen(7000, function () {
    console.log('server running on http')
})