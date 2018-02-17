console.log("asako world");
var logger = require('./helpers/logger').createLogger('logs/development.log'); // logs to a file
logger.info('loading an array', [1,2,3], 'now!');