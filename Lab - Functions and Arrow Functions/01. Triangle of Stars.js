function triangleOfStars(num) {
    for (let i = 1; i <= num; i++) {
        console.log("*".repeat(i));
    }
    for (var i = num - 1; i >= 1; i--) {
        console.log("*".repeat(i));
    }
}

triangleOfStars(5);