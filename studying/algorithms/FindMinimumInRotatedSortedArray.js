const findMin = function(nums) {


    const search = (low, high) => {
        let middle = Math.floor((low + high) / 2);

        if(low === high) return nums[low];

        if(nums[middle] <= nums[high]) return search(low, middle);
        else if(nums[middle] > nums[high]) return search(middle + 1, high);
    }

    return search(0, nums.length - 1);
};

console.log( findMin([6, 0, 1, 2, 3, 4, 5]) );