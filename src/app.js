const logger = require('pino')()

module.exports = () => {
  logger.info('Hello, world!')
  throw new Error('giraffe')
}
