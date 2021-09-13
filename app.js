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

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app