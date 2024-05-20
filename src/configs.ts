const isRegInputNumber = /^020([25789])(?=\d{7}$)|^20([25789])(?=\d{7}$)|^([25789])(?=\d{6,7}$)|^030([25789])(?=\d{6}$)|^30([25789])(?=\d{6}$)/
const isRegMobileNumber = /^(?:020|(?<!\d)20)([25789])\d{7}|(?:^[25789]\d{7})$/
const isRegPoneNumber = /^(?:030|(?<!\d)30)([25789])\d{6}|(?:^[25789]\d{6})$/
const isNumber = /^[0-9]+$/

export {
    isRegInputNumber,
    isRegMobileNumber,
    isRegPoneNumber,
    isNumber
}