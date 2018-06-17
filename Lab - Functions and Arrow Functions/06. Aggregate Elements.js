function aggregate(input) {
    let sum = 0;
    for (let num of input) {
        sum += num;
    }
    console.log(sum);

    let inverse = 0;
    for (let num of input) {
        inverse += 1 / num;
    }
    console.log(inverse);

    let concat = "";
    for (let num of input) {
        concat += `${num}`;
    }
    console.log(concat);

}

aggregate([1, 2, 3]);
aggregate([10, 20, 30]);