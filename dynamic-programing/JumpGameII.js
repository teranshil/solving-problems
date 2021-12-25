const jump = function(nums = [], current = 0, memo = {}) {

    let min = Number.MAX_SAFE_INTEGER;
    if(current in memo) return memo[current];
    if(current >= nums.length - 1) return 0;


    for (let index = 1; index <= nums[current]; index++) {
        const response = jump(nums, current + index, memo);
        if(response < min) min = response + 1;
    }

    memo[current] = min;
    return min;
};

console.log(jump([2, 3, 0, 1, 4]));