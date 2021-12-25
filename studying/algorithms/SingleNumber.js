const singleNumber = function(nums) {
    if(nums.length === 1) return nums[0];

    nums = nums.sort( (a, b) => a - b );
    for (let index = 0; index < nums.length; index+= 2) {
        if(nums[index] !== nums[index + 1]) return nums[index];
    }
};

const singleNumberSecond = (nums, number) => {
    for(let num of nums){
        number ^= num;
    }
    return number;
}

console.log( singleNumberSecond([1, 1, 7, 6] ));