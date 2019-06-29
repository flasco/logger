declare class Logger {
    private _needTime;
    time: Logger | undefined;
    constructor(needTime?: boolean);
    private log;
    success(...args: any[]): void;
    warn(...args: any[]): void;
    info(...args: any[]): void;
    error(...args: any[]): void;
}
declare const logger: Logger;
export = logger;
