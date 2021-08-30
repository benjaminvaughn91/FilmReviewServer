const mongoose = require('mongoose')
const config = require('./config')

function connect(){
    mongoUrl = config.MONGODB_URI
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, 
        useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('connected to MongoDB')})  
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)})
}

module.exports = connect