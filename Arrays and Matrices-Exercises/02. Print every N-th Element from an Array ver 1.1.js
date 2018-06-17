function everyNtElementArray(input) {
    let ntStep = Number(input.pop());

    for (let i = 0; i < input.length; i += ntStep) {
        console.log(input[i]);
    }
}

everyNtElementArray([5, 20, 31, 4, 20, 2]);