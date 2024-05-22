import { isRegInputNumber, isNumber } from "./helper/regx";

class laoTelValidate {
    constructor(public n?: string) { }

    numberFormat(n: string): boolean {
        if (!isNumber.test(n)) {
            throw new Error(`${n} is include alpha`)
        }
        return isNumber.test(n)
    }
    isTelnumberFormat(n: string): boolean {
        if (!isRegInputNumber.test(n)) {
            throw new Error(`${n} is not lao telephone`)
        }
        return isRegInputNumber.test(n)
    }
    mobileNumberFormat(n: string): boolean {
        if (!isRegInputNumber.test(n)) {
            throw new Error(`${n} is not lao telephone`)
        }
        return isRegInputNumber.test(n)
    }
}
export default laoTelValidate