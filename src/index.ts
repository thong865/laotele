import laotelvalidate from './validator'
const teleValidate = new laotelvalidate();
function laotele(n?: any) {
    if (n === null || n === undefined) {
        return undefined;
    }
    if (teleValidate.numberFormat(n) && teleValidate.isTelnumberFormat(n)) {
        return n;
    }
    // split path: "param[3].test" => ["param", 3, "test"]
    // const parts = splitPath(path);

    // return parts.reduce((acc, el) => {
    //     if (acc === undefined) {
    //         if (shouldThrow) {
    //             throw new Error(`Could not dig the value using path: ${path}`);
    //         } else {
    //             return undefined;
    //         }
    //     }

    //     if (isNum(el)) {
    //         // array getter [3]
    //         const arrIndex = parseInt(el);
    //         if (acc instanceof Set) {
    //             return Array.from(acc)[arrIndex];
    //         } else {
    //             return acc[arrIndex];
    //         }
    //     } else {
    //         // object getter
    //         if (acc instanceof Map) {
    //             return acc.get(el);
    //         } else {
    //             return acc[el];
    //         }
    //     }
    // }, n);
}


export default laotele;