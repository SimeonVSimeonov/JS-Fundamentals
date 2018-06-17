function solve(input) {
    let arrayOfNumbers = [];

    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (typeof current === 'number') {
            arrayOfNumbers.push(current);
        } else {
            if (arrayOfNumbers.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }
            let num2 = arrayOfNumbers.pop();
            let num1 = arrayOfNumbers.pop();
            switch (current) {
                case "+":
                    arrayOfNumbers.push(num1 + num2);
                    break;
                case "-":
                    arrayOfNumbers.push(num1 - num2);
                    break;
                case "*":
                    arrayOfNumbers.push(num1 * num2);
                    break;
                case "/":
                    arrayOfNumbers.push(num1 / num2);
                    break;
            }
        }
    }
    if (arrayOfNumbers.length > 1) {
        console.log("Error: too many operands!");
    } else {
        console.log(arrayOfNumbers[0]);
    }
}

solve([3, 4, '+']);