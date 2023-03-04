const app = require('express')()
const express = require('express')
require('express-ws')(app)

const port = process.env.PORT || 8080
app.use(express.static('views'))
app.set('view engine', 'ejs')
app.get("/", (req, res) => {
    res.render('index')
})

app.ws('/echo', (ws, req) => {
    ws.on('message', (msg) => {
        ws.send(msg)
    })
})

app.listen(port)