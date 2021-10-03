const axios = require('axios');
const movieRouter = require('express').Router()
const config = require('../config')

const axiosInstance = axios.create({
    baseURL: config.TMDB_BASE_URL,
    headers: {'Content-Type' : 'application/json;charset=utf-8'}
})

const api_key = config.TMDB_KEY
const poster_base_url = config.TMDB_IMG_URL

movieRouter.get('/:id', async(req, res, next) => {
    try {
        const response = await axiosInstance.get(`/movie/${req.params.id}?api_key=${api_key}`)
        const movie = response.data
        res.json({
            'title': movie.title,
            'year': movie.release_date.substr(0,4),
            'tagline': movie.tagline,
            'overview': movie.overview,
            'poster_path': poster_base_url + movie.poster_path
        })
    } catch (error) {
        res.status(400).send('Movie request failed')
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