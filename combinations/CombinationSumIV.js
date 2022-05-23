const combinationSum4 = function(nums, target) {
    let count = 0;

    const backtracking = (sum = 0, digits = []) => {
        if(sum > target) return null;
        if(sum === target) return count++;

        for (let index = 0; index < nums.length; index++) {
            digits.push(nums[index]);
            backtracking(sum + nums[index], digits);
            digits.pop();
        }
    }

    backtracking();
    return count;
};

console.log(combinationSum4([1, 2, 3], 4));


const dynamic = (nums, target) => {
    const dp = new Map([ [ 0, 1 ] ]);

    for (let index = 1; index < target + 1; index++) {
        dp[index] = 0;
        for (const number of nums) {
            const current = dp.has(index) ? dp.get(index) : 0;
            const previous = dp.has(index - number) ? dp.get(index - number) : 0;

            dp.set(index, current + previous);
        }
    }

    return dp.get(target);
}

console.log(dynamic([1, 2, 3], 4));
