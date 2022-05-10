const letterCombinations = function(digits) {
    const lettersByNumber = [ 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ];
    const combinations = [];

    if(digits.length === 0) return combinations;
    digits = digits.split('').map(digit => Number.parseInt(digit));

    const backtracking = (count = 0, word = '') => {

        const letters = lettersByNumber[ digits[count] - 2];

        if(word.length === digits.length) {
            return combinations.push(word);
        }

        for (let index = 0; index < letters.length; index++) {
            backtracking(count + 1, word + letters[index]);
        }
    };

    backtracking();
    return combinations;
};

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
console.log(letterCombinations('3'));
