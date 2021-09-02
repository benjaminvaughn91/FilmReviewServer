require('dotenv').config()

const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI
const TMDB_KEY = process.env.TMDB_KEY
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMG_URL = 'https://image.tmdb.org/t/p/w500'

module.exports = {
  MONGODB_URI,
  PORT,
  TMDB_KEY,
  TMDB_IMG_URL,
  TMDB_BASE_URL
}