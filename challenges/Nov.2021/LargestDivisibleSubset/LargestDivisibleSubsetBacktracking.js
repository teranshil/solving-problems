const largestDivisibleSubset = function(nums) {
    const cache = Array.from( { length: nums.length }, () => -1);
    nums = nums.sort( (a, b) => a - b );

    let result = [];
    const backtracking = (start = 0, previous = 1, elements = []) => {
        if(elements.length > result.length) result = [ ...elements ];

        for (let index = start; index < nums.length; index++) {
            if(cache[index] < elements.length && nums[index] % previous === 0) {
                cache[index] = elements.length;
                elements.push( nums[index] );
                backtracking(index + 1, nums[index], elements);
                elements.pop();
            }
        }
    }

    backtracking();
    return result;
};

console.log( largestDivisibleSubset([ 5, 9, 18, 54, 108, 540, 90, 180, 360, 720 ]) );

console.log( largestDivisibleSubset([4, 8, 10, 240]) );
console.log( largestDivisibleSubset([1, 2, 4, 8]) );
console.log( largestDivisibleSubset([8, 4, 2, 1]) );
console.log( largestDivisibleSubset([1, 2, 3]) );



