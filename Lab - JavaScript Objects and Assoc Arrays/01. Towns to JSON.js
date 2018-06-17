function townsToJSON(array) {
    array.shift();
    for (let i = 0; i < array.length; i++) {
        let values = array[i].split(/\s*\|\s*/)
            .filter(a => a !== '');
        array[i] = {Town: values[0], Latitude: +values[1], Longitude: +values[2]}
    }

    console.log(JSON.stringify(array));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);