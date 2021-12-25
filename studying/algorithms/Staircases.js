
const climbStairs = (numbers) => {

    const dp = [];
    dp[0] = 1;
    dp[1] = 1;

    for (let index = 2; index <= numbers; index++) {
        dp[index] = dp[index - 1] + dp[index - 2];
    }

    return dp[numbers];
}

console.log( climbStairs(42) );

const climbStairsSecondWay = (numbers) => {

    const dp = [];
    dp[0] = 1;
    dp[1] = 1;

    for (let index = numbers - 1; index > 0; index--) {
        const first = dp[0];
        dp[0] = dp[0] + dp[1];
        dp[1] = first;
    }

    return dp[0];
}

console.log( climbStairsSecondWay(42) );