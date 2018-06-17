function splitString(string, delimiter) {
    let splitedElements = string.split(delimiter);
    for (let i = 0; i < splitedElements.length; i++) {
        console.log(splitedElements[i]);
    }
}

splitString('One-Two-Three-Four-Five', '-');