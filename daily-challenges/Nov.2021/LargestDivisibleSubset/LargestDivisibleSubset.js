const getLDSSize = (nums, cache) => {
    nums = nums.sort( (a, b) => a - b );
    cache.fill(1, 0);

    let ldsSize = 1;
    for (let outer = 0; outer < nums.length; outer++) {
        for (let inner = 0; inner < outer; inner++) {

            if(nums[outer] % nums[inner] === 0) {
                cache[outer] = Math.max(cache[outer], cache[inner] + 1);
                ldsSize = Math.max(cache[outer], ldsSize);
            }
        }
    }

    return ldsSize;
}

const constructLDS = (nums, cache, LDSSize) => {
    const elements = [];
    let previous = -1;

    for (let index = nums.length - 1; index >= 0; index--) {
        if(cache[index] === LDSSize && (previous === -1 || previous % nums[index] === 0)) {
            elements.unshift(nums[index]);
            LDSSize -= 1;
            previous = nums[index];
        }
    }

    return elements;
}

const largestDivisibleSubset = function(nums) {
    const cache = Array.from( { length: nums.length });
    return constructLDS( nums, cache, getLDSSize(nums, cache) );
};


console.log( largestDivisibleSubset([4, 8, 10, 240]) );
console.log( largestDivisibleSubset([1, 2, 4, 8]) );
console.log( largestDivisibleSubset([1, 2, 3]) );
