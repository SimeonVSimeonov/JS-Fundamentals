function wordUpper(input) {
    let inputToUpper = input.toLocaleUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');

    function extractWords() {
        return inputToUpper.split(/\W+/);
    }

}

console.log(wordUpper('Hi, ho   w are y       ou?'));