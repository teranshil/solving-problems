const subsetsWithDup = function(nums, start = 0) {

    const result = [[]];
    nums = nums.sort( (a, b) => a - b);

    const subset = (start = 0, combinations = []) => {
        if(start >= nums.length) return null;

        for (let index = start; index < nums.length; index++) {
            combinations.push(nums[index]);
            result.push([...combinations]);

            subset(index + 1, combinations);
            combinations.pop();
            while(nums[index] === nums[index + 1]) index++;
        }
    }

    subset();
    return result;
};

console.log( subsetsWithDup([1,2,2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log( subsetsWithDup([0])); // [[],[0]
console.log( subsetsWithDup([1, 2, 3])); // [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]
console.log( subsetsWithDup([4,4,4,1,4])); // [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]

