const searchInsert = function(nums, target) {

    let expectedIndex = 0;
    const solve = (low, high) => {

        const middle = Math.floor( (low + high) / 2 );

        if(low > high) return expectedIndex;

        if( nums[middle] === target ) return middle;

        if(nums[middle] > target) expectedIndex = middle;
        else if(nums[middle] < target) expectedIndex = high + 1;

        if( nums[middle] < target ) return solve(middle + 1, high);
        if( nums[middle] > target ) return solve(low, middle - 1);
    }

    const index = solve(0, nums.length - 1);

    return index === 0 ? 0 : index;
};

console.log( searchInsert([1,3,5,6], 4) );