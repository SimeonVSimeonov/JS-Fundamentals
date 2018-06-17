function calculator(a, b, operand) {
    switch (operand) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "error"
    }
}

console.log(calculator(4, 2, '+'));
console.log(calculator(4, 2, '/'));