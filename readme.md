# @flasco/logger

一个 log 输出的工具

## example

```js 
const Logger = reuqire('@flasco/logger');

Logger.info('1230', 123); // 不带时间戳
Logger.time.info('213', 'asd'); // 带时间戳

// 除此之外还有 warn，success，error
// 本项目有ts定义文件，食用愉快~
```