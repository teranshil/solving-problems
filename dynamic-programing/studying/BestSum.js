const bestSum = (target, numbers, start = 0) => {

    if(target === 0) return [];
    if(target < 0) return null;
    let shortestCombination = null;

    for (let index = start; index < numbers.length; index++) {
        const remainder = target - numbers[index];
        const remainderCombination = bestSum(remainder, numbers, index);

        if(remainderCombination !== null) {
           const combination = [ numbers[index], ...remainderCombination ];
           if(shortestCombination === null || combination.length <= shortestCombination.length) {
              shortestCombination = combination;
           }

        }
    }

    return shortestCombination;
}
console.log(bestSum(100, [1, 2, 5, 25]));

const bestSumOptimized = (target, numbers, start = 0, memo = {}) => {

    let shortestCombination = null;
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;

    for (let index = start; index < numbers.length; index++) {
        const remainder = target - numbers[index];
        const remainderCombination = bestSumOptimized(remainder, numbers, index);

        if(remainderCombination !== null) {
            const combination = [ numbers[index], ...remainderCombination ];
            if(shortestCombination === null || combination.length <= shortestCombination.length) {
                shortestCombination = combination;
            }

        }
    }

    memo[target] = shortestCombination;
    return shortestCombination;
}

console.log( bestSumOptimized(100, [1, 2, 5, 25]) );