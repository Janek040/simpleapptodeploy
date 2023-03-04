import express from 'express'
import { dayOfTheWeek } from './app.js'
const app = express()


const port = process.env.PORT || 8080
app.use(express.static('views'))
app.set('view engine', 'ejs')
app.get("/", (req, res) => {
    res.render('index', { day: dayOfTheWeek() })
})

app.listen(port, () => {
    console.log("server is running")
})
