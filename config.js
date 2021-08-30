require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const TMDB_KEY = process.env.TMDB_KEY
const TMDB_IMG_URL = process.env.TMDB_IMG_URL
const TMDB_BASE_URL = process.env.TMDB_BASE_URL

module.exports = {
  MONGODB_URI,
  PORT,
  TMDB_KEY,
  TMDB_IMG_URL,
  TMDB_BASE_URL
}