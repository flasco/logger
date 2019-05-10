const Logger = require('../src');

describe('测试Logger', () => {
  test('success', () => {
    Logger.success('wa,o', 123);
    Logger.time.success('time', 'qwe');
  });

  test('warn', () => {
    Logger.warn('wa,o', 123);
    Logger.time.warn('wa,o', 123);
  });

  test('info', () => {
    Logger.info('wa,o', 123);
    Logger.time.info('wa,o', 123);
  });

  test('error', () => {
    Logger.error('wa,o', 123);
    Logger.time.error('wa,o', 123);
  });
});
