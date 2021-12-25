/** bruteforce way of solution, not optimized
 * link https://leetcode.com/problems/target-sum/
**/
const findTargetSumWays = function(nums, target) {
    let uniqueWays = 0;
    const backtracking = (start = 0, sum = 0, count = 0) => {
        if(sum === target && count === nums.length) return uniqueWays += 1;

        for (let index = start; index < nums.length; index++) {
            backtracking(index + 1, sum - nums[index], count + 1);
            backtracking(index + 1, sum + nums[index], count + 1);

            while(index > 0 && nums[index - 1] === nums[index]) index++;
        }
    }

    backtracking();
    return uniqueWays;
};

console.log( findTargetSumWays([1], 1) );
console.log( findTargetSumWays([1, 0], 1) );
console.log( findTargetSumWays([1, 1, 1, 1, 1], 3) );


const findTargetSumWaysOptimized = function(nums, target) {
    const cache = {};
    const backtracking = (start = 0, sum = 0) => {
        if(start === nums.length) return target === sum ? 1 : 0;
        if((start + ',' + sum) in cache) return cache[(start + ',' + sum)];

        cache[(start + ',' + sum)] = backtracking(start + 1, sum + nums[start]) +
                       backtracking(start + 1, sum - nums[start])

        return cache[(start + ',' + sum)];
    }

    return backtracking();
}

console.log( findTargetSumWaysOptimized([1], 1) );
console.log( findTargetSumWaysOptimized([1, 0], 1) );
console.log( findTargetSumWaysOptimized([1, 1, 1, 1, 1], 3) );

