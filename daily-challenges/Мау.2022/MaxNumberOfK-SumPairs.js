const maxOperations = function(nums = [], sum) {
    const occurrences = new Map();
    let results = 0;

    for (let index = 0; index < nums.length; index++) {
        const number = occurrences.has(nums[index]) ? occurrences.get(nums[index]) : 0;
        occurrences.set(nums[index], number + 1);
    }

    for (let index = 0; index < nums.length; index++) {
        const firstOccurrences = occurrences.has(nums[index]) ? occurrences.get(nums[index]) : null;

        if(firstOccurrences === null || nums[index] >= sum) continue;
        const remainder = sum - nums[index];

        occurrences.set(nums[index], occurrences.get(nums[index]) -1);
        if(!occurrences.has(remainder) || (occurrences.has(remainder) && occurrences.get(remainder) <= 0) ) {
            occurrences.set(nums[index], occurrences.get(nums[index]) + 1);
            continue;
        }

        occurrences.set(remainder, occurrences.get(remainder) - 1);
        if(occurrences.get(remainder) === 0) occurrences.delete(remainder);

        if(occurrences.get(nums[index]) === 0) occurrences.delete(nums[index]);

        results++;
    }

    return results;
};

// console.log(maxOperations([1,2,3,4], 5)); // 2
// console.log(maxOperations([3,1,3,4,3], 6)); // 1
// console.log(maxOperations([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2)); // 2
// console.log(maxOperations([2,2,2,3,1,1,4,1], 4)); // 2

// two pointers approach
const maxOperationsSecond = function(nums = [], sum) {
    nums = nums.concat().sort();

    let start = 0, end = nums.length - 1, count = 0;

    while (start < end) {
        let result = nums[start] + nums[end];

        if(result > sum) end--;
        else if(result < sum) start++;
        else {
            start++;
            end--;
            count++;
        }
    }

    return count;
}

console.log(maxOperationsSecond([1,2,3,4], 5)); // 2
console.log(maxOperationsSecond([3,1,3,4,3], 6)); // 1
console.log(maxOperationsSecond([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2)); // 2
console.log(maxOperationsSecond([2,2,2,3,1,1,4,1], 4)); // 2