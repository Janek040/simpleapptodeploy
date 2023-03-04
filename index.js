const app = require('express')()
const express = require('express')
require('express-ws')(app)


const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}



const port = process.env.PORT || 8080
app.use(express.static('views'))
app.set('view engine', 'ejs')
app.get("/", (req, res) => {
    const day = dayOfTheWeek()
    res.render('index', { day: day })
})

app.ws('/echo', (ws, req) => {
    ws.on('message', (msg) => {
        ws.send(msg)
    })
})

app.listen(port)
module.exports.dayOfTheWeek = dayOfTheWeek;