const tribonacci = function(number, memo = [ 0, 1, 1 ]) {
    if(number < 2) return memo[number];
    if(number === 2) return memo[memo.length - 1];

    const next = memo.reduce((acc, e) => acc + e);
    memo.push(next);
    memo.shift();

    return tribonacci(number - 1, memo);
};

console.log( tribonacci(25) );