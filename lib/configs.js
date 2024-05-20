"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.isRegPoneNumber = exports.isRegMobileNumber = exports.isRegInputNumber = void 0;
const isRegInputNumber = /^020([25789])(?=\d{7}$)|^20([25789])(?=\d{7}$)|^([25789])(?=\d{6,7}$)|^030([25789])(?=\d{6}$)|^30([25789])(?=\d{6}$)/;
exports.isRegInputNumber = isRegInputNumber;
const isRegMobileNumber = /^(?:020|(?<!\d)20)([25789])\d{7}|(?:^[25789]\d{7})$/;
exports.isRegMobileNumber = isRegMobileNumber;
const isRegPoneNumber = /^(?:030|(?<!\d)30)([25789])\d{6}|(?:^[25789]\d{6})$/;
exports.isRegPoneNumber = isRegPoneNumber;
const isNumber = /^[0-9]+$/;
exports.isNumber = isNumber;
//# sourceMappingURL=configs.js.map