/** recursive way without dp
 * fib function will be called 2^number times e.g number = 3, then 8 fiv calls
 * O(2^n), O(n) space complexity
 * **/
const fib = function (number) {
    if(number <= 2) return 1;

    return fib(number - 1) + fib(number - 2);
}
// console.log(fib(7));


/** optimized way, using memoization
 * О(n), O(n) space complexity **/
const fibOptimized = function (number, memo = {}) {
    if(number in memo) return memo[number];
    if(number <= 2) return 1;

    memo[number] = fibOptimized(number - 1, memo) + fibOptimized(number - 2, memo);
    return memo[number];
}

// console.log( fibOptimized(7));

const fibIterative = function(number) {

    const tabulation = [ 0, 1 ];

    for (let index = 0; index < number; index++) {
        const sum = tabulation[0] + tabulation[1];
        [ tabulation[0], tabulation[1] ] = [ tabulation[1], tabulation[0] ];
        tabulation[1] = sum;
    }

    return tabulation[number % 2];
}
console.log( fibIterative(0) );
