function solve(input) {
    let sum = 0;
    let len = input.length;
    for (let i = 0; i < len; i++) {
        sum += input[i];

    }

    let total = sum * 1.2;
    let vat = total - sum;
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);

}

solve([1.20, 2.60, 3.50]);

