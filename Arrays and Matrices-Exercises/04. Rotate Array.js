function rotateArray(input) {
    let rotation = Number(input.pop());
    rotation %= input.length;

    for (let i = 0; i < rotation; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}

rotateArray([1, 2, 3, 4, 15]);