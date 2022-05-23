const permuteUnique = function(nums) {
    const results = [], uniqueResults = new Set();



    const backtracking = (uniques = [], current = 0) => {
        if(uniques.length === nums.length && !uniqueResults.has(uniques.reduce((acc, num) => acc + num, ''))) {
            uniqueResults.add(uniques.reduce((acc, num) => acc + num, ''));
            return results.push( [...uniques] );
        }

        for (let index = current; index < nums.length; index++) {

            while(nums[index] === nums[index + 1]) index++;
            uniques.push(nums[index]);

            backtracking(uniques, index);


            uniques.pop();
        }
    }

    backtracking();
    return results;
};


console.log(permuteUnique([1,1,2]));
