
/* time limit exception */
const maximumUniqueSubarray = (nums) => {
    let end = 0, start = 0;
    let max = Number.MIN_SAFE_INTEGER;
    const lastOccurredNumber = new Map();

    let current = 0;
    while (end < nums.length) {
        if(lastOccurredNumber.has(nums[end])) {
            const index = lastOccurredNumber.get(nums[end]);

            while(start <= index) {
                current -= nums[start++];
            }
        }

        lastOccurredNumber.set(nums[end], end);
        current += nums[end++];

        max = Math.max(max, current);
    }

    return max;
};

console.log(maximumUniqueSubarray([1, 4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5,2,1,2,5,2,1,2,5]));
