function extractFromArray(input) {
    input = input.map(Number);
    let currBigNum = Number.NEGATIVE_INFINITY;
    let arrSize = input.length;

    for (let i = 0; i < arrSize; i++) {
        let currNum = input.shift();
        if (currNum >= currBigNum) {
            currBigNum = currNum;
            console.log(currNum);
        }
    }
}

//extractFromArray(['20','3','2','15','6','1']);
extractFromArray([1, 3, 2, 15, 10, 12, 3, 2, 24]);