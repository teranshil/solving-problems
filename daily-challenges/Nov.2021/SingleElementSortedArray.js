const singleNonDuplicate = function(nums) {

    let low = 0, high = nums.length - 1;

    while(low < high) {
        const middle = Math.floor((low + high) / 2)
        if( (middle % 2 === 1) && nums[middle - 1] === nums[middle]) low = middle + 1;
        else if( (middle % 2 === 0) && nums[middle] === nums[middle + 1]) low = middle + 1;
        else high = middle;
    }

    return nums[low];
};

console.log( singleNonDuplicate([1,1,2,3,3,4,4,8,8]) );
console.log( singleNonDuplicate([3,3,7,7,10,11,11]) );
