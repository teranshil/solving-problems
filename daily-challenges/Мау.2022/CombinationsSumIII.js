const combinationSum3 = function(countNumbers, total) {
    const combinations = [];

    const combine = (start = 1, sum = 0, digits = []) => {
        if(total < sum || digits.length > countNumbers) return null;

        if(total === sum && digits.length === countNumbers) {
            return combinations.push( [...digits] );
        }

        for (let index = start; index <= 9; index++) {
            digits.push(index);
            combine(index + 1, sum + index, digits);
            digits.pop();
        }
    }

    combine();
    return combinations;
};

console.log( combinationSum3(3, 7));
console.log( combinationSum3(3, 9));
console.log( combinationSum3(4, 1));
