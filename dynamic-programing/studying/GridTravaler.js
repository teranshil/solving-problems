const travel = function( size = 0) {
    const grid = Array.from({ length: size }, (_) => Array.from({ length: size }, (_) => 0));
    const visited = grid.map( row => row.slice() );
    const result = [];

    const recursion = (x, y) => {

        if(grid[x] === undefined || grid[x][y] === undefined) return;
        visited[x][y] = 1;
        if(x === grid.length -1 && y === grid[0].length -1) {
            return result.push( visited.map( row => row.slice()) );
        }

        recursion(x + 1, y);
        recursion(x, y + 1);
        visited[x][y] = 0;
    }

    recursion(0, 0);
    return result.length;
}

// console.table( travel(3 ) );

/** O(2^x+y) exponential time, O(x+y) space **/
const gridTraveler = function (x, y) {

    if(x === 1 && y === 1) return 1;
    if(x === 0 && y === 0) return 0;

    return gridTraveler(x - 1, y) + gridTraveler(x, y + 1);
}

/** O(x * y) time, O(x + y) space **/
const gridTravelerDynamic = function (x, y, memo = {}) {
    const key = x + ',' + y;
    if(key in memo) return memo[key];

    if(x === 1 && y === 0) return 1;
    if(x === 0 && y === 0) return 0;

    memo[key] = gridTravelerDynamic(x - 1, y, memo) + gridTravelerDynamic(x, y + 1, memo);
    return memo[key];
}

/** O(m * n) exponential time, O(m * n) space **/
const gridTravelerIterative = function (m, n) {

    const grid = Array.from( { length: m }, () => Array(n).fill(0) );
    grid[0][0] = 1;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            const current = grid[row][col];

            if(grid[row + 1] !== undefined) grid[row + 1][col] += current;
            if(grid[col + 1] !== undefined) grid[row][col + 1] += current;
        }
    }

    return grid[m - 1][n - 1];
}

console.log( gridTravelerIterative(3, 3));
