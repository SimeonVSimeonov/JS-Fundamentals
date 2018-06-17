function uniqueSenquences(arrayInput) {
    let result = [];
    for (let i = 0; i < arrayInput.length; i++) {
        let currentRow = JSON.parse(arrayInput[i])
            .map(Number)
            .sort((a, b) => b - a);

        let currentSum = currentRow.reduce((a, b) => a + b);

        if (!result.find(array => array.reduce((a, b) => a + b) === currentSum)) {
            result.push(currentRow)
        }
    }
    result.sort((a, b) => a.length - b.length).forEach(arr => console.log(`[${arr.join(', ')}]`));
}

uniqueSenquences(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);