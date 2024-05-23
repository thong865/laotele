const { useMobileOrPhoneCode } = require('../utils')
export { }
declare global {
    interface String {
        countryCode(): string
    }
    interface Object {
        extractPhone(): object
    }
}
interface Options {
    internal: boolean,
    zerostart: boolean
}

interface ValideExtractPhone {
    code: string,
    incode: string,
    dial: string
}

const countryPhone = {
    laos: 856
}
String.prototype.countryCode = function (options?: Options): string {
    if (options?.internal) {
        return this.length > 0 ? useMobileOrPhoneCode(this).substr(options?.zerostart ? 0 : 1, useMobileOrPhoneCode(this).length) : '';
    }
    return this.length > 0 ? countryPhone.laos.toString().concat(useMobileOrPhoneCode(this).substr(1, useMobileOrPhoneCode(this).length)) : '';
}

Object.prototype.extractPhone = function (options?: Options): object {
    let ccode = countryPhone.laos.toString().concat(useMobileOrPhoneCode(this).substr(1, 2))
    let inc = useMobileOrPhoneCode(this).substr(options?.zerostart ? 0 : 1, options?.zerostart ? 3 : 2)
    let d = useMobileOrPhoneCode(this).substr(3, useMobileOrPhoneCode(this).length)
    return { code: ccode, incode: inc, dial: d }
}