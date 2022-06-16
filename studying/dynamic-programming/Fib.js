const fib = (end, current = 0, previous = 0) => {
    if(end <= 0) return current;

    return fib(end - 1, (current + previous) || 1, current);
}
console.log( fib( 50));
console.log( fib( 1));
console.log( fib( 0));

// dynamic programming solution

const cache = [ 0, 1 ];
const fibonacci = (num) => {
    if(cache[num] !== undefined) return cache[num];
    if(num <= 2) return 1;

    cache[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return cache[num];
}

console.log( fibonacci( 50));
console.log( fibonacci( 1));
console.log( fibonacci( 0));
