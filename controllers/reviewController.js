const reviewRouter = require('express').Router()
const Review = require('../models/Review')
    
reviewRouter.get('/', (request, response) => {
    Review.find({}).then(reviews => { 
        response.json(reviews)
      })
})

reviewRouter.get('/:id', (request, response) => {
    Review.findById(request.params.id).then(review => { 
        response.json(review)
    })
})

reviewRouter.post('/', (request, response) => {
    const body = request.body

    if (body.content === undefined || body.author === undefined) {
        return response.status(400).json({ error: 'author or content missing' })
    }
  
    const review = new Review({
      author: body.author,
      content: body.content,
      date: new Date(),
      movieId: body.movieId
    })
  
    review.save().then(savedReview => {
      response.json(savedReview)
    })
  })

module.exports = reviewRouter
