require('dotenv').config()

const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI
const TMDB_KEY = process.env.TMDB_KEY || '91e4e06b1420960f3271a94241456a7f'
const TMDB_IMG_URL = process.env.TMDB_IMG_URL || 'https://image.tmdb.org/t/p/w500'
const TMDB_BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3'

module.exports = {
  MONGODB_URI,
  PORT,
  TMDB_KEY,
  TMDB_IMG_URL,
  TMDB_BASE_URL
}