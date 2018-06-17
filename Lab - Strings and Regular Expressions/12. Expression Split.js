function expressionSplit(expression) {
    console.log(expression.split(/[\s.();,]+/).join('\n'))
}

expressionSplit('let sum = 4 * 4,b = "wow";');