const islandPerimeter = function(grid) {

    for (let outer = 0; outer < grid.length; outer++) {
        for (let inner = 0; inner < grid[outer].length; inner++) {
            if(grid[outer][inner] === 1) {
                const visited = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(false));
                return dfs(outer, inner, visited);
            }
        }
    }

    function dfs(x, y, visited) {
        if(grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 0 ) return 1;
        if(visited[x][y]) return 0;

        visited[x][y] = true;
        return dfs(x + 1, y, visited) + dfs(x - 1, y, visited) +
               dfs(x, y + 1, visited) + dfs(x, y - 1, visited);
    }
};

// console.log( islandPerimeter([ [0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0] ]) );
// console.log( islandPerimeter([ [1] ]) );
// console.log( islandPerimeter([ [1, 0] ]) );
// console.log( islandPerimeter([ [1, 1], [0, 0] ]) );
console.log( islandPerimeter([ [1, 1], [1, 1] ]) );
// console.log( islandPerimeter([[1,1,0],[1,0,0]]) );
// console.log( islandPerimeter([[1,1,0],[1,1,1]]) );