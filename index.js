const config = require('./config')
const app = require('./app')
const http = require('http')

const PORT = config.PORT
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

