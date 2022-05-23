const countConstruct = function(target, words = []) {
    let count = 0;
    if(target === '') return 1;

    for (const word of words) {
        if(target.indexOf(word) !== 0) continue;

        const suffix = target.slice(word.length);
        count += countConstruct(suffix, words);
    }

    return count;
}

console.log( countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl', 'l', 'e']) );

/* memoization */

const countConstructMemoization = (target, words = [], memo = {}) => {

    if(target === '') return 1;
    if(target in memo) return memo[target];

    let count = 0;
    for (const word of words) {
        if(target.indexOf(word) !== 0) continue;

        const suffix = target.slice(word.length);
        count += countConstruct(suffix, words);
    }

    memo[target] = count;
    return count;
}


const allConstruct = function(target, words = []) {
    if(target === '') return [ [] ];
    const result = [];

    for (const word of words) {
        if(target.indexOf(word) !== 0) continue;

        const suffix = target.slice(word.length);
        const combinations = allConstruct(suffix, words);
        const combinationsWithWord = combinations.map( combination => [...combination, word]);
        result.push( ...combinationsWithWord );
    }

    return result;
}

console.log( allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl', 'l', 'e']) );
