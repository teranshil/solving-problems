// own solution Leetcode 695.
// const maxAreaOfIsland = function(grid) {
//     let maxArea = 0;
//     for (let outer = 0; outer < grid.length; outer++) {
//         for (let inner = 0; inner < grid[outer].length; inner++) {
//
//             if(grid[outer][inner] === 0) continue;
//             maxArea = Math.max(maxArea, calcArea(outer, inner, grid, 0))
//         }
//     }
//
//     return maxArea;
// };
//
// const calcArea = (x, y, grid, area) => {
//
//     if(x < 0 || x >= grid.length || y < 0 || y >= grid[0].length ) return area;
//     if(grid[x][y] === 0) return area;
//
//     grid[x][y] = 0;
//     area++;
//
//     area = calcArea(x + 1, y, grid, area);
//     area = calcArea(x - 1, y, grid, area);
//     area = calcArea(x, y + 1, grid, area);
//     area = calcArea(x, y - 1, grid, area);
//
//     return area;
// }

// used closure for performance improvement
const maxAreaOfIslandSecond = (grid) => {
    let max = 0;

    const calcAreaSecond = (x, y) => {

        if(x < 0 || x >= grid.length || y < 0 || y >= grid[0].length ) return 0;
        if(grid[x][y] === 0) return 0;

        grid[x][y] = 0;

        return ( 1 + calcAreaSecond(x + 1, y) +
            calcAreaSecond( x - 1, y) +
            calcAreaSecond(x, y + 1) +
            calcAreaSecond(x, y - 1) );
    }

    for (let outer = 0; outer < grid.length; outer++) {
        for (let inner = 0; inner < grid[outer].length; inner++) {

            if(grid[outer][inner] === 0) continue;
            max = Math.max(max, calcAreaSecond(outer, inner))
        }
    }

    return max;
};



const input = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];

console.log( maxAreaOfIslandSecond( input) );