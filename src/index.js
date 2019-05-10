const colorMap = require('./constants');
const formatDate = require('date-fns/format');

const getTime = () => formatDate(new Date(), 'HH:mm:ss');

class Logger {
  constructor(needTime = false) {
    this._needTime = needTime;
  }

  log(...args) {
    if (this._needTime) args.unshift(getTime());
    console.log(...args);
  }

  success(...args) {
    this.log(colorMap.success, ...args);
  }

  warn(...args) {
    this.log(colorMap.warn, ...args);
  }

  info(...args) {
    this.log(colorMap.info, ...args);
  }

  error(...args) {
    this.log(colorMap.error, ...args);
  }
}

const logger = new Logger();
logger.time = new Logger(true);

module.exports = logger;