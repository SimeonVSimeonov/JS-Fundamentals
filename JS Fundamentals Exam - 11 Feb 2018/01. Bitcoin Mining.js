function solve(input) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let totalCoins = 0;
    let sumLeva = 0;
    let firstBuy = 0;
    let k = 0;

    for (let day = 1; day <= input.length; day++) {
        let currentMoney = Number(input[day - 1]) * goldPrice;

        if (currentMoney >= bitcoinPrice && k === 0) {
            firstBuy = day;
            k++;
        }

        if (day % 3 === 0) {
            currentMoney *= 0.7;
        }

        sumLeva += currentMoney;

        if (sumLeva > bitcoinPrice) {
            let countBitcoin = sumLeva / bitcoinPrice;
            sumLeva -= parseInt(countBitcoin) * bitcoinPrice;
            totalCoins += parseInt(countBitcoin);
        }
    }
    console.log(`Bought bitcoins: ${totalCoins}`);

    if (totalCoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBuy}`);
    }

    console.log(`Left money: ${sumLeva.toFixed(2)} lv.`);

}

solve([100, 200, 300]);

solve([50, 100]);

solve([3124.15, 504.212, 2511.124]);