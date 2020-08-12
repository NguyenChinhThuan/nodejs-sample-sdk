const Logger = require('./src/utils/logger')

// connect mongodb
Logger.debug('[Server] : connect mongodb')
require('./src/config/mongodb')

/**
 * Create HTTP server.
 */

Logger.debug('[Server] : new instance app')
require('./src/app')
