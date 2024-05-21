import { isRegInputNumber, isNumber } from "./configs";
class laoTelValidate {
    constructor(public n?: string) { }

    numberFormat(n: string): boolean {
        if (isNumber.test(n)) {
            return isNumber.test(n)
        } else {
            throw new Error(`${n} is include alpha`)
        }
    }
    isTelnumberFormat(n: string): string {
        if (!isRegInputNumber.test(n)) {
            throw new Error(`${n} is not lao telephone`)
        }
        return n
    }
    isMobileNumberFormat(n: string) {
        if (isRegInputNumber.test(n)) {
            return isRegInputNumber.test(n)
        } else {
            throw new Error(`${n} is not lao telephone`)
        }
    }
}


export default laoTelValidate