const search = function(nums, target, start = 0, end = nums.length - 1) {

    const middle = Math.floor((start + end) / 2);

    if(start > end) return -1;
    if(nums[middle] === target) return middle;

    // upper level condition are to decide in which part of the array we are in
    if(nums[start] <= nums[middle]) { // left
        return (target > nums[middle] || target < nums[start]) ? search(nums, target, middle + 1, end)
                                                               : search(nums, target, start, middle - 1);
    } else { // right
        return (target < nums[middle] || target > nums[end]) ? search(nums, target, start, middle - 1)
                                                             : search(nums, target, middle + 1, end);
    }
};

console.log( search([1, 2, 3, 4, 5, 6, 7, 0], 4));
console.log( search([5, 1, 3], 5));
console.log( search([5, 1, 3], 3));
console.log( search([1, 3], 3));
console.log( search([4, 5, 6, 7, 0, 1, 2], 6));