"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { useMobileOrPhoneCode } = require('../utils');
const countryPhone = {
    laos: 856
};
String.prototype.countryCode = function (options) {
    if (options === null || options === void 0 ? void 0 : options.internal) {
        return this.length > 0 ? useMobileOrPhoneCode(this).substr((options === null || options === void 0 ? void 0 : options.zerostart) ? 0 : 1, useMobileOrPhoneCode(this).length) : '';
    }
    return this.length > 0 ? countryPhone.laos.toString().concat(useMobileOrPhoneCode(this).substr(1, useMobileOrPhoneCode(this).length)) : '';
};
Object.prototype.extractPhone = function (options) {
    let ccode = countryPhone.laos.toString().concat(useMobileOrPhoneCode(this).substr(1, 2));
    let inc = useMobileOrPhoneCode(this).substr((options === null || options === void 0 ? void 0 : options.zerostart) ? 0 : 1, (options === null || options === void 0 ? void 0 : options.zerostart) ? 3 : 2);
    let d = useMobileOrPhoneCode(this).substr(3, useMobileOrPhoneCode(this).length);
    return { code: ccode, incode: inc, dial: d };
};
//# sourceMappingURL=ccode.js.map