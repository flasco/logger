"use strict";
const tslib_1 = require("tslib");
const colors_cli_1 = tslib_1.__importDefault(require("colors-cli"));
module.exports = {
    info: colors_cli_1.default.blue('info'),
    success: colors_cli_1.default.green('success'),
    warn: colors_cli_1.default.yellow_bt('warn'),
    error: colors_cli_1.default.red_bt('error')
};
//# sourceMappingURL=index.js.map