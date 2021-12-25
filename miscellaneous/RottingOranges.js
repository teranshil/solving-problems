// v1 not finished
const orangesRotting = (grid) => {

    return rot(0, 0, grid, 0, 0);
};

const rot = (row, col, grid, count, times) => {

    if( count === grid.length * grid[0].length) return times;
    if( grid[row][col] === 0 ) { count += 1; return times; }

    if( grid[row][col] === 2) {
        count += 1;
        if(count !== 1 ) return times;
    }
    if( grid[row][col] === 1 ) { count += 1; grid[row][col] = 2; }

    times += 1;

    if( row + 1 < grid.length ) times = rot(row + 1, col, grid, count, times) - times;
    if( row - 1 >= 0 ) times = rot(row - 1, col, grid, count, times) - times;
    if( col + 1 <= grid[row].length ) times = rot(row, col + 1, grid, count, times) - times;
    if( col - 1 >= 0 ) times = rot(row, col - 1, grid, count, times) - times;
}

console.log( orangesRotting([ [2,1,1], [1,1,0], [0,1,1] ]))