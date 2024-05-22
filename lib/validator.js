"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regx_1 = require("./helper/regx");
class laoTelValidate {
    constructor(n) {
        this.n = n;
    }
    numberFormat(n) {
        if (!regx_1.isNumber.test(n)) {
            throw new Error(`${n} is include alpha`);
        }
        return regx_1.isNumber.test(n);
    }
    isTelnumberFormat(n) {
        if (!regx_1.isRegInputNumber.test(n)) {
            throw new Error(`${n} is not lao telephone`);
        }
        return regx_1.isRegInputNumber.test(n);
    }
    mobileNumberFormat(n) {
        if (!regx_1.isRegInputNumber.test(n)) {
            throw new Error(`${n} is not lao telephone`);
        }
        return regx_1.isRegInputNumber.test(n);
    }
}
exports.default = laoTelValidate;
//# sourceMappingURL=validator.js.map