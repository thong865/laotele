"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laoTelValidate = exports.isMobileNumber = void 0;
const configs_1 = require("./configs");
const isMobileNumber = (n) => {
    return configs_1.isNumber.test(n);
};
exports.isMobileNumber = isMobileNumber;
const laoTelValidate = (v) => {
    let result;
    isMobileNumber(v) ? result = v : console.log(`${v} is contain Aphal`);
    return result;
};
exports.laoTelValidate = laoTelValidate;
//# sourceMappingURL=validator.js.map