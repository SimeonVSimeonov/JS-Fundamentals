function population(array) {
    let map = new Map();
    for (let str of array) {
        let [town, population] = str.split(/\s*<->\s*/);
        if (!map.has(town)) {
            map.set(town, 0)
        }
        map.set(town, map.get(town) + +population)
    }
    for (let [key, value] of map) {
        console.log(`${key} : ${value}`);
    }
}

population([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
    "Sofia <-> 10"]);