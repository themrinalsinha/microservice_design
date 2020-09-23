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
    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    })

    response.status(201).send(posts[id])
})

// Event received - update about receiving an event from the event bus.
app.post("/events", (request, response) => {
    console.log('Received event', request.body.type)
    response.send({})
})

// running the post micro service instance on port 4000
app.listen(4000, () => {
    console.log("v0.0.2")
    console.log("Listening on port 4000")
})
