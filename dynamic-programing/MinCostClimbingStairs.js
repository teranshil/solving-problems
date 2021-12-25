/** combinations way, Leetcode #746 (my way) **/
const minCostClimbingStairs = function(costs, memo = {}) {

    const recursion = (index = -1, sum = 0) => {

        let max = Number.MAX_SAFE_INTEGER;

        if(index in memo) return sum + memo[index];
        if(index >= costs.length) return sum;
        if(index !== -1) sum += costs[index];

        for (const step of [ 1, 2 ]) {
            const elementsSum = recursion(index + step, sum, memo);

            if(elementsSum < max) max = elementsSum;
        }

        memo[index] = Math.min(memo[index + 1] || 0, memo[index + 2] || 0) + costs[index];
        return max;
    }

    return recursion();
};

console.log( minCostClimbingStairs([10, 15, 20]) );

const minCostClimbingStairsOptimized = function(costs, memo = {}) {

    const cache = [];
    cache[0] = costs[0];
    cache[1] = costs[1];

    for (let index = 2; index < costs.length; index++) {
        cache[index] = costs[index] + Math.min( cache[index - 1], cache[index - 2]);
    }

    return Math.min(cache[costs.length - 1], cache[costs.length - 2]);
}

console.log( minCostClimbingStairsOptimized([10, 15, 20]) );