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
//# sourceMappingURL=ccode.js.map