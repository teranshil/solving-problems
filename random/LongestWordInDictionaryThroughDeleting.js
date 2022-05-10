const findLongestWord = function(letters, dictionary) {
    let longestWord = '';
    for (const word of dictionary) {
        let first = 0, second = 0;

        while(first < word.length && second < letters.length) {
            if(word[first] === letters[second]) {
                first++;
            }

            second++
        }

        if(first !== word.length) continue;

        if(longestWord.length === word.length) {
            if(longestWord.localeCompare(word) === 1) longestWord = word;
        } else if(word.length > longestWord.length) {
            longestWord = word;
        }
    }


    return longestWord || '';
};


// console.log(findLongestWord('abpcplea', ["ale", "apple", "monkey", "plea"]));
// console.log(findLongestWord('abpcplea', ["a","b","c"]));
console.log(findLongestWord("bab", ["ba", "ab", "a", "b"]));
console.log(findLongestWord("wordgoodgoodgoodbestword", ["word","good","best","good"]));
