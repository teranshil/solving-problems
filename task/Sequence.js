const sequence = (initial, rounds) => {

    const cache = [ initial ];

    const recursion = (number, times = 1) => {

        if(times > rounds) return number;

        cache[times] = number;
        if(times % 3 === 1) recursion(cache[Math.ceil(times / 3)] + 1, times + 1);
        if(times % 3 === 2) recursion((cache[Math.ceil(times / 3)] * 2) + 1, times + 1);
        if(times % 3 === 0) recursion(cache[Math.ceil(times / 3)] + 2, times + 1);
    }

    recursion(initial);
    return cache[rounds];
}

const input = '2 4';
const [ k, number ] = input.split(' ').map(Number);

console.log( sequence(k, number) );


