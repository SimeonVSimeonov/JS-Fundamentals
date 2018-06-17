function multiplication(str) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+\.\d+)/g;
    str = str.replace(regex, (all, gr1, gr2) => +gr1 * +gr2);
    console.log(str);
}

multiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');