const axios = require('axios');
const listRouter = require('express').Router()
const config = require('../config')

const axiosInstance = axios.create({
    baseURL: config.TMDB_BASE_URL,
    headers: { 'Content-Type' : 'application/json;charset=utf-8'}
});

const api_key = config.TMDB_KEY

listRouter.get('/sorted', async(req, res, next) => {
    try {        
        const response = await axiosInstance.get(`/discover/movie?api_key=${api_key}&sort_by=${req.query.sort_by}`)
        res.json(response.data)
    } catch (error) {
        res.status(400).send('List request failed')
    }
})          

listRouter.get('/year', async(req, res, next) => {
    try {        
        const response = await axiosInstance.get(`/discover/movie?api_key=${api_key}&primary_release_year=${req.query.year}`)
        res.json(response.data)
    } catch (error) {
        res.status(400).send('List request failed')
    }
})   

module.exports = listRouter