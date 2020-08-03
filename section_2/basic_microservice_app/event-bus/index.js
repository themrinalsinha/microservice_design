const axios      = require("axios")
const express    = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

app.post("/events", (request, response) => {
    const event = request.body

    axios.post('http://localhost:4000/events', event)
})