declare class Logger {
    private _needTime;
    constructor(needTime?: boolean);
    private log;
    success(...args: any[]): void;
    warn(...args: any[]): void;
    info(...args: any[]): void;
    error(...args: any[]): void;
}
interface ILTime {
    time: Logger;
}
declare const logger: Logger & ILTime;
export = logger;
