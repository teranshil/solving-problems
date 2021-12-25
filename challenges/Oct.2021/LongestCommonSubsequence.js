const longestCommonSubsequence = function(first, second) {

    if(second.length < first.length) [ second, first ] = [ first, second ];

    let count = 0, max = 0, last = first[0];
    for (let index = 0; index < first.length; index++) {
        const char = first[index];
        const currentIndex = second.indexOf(char);

        if(currentIndex !== -1 && currentIndex === second.indexOf(last) + 1) {
            count = count + 1;
        } else if(second.indexOf(char) !== -1) {
            count = 1;
            last = char;
        } else {
            count = 0;
        }

        if(max < count) max = count;
    }

    return max;
};

console.log( longestCommonSubsequence("abcde", "ace") );