const productExceptSelf = function(nums) {

    const result = [];
    result[0] = 1
    for (let index = 1; index < nums.length; index++) {
        result[index] = nums[index - 1] * result[index - 1];
    }

    let multiplier = 1;
    // console.log(result);
    for (let index = nums.length - 1; index >= 0; index--) {
        result[index] = multiplier * result[index];
        multiplier *= nums[index];
    }

    // console.log( result );
};

productExceptSelf([1,2,3,4]);
