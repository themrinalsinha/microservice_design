const axios      = require("axios")
const express    = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

const events = []

app.post("/events", (request, response) => {
    const event = request.body
    events.push(event)

    axios.post('http://posts-service-cluster-ip:4000/events', event)
    // axios.post('http://localhost:4001/events', event)
    // axios.post('http://localhost:4002/events', event)
    // axios.post('http://localhost:4003/events', event)

    response.send({status: 'OK'})
})

app.get("/events", (request, response) => {
    response.send(events)
})

app.listen(4005, () => {
    console.log("Listening on port 4005")
})
