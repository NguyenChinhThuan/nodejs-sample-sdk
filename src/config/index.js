require('dotenv').config()

const CONFIG = {}
CONFIG.ENV = process.env.NODE_ENV || 'dev'
CONFIG.SERVICE_NAME = process.env.SERVICE_NAME || 'SampleService'
CONFIG.HOST = process.env.HOST || 'localhost'
CONFIG.PORT = process.env.PORT || '3005'

CONFIG.API_HOST = process.env.URL_HOST || `http://localhost:${CONFIG.SERVER_PORT}`

CONFIG.CORS_OPTIONS = {
  // Find and fill your options here: https://github.com/expressjs/cors#configuration-options
  origin: process.env.SERVER_ORIGIN || '*',
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization,Accept-Language',
}

CONFIG.MONGO_URL = process.env.MONGO_URL

module.exports = {
  DEFAULT: CONFIG,
}
