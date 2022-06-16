const missingNumber = function(nums = []) {
    const uniques = new Set(nums);

    for (let index = 0; index <= nums.length; index++) {
        if(!uniques.has(index)) return index;
    }
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));
