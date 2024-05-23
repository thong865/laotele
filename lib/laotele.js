"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.laotele = void 0;
require("./helper/ccode");
const validator_1 = __importDefault(require("./validator"));
const teleValidate = new validator_1.default();
function laotele(n) {
    if (n === null || n === undefined || n.trim() === '') {
        return undefined;
    }
    if (teleValidate.numberFormat(n.trim()) && teleValidate.isTelnumberFormat(n.trim())) {
        return n.trim();
    }
}
exports.laotele = laotele;
//# sourceMappingURL=laotele.js.map