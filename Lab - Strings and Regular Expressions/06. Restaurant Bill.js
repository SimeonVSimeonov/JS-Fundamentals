function restaurantBill(input) {
    let product = input.filter((p, i) => i % 2 === 0).join(', ');
    let sum = input.filter((p, i) => i % 2 === 1).reduce((a, b) => +a + +b);

    console.log(`You purchased ${product} for a total sum of ${sum}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);