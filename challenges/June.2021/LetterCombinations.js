
function letterCombinations( digits ) {

    const mappings = [ '0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ];
    let result = [];

    if(digits.length === 0) return result;

    letterCombinationsRecursive(result, digits, mappings, '', 0);

    let array = [];

    return result;
}

function letterCombinationsRecursive(result, digits, mappings, current, index) {

    if( index === digits.length ) {
        result.push(current);
        return;
    }

    let letters = mappings[ parseInt( digits[ index ]) ];
    for( let letterIndex = 0; letterIndex < letters.length; letterIndex++) {
        letterCombinationsRecursive(result, digits, mappings, current + letters[letterIndex], index + 1);
    }
}

console.log( letterCombinations('23'));