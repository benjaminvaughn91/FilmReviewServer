const axios = require('axios');
const movieRouter = require('express').Router()
const config = require('../config')

const axiosInstance = axios.create({
    baseURL: config.TMDB_BASE_URL,
    headers: {'Content-Type' : 'application/json;charset=utf-8'}
});

const api_key = config.TMDB_KEY
const poster_base_url = config.TMDB_IMG_URL

movieRouter.get('/:id', async(req, res, next) => {
    try {
        const response = await axiosInstance.get(`/movie/${req.params.id}?api_key=${api_key}`)
        const movie = response.data
        res.json({
            'title': movie.title,
            'release_date': movie.release_date,
            'tagline': movie.tagline,
            'overview': movie.overview,
            'poster_base': poster_base_url,
            'poster_path': movie.poster_path
        })
    } catch (error) {
        res.status(400).send('Film request failed')
    }
})

movieRouter.get('/:id/credits', async(req, res, next) => {
    try {
        const response = await axiosInstance.get(`/movie/${req.params.id}/credits?api_key=${api_key}`)
        res.json(response.data)
    } catch (error) {
        res.status(400).send('Credits request failed')
    }
})
 
module.exports = movieRouter