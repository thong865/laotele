import laotelvalidate from "./validator";
const teleValidate = new laotelvalidate();
function laotele(n?: any) {
  if (n === null || n === undefined || n.trim() === '') {
    return undefined;
  }
  if (teleValidate.numberFormat(n) && teleValidate.isTelnumberFormat(n)) {
    return n;
  }
}

export default laotele;
