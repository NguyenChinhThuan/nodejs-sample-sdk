const Info = require('./info.route')

module.exports = (app) => {
  app.use('/', Info)
}
