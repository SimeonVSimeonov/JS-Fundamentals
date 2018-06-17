function countWordsInAText(input) {
    let wordsArr = input[0].split(/\W+/).filter(w => w != "");
    let obj = {};
    for (let word of wordsArr) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 1;
        } else {
            obj[word]++;
        }
    }

    console.log(JSON.stringify(obj));
}

countWordsInAText(['JS devs use Node.js for server-side JS.-- JS for devs']);