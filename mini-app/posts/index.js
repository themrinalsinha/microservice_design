const cors            = require("cors")
const axios           = require("axios")
const express         = require("express")
const bodyParser      = require("body-parser")
const { randomBytes } = require("crypto")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get('/posts', (request, response) => {
    response.send(posts)
})

app.post('/posts', async (request, response) => {
    const id = randomBytes(4).toString('hex')
    const { title } = request.body
    posts[id] = {
        id, title
    }

    // Create event - updating event bus about creation
    // of a new post by the user.


    response.status(201).send(posts[id])
})

// Event received - update about receiving an event from the event bus.


// running the post micro service instance on port 4000
app.listen(4000, () => {
    console.log("Listening on port 4000")
})
