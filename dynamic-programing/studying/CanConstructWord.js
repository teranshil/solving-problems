/** O(n^m) time, n - length of elements, m - tree branches **/
const canConstruct = function(target, words = []) {
    if(target === '') return true;

    for (const word of words) {
        if(target.indexOf(word) !== 0) continue;

        const suffix = target.slice(word.length);
        if( canConstruct(suffix, words) ) return true;
    }

    return false;
}

console.log( canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));