const lengthOfLongestSubstring = (word) => {
    let start = 0, max = 1;
    const letters = new Map(); // letter -> last found index

    if(word.length === 0) return 0;
    for (let index = 0; index < word.length; index++) {
        if(letters.has(word[index])) {
            if (letters.get(word[index]) >= start) start = letters.get(word[index]);
        }

        max = Math.max(max, index + 1 - start);
        letters.set(word[index], index + 1);
    }

    return max;
};

console.log(lengthOfLongestSubstring('tmmzuxt')); // 5
console.log(lengthOfLongestSubstring('aabaab!bb')); // 3
console.log(lengthOfLongestSubstring('abba')); // 2
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring(' ')); // 1
console.log(lengthOfLongestSubstring('au')); // 2
