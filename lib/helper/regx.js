"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.isRegPoneNumber = exports.isRegMobileNumber = exports.isRegInputNumber = void 0;
var isRegInputNumber = /^020([25789])(?=\d{7}$)|^20([25789])(?=\d{7}$)|^([25789])(?=\d{6,7}$)|^030([25789])(?=\d{6}$)|^30([25789])(?=\d{6}$)/, isRegMobileNumber = /^(?:020|(?<!\d)20)([25789])\d{7}|(?:^[25789]\d{7})$/, isRegPoneNumber = /^(?:030|(?<!\d)30)([25789])\d{6}|(?:^[25789]\d{6})$/, isNumber = /^[0-9]+$/;
exports.isRegInputNumber = isRegInputNumber;
exports.isRegMobileNumber = isRegMobileNumber;
exports.isRegPoneNumber = isRegPoneNumber;
exports.isNumber = isNumber;
//# sourceMappingURL=regx.js.map