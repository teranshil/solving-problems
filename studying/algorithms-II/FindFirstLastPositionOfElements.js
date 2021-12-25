const searchRange = function(nums, target, low = 0, high = nums.length -1) {

    if(low > high || nums.length === 0) return [-1, -1];

    const middle = Math.floor((high + low) / 2);

    if(nums[middle] === target) {
        let start = middle, end = middle;
        while(nums[start] === nums[start + 1]) start++;
        while(nums[end] === nums[end - 1]) end--;

        return [end, start];
    }

    if(nums[middle] > target) return searchRange(nums, target, low, middle - 1);
    if(nums[middle] < target) return searchRange(nums, target, middle + 1, high);
};

console.log(searchRange([1, 1], 1));