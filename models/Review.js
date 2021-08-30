const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    author: String,
    content: String,
    date: Date,
    movieId: Number
})

reviewSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Review', reviewSchema);