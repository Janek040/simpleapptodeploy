const app = require('express')()
require('express-ws')(app)

app.get("/", (req, res) => {
    res.send("Hello World, I'm deployed")
})

app.ws('/echo', (ws, req) => {
    ws.on('message', (msg) => {
        ws.send(msg)
    })
})

app.listen(3000)