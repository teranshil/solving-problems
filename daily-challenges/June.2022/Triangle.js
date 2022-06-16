const minimumTotal = function(triangle) {
    const cache = [];

    const backtracking = (current = 0, index = 0) => {
        if(current === triangle.length - 1) return triangle[current][index];
        if(cache[current + '' + index] !== undefined) return cache[current + '' + index];

        const min = Math.min(backtracking(current + 1, index), backtracking(current + 1, index + 1));

        cache[current + '' + index] = triangle[current][index] + min;

        return cache[current + '' + index];
    };

    return backtracking();
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));
console.log(minimumTotal([[-10]]));
