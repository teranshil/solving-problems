/**
 * Leetcode 567
 * my original one -> 11.23% faster
 * */
const checkInclusion = function(s1, s2) {

    const uniques = new Map();
    let low = 0, high = 0;
    for (const char of s1) {
        uniques.has(char) ? uniques.set(char, uniques.get(char) + 1) : uniques.set(char, 1);
    }

    let copy = new Map(uniques);
    while (high < s2.length) {
        if(!copy.has(s2[high])) {
            copy = new Map(uniques);
            low += 1;
            high = low;
        }
        if(copy.has(s2[high])) {
            copy.get(s2[high]) > 1 ? copy.set(s2[high], copy.get(s2[high]) - 1) : copy.delete(s2[high]);
            high += 1;
        }

        if(copy.size === 0) return true;
    }

    return copy.size === 0;
}

console.log(checkInclusion("adc", "dcdbbbacd") );