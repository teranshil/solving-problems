
/** not optimized solution */
const findDuplicatesOriginal = function(nums) {
    const occurrences = [], twiceOccurred = [];

    for (let index = 0; index < nums.length; index++) {
        const number = nums[index];
        occurrences[number] = occurrences[number] === undefined ? 1 : occurrences[number] + 1;

        if(occurrences[number] === 2) { twiceOccurred.push(number) }
    }

    return twiceOccurred;
}

console.log( findDuplicatesOriginal([4,3,2,7,8,2,3,1]) );

/** optimized solution */
const findDuplicates = function(nums) {
    const twiceOccurred = [];
    for (let index = 0; index < nums.length; index++) {  

        const current = Math.abs(nums[index]) - 1;
        if (nums[current] < 0) {
            twiceOccurred.push(current + 1);
        } else {
            nums[current] *= -1;
        }
    }

    return twiceOccurred;
}

console.log( findDuplicates([4,3,2,7,8,2,3,1]) );