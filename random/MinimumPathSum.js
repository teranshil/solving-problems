const minPathSum = function(grid) {
    const directions = [ [1, 0], [0, 1] ];
    const cache = new Map();

    const backtracking = (x = 0, y = 0) => {
        if(cache.has(x + '' + y)) return cache.get(x + '' + y);
        if(x === grid.length - 1 && y === grid[x].length - 1) return grid[x][y];

        let min = Number.MAX_SAFE_INTEGER;
        for (const direction of directions) {
            const nextX = x + direction[0];
            const nextY = y + direction[1];

            if(nextX >= grid.length || nextY >= grid[nextX].length) continue;
            min = Math.min(Math.abs(backtracking(nextX, nextY)) + Math.abs(grid[x][y]), min);
        }

        // const result = min === Number.MAX_SAFE_INTEGER ? grid[x][y] : min;

        cache.set(x + '' + y, min);
        return min;
    }

    return backtracking();
};

console.log(minPathSum([[5,0,1,1,2,1,0,1,3,6,3,0,7,3,3,3,1],[1,4,1,8,5,5,5,6,8,7,0,4,3,9,9,6,0],[2,8,3,3,1,6,1,4,9,0,9,2,3,3,3,8,4],[3,5,1,9,3,0,8,3,4,3,4,6,9,6,8,9,9],[3,0,7,4,6,6,4,6,8,8,9,3,8,3,9,3,4],[8,8,6,8,3,3,1,7,9,3,3,9,2,4,3,5,1],[7,1,0,4,7,8,4,6,4,2,1,3,7,8,3,5,4],[3,0,9,6,7,8,9,2,0,4,6,3,9,7,2,0,7],[8,0,8,2,6,4,4,0,9,3,8,4,0,4,7,0,4],[3,7,4,5,9,4,9,7,9,8,7,4,0,4,2,0,4],[5,9,0,1,9,1,5,9,5,5,3,4,6,9,8,5,6],[5,7,2,4,4,4,2,1,8,4,8,0,5,4,7,4,7],[9,5,8,6,4,4,3,9,8,1,1,8,7,7,3,6,9],[7,2,3,1,6,3,6,6,6,3,2,3,9,9,4,4,8]]));

// console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
// console.log(minPathSum([[1, 2, 3], [4, 5, 6]]));
// console.log(minPathSum([[1]]));


// const dfs = (grid, i, j) => {
//     if (i==grid.length||j==grid[0].length) {
//         return Infinity;
//     }
//     if(grid[i][j] < 0) {
//         return Math.abs(grid[i][j]);
//     }
//     if (i==grid.length-1 && j==grid[0].length-1) {
//         return grid[i][j];
//     }
//
//     grid[i][j]  = -1 * Math.min(
//         grid[i][j] + dfs(grid, i, j+1),
//         grid[i][j] + dfs(grid, i+1, j),
//     );
//
//     return Math.abs(grid[i][j]) ;
// }
// var minPathSumTemp = function(grid) {
//     return dfs(grid, 0, 0);
// };
//
// console.log(minPathSumTemp([[5,0,1,1,2,1,0,1,3,6,3,0,7,3,3,3,1],[1,4,1,8,5,5,5,6,8,7,0,4,3,9,9,6,0],[2,8,3,3,1,6,1,4,9,0,9,2,3,3,3,8,4],[3,5,1,9,3,0,8,3,4,3,4,6,9,6,8,9,9],[3,0,7,4,6,6,4,6,8,8,9,3,8,3,9,3,4],[8,8,6,8,3,3,1,7,9,3,3,9,2,4,3,5,1],[7,1,0,4,7,8,4,6,4,2,1,3,7,8,3,5,4],[3,0,9,6,7,8,9,2,0,4,6,3,9,7,2,0,7],[8,0,8,2,6,4,4,0,9,3,8,4,0,4,7,0,4],[3,7,4,5,9,4,9,7,9,8,7,4,0,4,2,0,4],[5,9,0,1,9,1,5,9,5,5,3,4,6,9,8,5,6],[5,7,2,4,4,4,2,1,8,4,8,0,5,4,7,4,7],[9,5,8,6,4,4,3,9,8,1,1,8,7,7,3,6,9],[7,2,3,1,6,3,6,6,6,3,2,3,9,9,4,4,8]]))
