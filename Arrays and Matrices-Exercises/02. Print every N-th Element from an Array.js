function everyNtElementArray(input) {
    let ntStep = Number(input.pop());
    input.filter((element, index) => index % ntStep == 0).forEach(element => console.log(element));
}

everyNtElementArray([5, 20, 31, 4, 20, 2]);