const maxSubArray = function(nums) {
    let maxS = nums[0];
    let sum = nums[0];

    for (let index = 1; index < nums.length; index++) {
        /** is it better to start the array from this index or just add it to current sum **/
        sum = Math.max(nums[index], sum + nums[index]);
        maxS = Math.max(maxS, sum)
    }

    return maxS
}
maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);