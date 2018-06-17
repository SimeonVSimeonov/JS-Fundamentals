function aggregateTable(input) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split('|');
        result.push(tokens[1].trim());
        sum += Number(tokens[2].trim());
    }
    console.log(result.join(', '));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo| 500',
    '| Yambol          | 275']);