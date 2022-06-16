/* backtracking solution - time limit exception */
const maxEnvelopes = function(envelopes = []) {
    let max = 0;
    const cache = Array.from({ length: envelopes.length }, () => 0);
    const backtracking = (current = 0) => {
        if(cache[current] !== 0) return cache[current];

        let local = 1;
        for (let index = 0; index < envelopes.length; index++) {
            if(envelopes[current][0] >= envelopes[index][0] || envelopes[current][1] >= envelopes[index][1]) continue;

            local = Math.max(backtracking(index) + 1, local);
        }

        cache[current] = local;
        return cache[current];
    }

    for (let index = 0; index < envelopes.length; index++) {
        max = Math.max(max,backtracking(index));
    }

    return max;
};

console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]));
console.log(maxEnvelopes([[1,1],[1,1],[1,1]]));

/* sorting envelopes */
const maxEnvelopesSort = function(envelopes = []) {
    envelopes.sort((a, b) => a[0] - b[0]);

    let max = 1;
    const cache = Array.from({ length: envelopes.length }, () => 0);
    cache[0] = 1;

    for (let index = 0; index < envelopes.length; index++) {

    }


}
