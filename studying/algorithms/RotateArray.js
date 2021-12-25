// const rotate = function(nums = [], times) {
//
//     times = times % nums.length;
//     nums.unshift( ...nums.splice(nums.length - times) );
// };

/** efficient way with only one iteration over elements **/
const rotate = function(nums, times) {
    let startIndex = nums.length - times % nums.length;
    let arr = [...nums];
    for(let index = 0; index < nums.length; index++) {
        if(startIndex === nums.length) startIndex = 0;

        nums[index ] = arr[startIndex];
        startIndex++;
    }

    return nums;
};

console.log( rotate([1, 2, 3, 4, 5, 6, 7 ], 3) );