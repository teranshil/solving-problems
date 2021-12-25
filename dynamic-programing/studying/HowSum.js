/** return the first combination which adds up to the target
 * m = target sum, m is the height of the tree in the worst case scenario
 * n = numbers.length, n is number of branches in the tree
 * O(n^m) time, O(m) space
 * **/
const howSum = (numbers, target, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;

    for (const number of numbers) {
        const remainder = target - number;
        const result = howSum(numbers, remainder, memo);

        if(result !== null) return [ ...result, number ];
    }

    memo[target] = null;
    return null;
}
// console.log(howSum( [7, 14], 300) );

const howSumTabulation = (target, numbers) => {
    const tabulation = Array.from({ length: target + 1 }, () => null);
    tabulation[0] = [];

    for (let index = 0; index < tabulation.length; index++) {

        if(tabulation[index] !== null) {
            for (const number of numbers) {
                if(index + number < tabulation.length) {
                    tabulation[index + number] = [ ...tabulation[index], number ];
                }
            }
        }
    }

    return tabulation[target];
}

console.log( howSumTabulation(7, [ 5, 3, 4 ]) );