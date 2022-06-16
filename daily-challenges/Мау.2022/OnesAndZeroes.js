/* time limit exception   */
const findMaxFormTimeLimit = function(strs, m, n) {
    let max = Number.MIN_SAFE_INTEGER;

    const backtracking = (start = 0, zeroesCount = 0, onesCount = 0, total = 0) => {
        if(zeroesCount >= 0 || onesCount >= 0) {
            max = Math.max(total, max);
        }

        for (let outer = start; outer < strs.length; outer++) {
            let tempZeroesCount = zeroesCount;
            let tempOnesCount = onesCount;

            for (let inner = 0; inner < strs[outer].length; inner++) {
                if(strs[outer][inner] === '0') tempZeroesCount -= 1;
                if(strs[outer][inner] === '1') tempOnesCount -= 1;
            }

            if(tempZeroesCount >= 0 && tempOnesCount >= 0) {
                backtracking(outer + 1, tempZeroesCount, tempOnesCount, total + 1);
            }
        }
    }

    backtracking(0, m, n);
    return max === Number.MIN_SAFE_INTEGER ? 0 : max;
};

// console.log(findMaxFormTimeLimit(["10", "0001", "111001", "1", "0"], 5, 3)); // 4
// console.log(findMaxFormTimeLimit(["10","0","1"], 1, 1)); // 2
// console.log(findMaxFormTimeLimit(["111","1000","1000","1000"], 9, 3)); // 3
// console.log(findMaxFormTimeLimit(["10","0001","111001","1","0"], 3, 4)); // 3

/* memoization */
const findMaxForm = function(strs, m, n) {
    const strFrequency = Array.from({ length: strs.length }, () => [0, 0]);
    const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => Array.from({ length: strs.length }, () => 0)) );

    const frequencyCount = (word) => {
        const frequency = [ 0, 0 ];

        for (let index = 0; index < word.length; index++) {
            word[index] === '0' ? frequency[0]++ : frequency[1]++;
        }

        return frequency;
    }

    const helper = (zeroesCount, onesCount, index = 0) => {

        // second condition is met if zeroesCount = 0 and onesCount = 0
        if(index >= strs.length || (zeroesCount + onesCount) < 0) {
            return 0;
        }

        if(dp[zeroesCount][onesCount][index] > 0) return dp[zeroesCount][onesCount][index];

        let countElIfCurrIncluded = 0;
        let countElIfCurrExcluded = 0;
        const zeroFrequency = strFrequency[index][0];
        const oneFrequency = strFrequency[index][1];

        if(zeroesCount >= zeroFrequency && onesCount >= oneFrequency) {
            countElIfCurrIncluded = helper(zeroesCount - zeroFrequency, onesCount - oneFrequency, index + 1 ) + 1;
        }

        countElIfCurrExcluded = helper(zeroesCount, onesCount, index + 1);

        dp[zeroesCount][onesCount][index] = Math.max(countElIfCurrIncluded, countElIfCurrExcluded);
        return dp[zeroesCount][onesCount][index];
    }

    for (let index = 0; index < strs.length; index++) {
        strFrequency[index] = frequencyCount(strs[index]);
    }

    return helper(m, n);
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)); // 4
console.log(findMaxForm(["10","0","1"], 1, 1)); // 2
console.log(findMaxForm(["111","1000","1000","1000"], 9, 3)); // 3
console.log(findMaxForm(["10","0001","111001","1","0"], 3, 4)); // 3
