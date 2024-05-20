"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("./validator"));
const teleValidate = new validator_1.default();
function laotele(n) {
    if (n === null || n === undefined || n.trim() === '') {
        return undefined;
    }
    if (teleValidate.numberFormat(n) && teleValidate.isTelnumberFormat(n)) {
        return n;
    }
}
exports.default = laotele;
//# sourceMappingURL=index.js.map