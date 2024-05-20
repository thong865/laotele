"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("./configs");
class laoTelValidate {
    constructor(n) {
        this.n = n;
    }
    numberFormat(n) {
        if (configs_1.isNumber.test(n)) {
            return configs_1.isNumber.test(n);
        }
        else {
            throw new Error(`${n} is include alpha`);
        }
    }
    isTelnumberFormat(n) {
        if (configs_1.isRegInputNumber.test(n)) {
            return configs_1.isRegInputNumber.test(n);
        }
        else {
            throw new Error(`${n} is not lao telephone`);
        }
    }
    isMobileNumberFormat(n) {
        if (configs_1.isRegInputNumber.test(n)) {
            return configs_1.isRegInputNumber.test(n);
        }
        else {
            throw new Error(`${n} is not lao telephone`);
        }
    }
}
exports.default = laoTelValidate;
//# sourceMappingURL=validator.js.map