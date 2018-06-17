function squareStar(n) {
    function printStars(count = n) {
        console.log("*" + " *".repeat(count - 1));
    }

    for (let i = 0; i < n; i++) {
        printStars();
    }

}

squareStar(5);