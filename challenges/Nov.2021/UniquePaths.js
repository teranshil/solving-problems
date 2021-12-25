const uniquePaths = function(height, width) {
    const cache = {};
    const backtracking = (x = 0, y = 0) => {
        if((x + ':' + y) in cache) return cache[x + ':' + y];

        if(x === width - 1 && y === height - 1) return 1;
        if(x >= width || y >= height) return 0;

        cache[x + ':' + y] = backtracking(x + 1, y) + backtracking(x, y + 1);

        return cache[x + ':' + y];
    }

    return backtracking();
};

console.log( uniquePaths(23, 12));
