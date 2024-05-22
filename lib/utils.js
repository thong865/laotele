"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMobileOrPhoneCode = void 0;
const regx_1 = require("./helper/regx");
function useMobileOrPhoneCode(n) {
    if (regx_1.isRegMobileNumber.test(n || '')) {
        return '020' + (n === null || n === void 0 ? void 0 : n.substr((n === null || n === void 0 ? void 0 : n.length) - 8, 8));
    }
    if (regx_1.isRegPoneNumber.test(n || '')) {
        return '030' + (n === null || n === void 0 ? void 0 : n.substr((n === null || n === void 0 ? void 0 : n.length) - 7, 7));
    }
    return n || '';
}
exports.useMobileOrPhoneCode = useMobileOrPhoneCode;
//# sourceMappingURL=utils.js.map