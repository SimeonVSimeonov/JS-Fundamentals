function matchAllWords(text) {
    let word = text.match(/\w+/g);
    return word.join('|')
}

console.log(matchAllWords('_(Underscores) are also word characters'));