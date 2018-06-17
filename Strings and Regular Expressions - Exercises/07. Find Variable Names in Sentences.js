function findNamesSentences(string) {
    let names = [];
    let regex = /\b_([a-zA-Z0-9]+)\b/g;

    let match = regex.exec(string);

    while (match) {
        names.push(match[1]);
        match = regex.exec(string)
    }
    console.log(names.join(','));
}

findNamesSentences('The _id and _age variables are both integers.');