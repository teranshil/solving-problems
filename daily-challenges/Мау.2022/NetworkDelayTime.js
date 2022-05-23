const networkDelayTime = function(times, connections, first) {
    const queue = [], visited = new Set();
    let total = 0;

    visited.add(first);
    for (let index = 0; index < times.length; index++) {
        if(times[index][0] === first) queue.push(times[index]);
    }

    while (queue.length !== 0) {
        const size = queue.length;
        let longest = Number.MIN_SAFE_INTEGER;

        for (let outer = 0; outer < size; outer++) {
            const [ current, next, time ] = queue.shift();
            if(visited.has(next)) continue;

            visited.add(next);
            longest = Math.max(longest, time);

            for (let inner = 0; inner < times.length; inner++) {
                if(times[inner][0] !== next) continue;

                queue.push(times[inner]);
            }
        }

        if(longest !== Number.MIN_SAFE_INTEGER) total += longest ;
    }

    return connections === visited.size ? total : -1;
};

console.log(networkDelayTime([[1,2,1],[2,3,2],[1,3,4]], 3, 1)); // 3

// console.log(networkDelayTime([[1,2,1],[2,1,3]], 2, 2)); // 3
// console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2)); // 2
// console.log(networkDelayTime([[1,2,1]], 2,1)); // 1
// console.log(networkDelayTime([[1,2,1]], 2, 2)); // -1
