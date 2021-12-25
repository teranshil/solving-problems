const combinationSum2 = function(nums, target) {

    const result = [];
    nums = nums.sort( (a, b) => a - b);

    const backtracking = (startIndex = 0, temp = [], sum = 0) => {
        if( sum === target ) return result.push([...temp]);
        if( sum > target ) return false;

        for (let index = startIndex; index < nums.length; index++) {
            temp.push(nums[index]);
            backtracking(index + 1, temp, sum + nums[index]);
            while(index < nums.length - 1 && nums[index] === nums[index + 1]) index++;

            temp.pop();
        }
    }

    backtracking();
    return result;
};

console.log( combinationSum2([2,5,2,1,2], 5) );
console.log( combinationSum2([10,1,2,7,6,1,5], 8) );