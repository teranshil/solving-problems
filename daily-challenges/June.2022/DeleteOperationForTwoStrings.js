const minDistance = function(word1, word2) {
    const cache = Array.from({ length: word1.length }, () => Array.from({ length: word2.length }));

    /* longest common subsequence */
    const lcs = (first = 0, second = 0) => {
        if(first >= word1.length || second >= word2.length) return 0;
        if(cache[first][second] !== undefined) return cache[first][second];

        cache[first][second] = 0;
        if(word1[first] === word2[second]) {
            cache[first][second] = lcs(first + 1, second + 1) + 1;
        } else {
            cache[first][second] = Math.max(lcs(first + 1, second), lcs(first, second + 1));
        }

        return cache[first][second];
    }

    return (word1.length + word2.length) - 2 * lcs();
};

console.log(minDistance("a","a"));
console.log(minDistance("sea","eat"));
console.log(minDistance("leetcode","etco"));
