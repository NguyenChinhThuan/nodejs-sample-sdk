// Bring Mongoose into the app
const mongoose = require('mongoose')
const Logger = require('../utils/logger')

// Build the connection string
const { MONGO_URL } = require('./index').DEFAULT

Logger.debug(`[MongoDB]: echo MONGO_URL : ${MONGO_URL}`)
// Create the database connection
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
  Logger.debug(`[MongoDB]: Mongoose default connection open to ${MONGO_URL}`)
})

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  Logger.debug(`[MongoDB]: Mongoose default connection error: ${err}`)
})

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  Logger.debug('[MongoDB]: Mongoose default connection disconnected')
})

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    Logger.debug('[MongoDB]: Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})
