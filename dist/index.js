"use strict";
const tslib_1 = require("tslib");
const constants_1 = tslib_1.__importDefault(require("./constants"));
const format_1 = tslib_1.__importDefault(require("date-fns/format"));
const getTime = () => format_1.default(new Date(), 'HH:mm:ss');
class Logger {
    constructor(needTime = false) {
        this._needTime = needTime;
    }
    log(...args) {
        if (this._needTime)
            args.unshift(getTime());
        console.log(...args);
    }
    success(...args) {
        this.log(constants_1.default.success, ...args);
    }
    warn(...args) {
        this.log(constants_1.default.warn, ...args);
    }
    info(...args) {
        this.log(constants_1.default.info, ...args);
    }
    error(...args) {
        this.log(constants_1.default.error, ...args);
    }
}
const logger = new Logger();
logger.time = new Logger(true);
module.exports = logger;
//# sourceMappingURL=index.js.map