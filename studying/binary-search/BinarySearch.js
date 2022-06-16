const search = function(nums, target) {

    const helper = (low, high) => {
        if(low > high) return -1;

        const middle = Math.floor((low + high) / 2);

        if(nums[middle] === target) return middle;
        return target > nums[middle] ? helper(middle + 1, high) : helper(low, middle - 1);
    }

    return helper(0, nums.length - 1);
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 12));
