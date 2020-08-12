const Info = require('./info.route')
const Logger = require('../utils/logger')

module.exports = (app) => {
  Logger.debug('[routers]: init routers ... ')
  app.use('/', Info)

  Logger.debug('[routers]: init routers success ')
}
