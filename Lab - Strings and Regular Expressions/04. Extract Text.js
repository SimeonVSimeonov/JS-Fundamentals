function extractText(input) {
    let result = [];
    let start = input.indexOf('(');
    let end = input.indexOf(')', start + 1);

    while (start > -1 && end > -1) {
        result.push(input.substring(start + 1, end));
        start = input.indexOf('(', start + 1);
        end = input.indexOf(')', end + 1);
    }
    console.log(result.join(', '));

}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');