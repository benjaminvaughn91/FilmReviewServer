const express = require('express')
const app = express()
const cors = require('cors')
const movieRouter = require('./controllers/filmController')
const listRouter = require('./controllers/listController')
const reviewRouter = require('./controllers/reviewController')
const connect = require('./connection.js')

connect()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use('/api/movie', movieRouter)
app.use('/api/list', listRouter)
app.use('/api/review', reviewRouter)

app.get("*", (req, res) => {
    let url = path.join(__dirname, '/build', 'index.html');
    if (!url.startsWith('/app/')) // since we're on local windows
      url = url.substring(1);
    res.sendFile(url);
  });

module.exports = app