import colorMap from './constants';
import formatDate from 'date-fns/format';

const getTime = () => formatDate(new Date(), 'HH:mm:ss');

class Logger {
  private _needTime: boolean;
  constructor(needTime = false) {
    this._needTime = needTime;
  }

  private log(...args: any[]) {
    if (this._needTime) args.unshift(getTime());
    console.log(...args);
  }

  /**
   * 输出成功日志
   * @param args 日志参数
   */
  success(...args: any[]) {
    this.log(colorMap.success, ...args);
  }

  /**
   * 输出警告日志
   * @param args 日志参数
   */
  warn(...args: any[]) {
    this.log(colorMap.warn, ...args);
  }

  /**
   * 输出提示日志
   * @param args 日志参数
   */
  info(...args: any[]) {
    this.log(colorMap.info, ...args);
  }

  /**
   * 输出错误日志
   * @param args 日志参数
   */
  error(...args: any[]) {
    this.log(colorMap.error, ...args);
  }
}

interface ILTime {
  time: Logger
}

const logger= <Logger & ILTime> new Logger();
logger.time = new Logger(true);

export = logger;
