import express from 'express'
import { json } from 'body-parser'

const app = express()
app.use(json())

app.get('/api/users/current', (req, res) => {
    res.send("Hi there!")
})

app.listen(3000, () => {
    console.log("(Auth app) Listening on port 3000")
})
