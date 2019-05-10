/// <reference types="node" />

declare module '@flasco/logger' {
  class Logger {
    /**
     * 输出警告日志
     * @param args 日志参数
     */
    warn(...args: any[]): void;

    /**
     * 输出提示日志
     * @param args 日志参数
     */
    info(...args: any[]): void;

    /**
     * 输出错误日志
     * @param args 日志参数
     */
    error(...args: any[]): void;

    /**
     * 输出成功日志
     * @param args 日志参数
     */
    success(...args: any[]): void;
  }

  class LoggerWarpper extends Logger {
    /** 带上时间戳 */
    time: Logger;
  }

  export = new LoggerWarpper();
}
