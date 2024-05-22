import './helper/ccode'
import laotelvalidate from "./validator";
const teleValidate = new laotelvalidate();
interface Options {
    format?: string
}
function laotele(n?: any, options?: Options) {
    if (n === null || n === undefined || n.trim() === '') {
        return undefined;
    }
    if (teleValidate.numberFormat(n) && teleValidate.isTelnumberFormat(n)) {
        return n.trim();
    }
}
export default laotele;
