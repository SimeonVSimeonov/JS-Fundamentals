function solve(str, lett) {
    let count = 0;
    for (let obj of str) {
        if (obj === lett) {
            count++;
        }
    }
    return count;

}

console.log(solve('hello', 'l'));