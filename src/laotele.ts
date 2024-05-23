import './helper/ccode'
import laotelvalidate from "./validator";
const teleValidate = new laotelvalidate();
function laotele(n?: any) {
    if (n === null || n === undefined || n.trim() === '') {
        return undefined;
    }
    if (teleValidate.numberFormat(n.trim()) && teleValidate.isTelnumberFormat(n.trim())) {
        return n.trim();
    }
}
export {
    laotele
}