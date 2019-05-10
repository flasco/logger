const color = require('colors-cli');

module.exports = {
  info: color.blue('info'),
  success: color.green('success'),
  warn: color.yellow_bt('warn'),
  error: color.red_bt('error')
};
