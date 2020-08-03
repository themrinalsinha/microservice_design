const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
app.use(bodyParser.json())

const commentsByPostId = {}

app.get('/posts/:id/comments', (request, response) => {
    response.send(commentsByPostId[request.params.id] || [])
})

app.post('/posts/:id/comments', (request, response) => {
    const commentId = randomBytes(4).toString('hex')
    const { content } = request.body

    const comments = commentsByPostId[request.params.id] || []
    comments.push({ id: commentId, content })

    commentsByPostId[request.params.id] = comments
    response.status(201).send(comments)
})

app.listen(4001, () => {
    console.log("Running on port 4001")
})