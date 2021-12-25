// const maxProduct = function(nums, start = 0) {
//
//     let max = Number.MIN_SAFE_INTEGER;
//     if(start > nums.length) return 1;
//
//     for (let index = start; index < nums.length; index++) {
//         const previous = maxProduct(nums,index + 1);
//
//         max = Math.max(max, previous, nums[index]);
//     }
//
//     return max;
// };

// console.log(maxProduct([2,-5,-2,-4,3]));

const maxProduct = function (nums, start = 0) {

    if(start >= nums.length - 1) return nums[start];

    let max = null;
    for (let index = start; index < nums.length - 1; index++) {

       let product = maxProduct(nums, index + 1) * nums[index];
       max = max === null ? Math.max(nums[index], product)
                          : Math.max(nums[index], product, max);
    }

    return max;
}

Math.max.apply()

console.log(maxProduct([2,-5,-2,-4,3]));
