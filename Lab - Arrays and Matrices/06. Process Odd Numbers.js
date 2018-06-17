function firstLastElements(array) {
    let result = array
        .filter((num, i) => i % 2 === 1)
        .map(x => 2 * x)
        .reverse();
    return result.join(' ');
}

console.log(firstLastElements([10, 15, 20, 25]));