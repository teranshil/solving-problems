/* brute force way solution */
const coinChange = function(coins, amount) {
    if(amount === 0 || coins.length === 0) return 0;

    let min = Number.MAX_SAFE_INTEGER;
    const backtracking = (sum = 0, count = 0) => {
        if(sum > amount) return null;

        if(sum === amount && min > count) min = count;
        if(sum === amount) return count;

        for (let index = 0; index < coins.length; index++) {
            backtracking(sum + coins[index], count + 1);
        }
    }

    backtracking();
    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};

// console.log(coinChange([1,2], 5));
// console.log(coinChange([1,2,5], 11));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));

/* dynamic programming solution */
const coinChangeDynamic = function(coins, amount) {
    if(amount === 0 || coins.length === 0) return 0;

    const cache = Array.from({ length: amount + 1 }, () => Number.MAX_SAFE_INTEGER);
    cache[0] = 0;

    for (let index = 1; index < cache.length; index++) {
        for (const coin of coins) {
            if(index - coin >= 0 && cache[index - coin] !== Number.MAX_SAFE_INTEGER) {
                cache[index] = Math.min(cache[index], cache[index - coin] + 1);
            }
        }
    }

    return cache[amount] === Number.MAX_SAFE_INTEGER ? -1 : cache[amount];
};

console.log(coinChangeDynamic([1,2], 5));
console.log(coinChangeDynamic([1,2,5], 11));
console.log(coinChangeDynamic([2], 3));
console.log(coinChangeDynamic([1], 0));

