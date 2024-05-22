const { useMobileOrPhoneCode } = require('../utils')
export { }
declare global {
    interface String {
        countryCode(): string
    }
}
interface Options {
    internal: boolean,
    zerostart: boolean
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