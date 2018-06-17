function printTriangle(n) {
    function printStar(count) {
        console.log("*".repeat(count));
    }

    for (let i = 1; i <= n; i++) {
        printStar(i);
    }

    for (let i = n - 1; i >= 1; i--) {
        printStar(i);
    }
}

printTriangle(5);