const axios = require('axios');
const listRouter = require('express').Router()
const config = require('../config')

const axiosInstance = axios.create({
    baseURL: config.TMDB_BASE_URL,
    headers: { 'Content-Type' : 'application/json;charset=utf-8'}
})

const api_key = config.TMDB_KEY
const poster_base_url = config.TMDB_IMG_URL

listRouter.get('/sorted', async(req, res, next) => {
    try {        
        const response = await axiosInstance.get(`/discover/movie?api_key=${api_key}&sort_by=${req.query.sort_by}`)
        let movies = []
        response.data.results.forEach(movie => {
            movies.push({
                id: movie.id,
                original_title: movie.original_title,
                poster_path: poster_base_url + movie.poster_path
            })
        })
        res.send(movies)
    } catch (error) {
        res.status(400).send('Sorted list request failed')
    }
})          

listRouter.get('/year', async(req, res, next) => {
    try {        
        const response = await axiosInstance.get(`/discover/movie?api_key=${api_key}&primary_release_year=${req.query.year}`)
        let movies = []
        response.data.results.forEach(movie => {
            movies.push({
                id: movie.id,
                original_title: movie.original_title,
                poster_path: poster_base_url + movie.poster_path
            })
        })
        res.send(movies)
    } catch (error) {
        res.status(400).send('Year list request failed')
    }
})   

module.exports = listRouter