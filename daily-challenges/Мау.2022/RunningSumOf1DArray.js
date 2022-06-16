const runningSum = function(nums) {
    for (let index = 1; index < nums.length; index++) {
        nums[index] += nums[index - 1];
    }

    return nums;
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([3,1,2,10,1]));
