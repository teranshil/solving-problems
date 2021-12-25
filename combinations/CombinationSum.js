const combinationSum = function(candidates, target) {

    const result = [];
    const backtracking = (startIndex = 0, temp = [], sum = 0) => {

        if(sum === target) return result.push([...temp]);
        if(sum > target) return false;

        for (let index = startIndex; index < candidates.length; index++) {

            if( target >= sum + candidates[index] ) {
                temp.push(candidates[index]);
                backtracking(index, temp, sum + candidates[index]);
                temp.pop();

            } else {
                temp.push(candidates[index]);
                backtracking(index + 1, temp, sum + candidates[index]);
                temp.pop();
            }
        }
    }
    backtracking();
    return result;
};

console.log(combinationSum([1], 1));