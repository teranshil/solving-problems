const lengthOfLongestSubstring = function(chars) {

    const unique = new Set();
    let low = 0, high = 0, max = Number.MIN_SAFE_INTEGER;

    while( high < chars.length ) {

        if(!unique.has(chars[high])) {
            unique.add(chars[high]);
            high++;
        } else {
            unique.delete(chars[low]);
            low++;
        }

        max = Math.max(max, high - low);
    }

    return max === Number.MIN_SAFE_INTEGER ? 0 : max;
};

console.log( lengthOfLongestSubstring("") );