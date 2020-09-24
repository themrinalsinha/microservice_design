const axios      = require("axios")
const express    = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

const events = []

app.post("/events", (request, response) => {
    const event = request.body
    events.push(event)

    axios.post('http://posts-service:4000/events', event)
    axios.post('http://comments-service:4001/events', event)
    axios.post('http://query-service:4002/events', event)
    axios.post('http://moderation-service:4003/events', event)

    response.send({status: 'OK'})
})

app.get("/events", (request, response) => {
    response.send(events)
})

app.listen(4005, () => {
    console.log("Listening on port 4005")
})
