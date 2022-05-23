const countVowelStrings = function(size) {
    let count = 0;
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ];

    const backtracking = (start = 0, word = '') => {
        if(word.length === size) return count++;

        for (let index = start; index < vowels.length; index++) {
            backtracking(index, word + vowels[index]);
        }
    }

    backtracking();
    return count;
};

// console.log( countVowelStrings(1) );
// console.log( countVowelStrings(2) );

const optimized = (size) => {

    const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
    const dp = Array.from({ length: size }, () => 1);

    for (let outer = vowels - 1; outer >= 0; outer--) {

    }
}
