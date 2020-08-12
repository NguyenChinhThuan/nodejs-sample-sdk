const express = require('express')
const http = require('http')
const cookieParser = require('cookie-parser')
const Logger = require('./utils/logger')
const CONFIG = require('./config/index').DEFAULT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// init allow origin
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type')
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Content-Type', 'application/json')

  next()
})

// routers
Logger.debug('[app.js] : init routers')
require('./routers/index')(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const { APIResponseNotfound } = require('./utils/resp-utils')
  res.json(APIResponseNotfound('not found api'))
})

app.use((req, res, next) => {
  req.headers.lang = req.headers.lang || 'en'
  next()
})

// get config

// name - port
const port = CONFIG.PORT
const nameService = CONFIG.SERVICE_NAME

const server = http.createServer(app)
server.listen(port, (error) => {
  if (error) {
    Logger.debug('[app.js]: Cannot start backend services:')
    Logger.error(error)
  } else {
    if (process.env.NODE_ENV !== 'prd') {
      Logger.debug('[app.js]: Server running DEV_ENV.')
    } else {
      Logger.debug('[app.js]: Server running PRODUCTION.')
    }
    Logger.debug(`[app.js] ${nameService} is running on port: ${port}`)
  }
})

module.exports = app
