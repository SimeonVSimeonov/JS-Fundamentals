function lastKNumSeq(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let sum = seq.slice(start, current).reduce((a, b) => a + b);
        seq.push(sum);
    }
    console.log(seq.join(' '));
}

lastKNumSeq(8, 2);