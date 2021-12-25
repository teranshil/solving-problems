// leetcode #930 v1.0
const numSubarraysWithSum = function(nums, goal) {

    const map = new Map();
    map.set(0, 1);
    let sum = 0;
    let count = 0;

    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];

        if (map.has(sum - goal)) count += map.get(sum - goal);

        if (!map.has(sum)) map.set(sum, 0);
        map.set(sum, map.get(sum) + 1);
    }

    console.log(map);

    return count;

};

const numSubarraysWithSumV2 = function(elements, goal) {

    let low = 0, high = 0, pointer = 0;
    let sum = 0, res = 0;

    while (pointer < elements.length) {

        sum += elements[pointer];
        while (low < pointer && sum > goal) sum -= elements[low++];
        high = low;
        while (high < pointer && elements[high] === 0) high++;
        if (sum === goal) res += high - low + 1;
        pointer++;
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}

console.log( numSubarraysWithSumV2( [1,0,1,0,1], 2) );