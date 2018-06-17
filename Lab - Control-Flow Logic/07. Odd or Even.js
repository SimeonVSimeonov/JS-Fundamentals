function oddEven(input) {
    if (input % 2 === 0) {
        console.log(("even"));
    } else if (input % 1 === 0) {
        console.log(("odd"));
    } else {
        console.log(("invalid"));
    }
}

oddEven(5);
oddEven(8);
oddEven(1.3);