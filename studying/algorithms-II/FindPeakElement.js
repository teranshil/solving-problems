const findPeakElement = function(nums) {
    if(nums.length < 2) return 0;

    const search = (start = 0, end = nums.length - 1) => {

        if(start > end) return -1;
        const middle = Math.floor( (start + end) / 2);

        if( (nums[middle - 1] < nums[middle] || nums[middle - 1] === undefined) &&
            (nums[middle] > nums[middle + 1] || nums[middle + 1] === undefined)) return middle;

        if(nums[middle] < nums[middle + 1]) return search(middle + 1, end);
        else if(nums[middle] < nums[middle - 1]) return search(start, middle - 1);
    }

    return search();
};

console.log(findPeakElement([ 1, 2, 1, 3, 5, 6, 4 ])); // middle -> 3(3) -> 4 + 6
console.log(findPeakElement([1,2,3,1]));
console.log(findPeakElement([2, 1])); // should return 0
console.log(findPeakElement([1, 2])); // should return 0
