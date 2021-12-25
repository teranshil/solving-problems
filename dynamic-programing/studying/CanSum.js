const canSumBruteForce = (numbers, target) => {
    if(target === 0) return true;
    if(target < 0) return false;

    for (const number of numbers) {
        if(canSumBruteForce(numbers, target - number)) return true;
    }

    return false;
}

/** using dynamic programming and memoization **/
const canSum = (numbers, target, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === 0) return true;
    if(target < 0) return false;

    for (const number of numbers) {
        if(canSum(numbers, target - number, memo)) {
            return true;
        }

        memo[target] = false;
    }

    return false;
}


const combinationsSum = (numbers, target) => {

    const result = [];
    const recursion = (startIndex = 0, sum = 0, temp = []) => {
        if(sum > target) return false;
        if(sum === target) return result.push([...temp]);

        for (let index = startIndex; index < numbers.length; index++) {
            temp.push(numbers[index]);
            const sum = temp.reduce((acc, e) => acc + e);
            (target - sum) % numbers[index] === 0 ? recursion(index, sum, temp) : recursion(index + 1, sum, temp);
            temp.pop();
        }
    }

    recursion();
    return result;
}
// console.log( combinationsSum([3], 8) );

/** tabulation approach */
const canSumBruteTabulation = (target, numbers) => {

    const tabulation = Array.from({ length: target + 1 }, () => false);
    tabulation[0] = true;

    for (let index = 0; index < tabulation.length; index++) {
        if(tabulation[index] === true) {
            for (const number of numbers) {
                if(index + number < tabulation.length) tabulation[index + number] = true;
            }
        }
    }

    return tabulation[target];
}

console.log( canSumBruteTabulation(7, [2, 3]));