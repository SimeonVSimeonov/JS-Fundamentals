function cityMarkets(array) {
    let map = new Map();
    for (let value of array) {
        let [town, product, quantity, price] = value.split(/ -> | : /);
        if (!map.has(town)) {
            map.set(town, new Map());
        }
        map.get(town).set(product, +quantity * +price)
    }

    for (let [key, value] of map) {
        console.log(`Town - ${key}`);
        for (let [k, v] of value) {
            console.log(`$$$${k} : ${v}`);
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);