const climbStairsBruteForce = function(sum) {

    const steps = [ 1, 2 ];
    let distinctWays = 0;
    const helper= (sum) => {

        if( sum === 0 ) {
            return distinctWays += 1;
        }

        if(sum < 0) {
            return false;
        }

        for (let index = 0; index < steps.length; index++) {
            helper(sum - steps[index])
        }

    }

    helper(sum)
    return distinctWays;
};
// console.log(climbStairsBruteForce(44));

const climbStairs = function( stair, memo = [ 1, 1 ]) {

    if(stair === 0) return memo[0];

    [ memo[0], memo[1] ] = [ memo[1], memo[0] ];
    memo[1] = memo.reduce( (acc, e) => acc + e);

    return climbStairs(stair -1, memo);
}

console.log(climbStairs(3));