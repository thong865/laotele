import { isRegMobileNumber, isRegPoneNumber } from "./helper/regx"

function useMobileOrPhoneCode(n?: string): string {
    if (isRegMobileNumber.test(n || '')) {
        return '020' + n?.substr(n?.length - 8, 8)
    }
    if (isRegPoneNumber.test(n || '')) {
        return '030' + n?.substr(n?.length - 7, 7)
    }
    return n || ''
}

export {
    useMobileOrPhoneCode
}
